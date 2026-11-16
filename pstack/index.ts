import type { PluginAPI } from '@ampcode/plugin'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const description =
	"pstack: poteto's rigorous agent workflows as Amp skills. Helpers run as Task subagents inside the calling thread; pstack_spawn only builds the Task call."

const ROOT = dirname(fileURLToPath(import.meta.url))

const PERSONAS = ['general', 'poteto-agent', 'comment-sicko'] as const
type Persona = (typeof PERSONAS)[number]

export interface SpawnInput {
	brief: string
	persona?: Persona
	readonly?: boolean
	wait?: boolean
}

function persona(name: Persona): string | undefined {
	if (name === 'general') return undefined
	const text = readFileSync(join(ROOT, 'agents', `${name}.md`), 'utf8')
	return text.replace(/^---\n[\s\S]*?\n---\n/, '').trim()
}

// pstack never starts threads: a verifier or helper is a Task subagent of the calling thread, so it runs where that thread runs.
export function spawn(input: SpawnInput): string {
	if (!input.brief?.trim()) throw new Error('Missing brief.')
	const rule = input.readonly ? 'Do not edit, create, or delete files, including through the shell.' : undefined
	const prompt = [persona(input.persona ?? 'general'), rule, input.brief].filter(Boolean).join('\n\n---\n\n')
	const mode = input.wait ? 'wait' : 'async'
	return [
		'No thread was created. pstack runs every helper as a subagent of this thread, so make this call yourself now with the Task tool.',
		`Pass mode: "${mode}", a short description, and the prompt below unchanged. The subagent starts with a fresh context, runs on this thread's model and machine, and shares this checkout.`,
		'Do not start a thread for it with create_thread or any other tool.',
		`<prompt>\n${prompt}\n</prompt>`,
	].join('\n\n')
}

export default async function (amp: PluginAPI) {
	const skills = join(ROOT, 'skills')
	for (const name of readdirSync(skills).sort()) {
		if (!existsSync(join(skills, name, 'SKILL.md'))) continue
		// poteto-mode reads each principle by name, so they stay loadable but out of the skills list.
		await amp.registerSkill({ path: `skills/${name}`, listed: !name.startsWith('principle-') })
	}

	amp.registerTool({
		name: 'pstack_spawn',
		description: [
			'Build the Task call for a pstack subagent, with an optional persona and read-only rule. It never creates a thread.',
			'It returns the prompt to pass to the Task tool, which runs the subagent inside this thread with a fresh context. Skills now call Task directly; this tool remains for callers that still name pstack_spawn.',
		].join(' '),
		inputSchema: {
			type: 'object',
			properties: {
				brief: { type: 'string', description: 'The full, standalone prompt for the subagent.' },
				persona: { type: 'string', enum: [...PERSONAS], description: 'poteto-agent for poteto-mode delegates, comment-sicko for /no-comments, general otherwise.' },
				readonly: { type: 'boolean', description: 'Tell the subagent not to write files.' },
				wait: { type: 'boolean', description: 'Return a blocking Task call instead of an async one.' },
			},
			required: ['brief'],
		},
		async execute(input) {
			return spawn(input as unknown as SpawnInput)
		},
	})
}
