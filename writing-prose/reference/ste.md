# Simplified Technical English

Read this file when a sentence still reads stiff or vague after the rules in `SKILL.md`. It summarizes ASD-STE100 Issue 9. The official standard and its dictionary are the authority.

## Overrides

The user changed these STE rules. They win over the standard:

- Contractions are fine. STE rule 4.2 bans them.
- Parentheses are only for an identifier or a first-use abbreviation. Rule 8.3 permits more uses.
- Every sentence is complete, and related ideas are joined with "and", "because", or "so". A stack of short sentences reads like a list of fragments.

## Words

- Use an approved word only with its approved part of speech and meaning. One word, one part of speech, one meaning.
- A technical noun or technical verb is fine when it names a real thing in the domain. Use the name the code or the repo's glossary uses.
- Use one technical noun for one item through the whole text.
- Keep a noun cluster to three words or fewer. Break a longer one with a preposition or a clause.

Writers often use these words. Replace them by meaning, and not by blind swap:

| Instead of                  | Write                                   |
|-----------------------------|-----------------------------------------|
| avoid                       | prevent                                 |
| check (verb)                | examine, or do a check                  |
| ensure                      | make sure                               |
| however                     | but                                     |
| may                         | can                                     |
| perform                     | do                                      |
| required                    | necessary                               |
| should, shall               | must                                    |
| since, meaning "because"    | because                                 |
| therefore                   | so, or as a result                      |
| using, as a verb form       | use, or with                            |
| utilize, leverage           | use                                     |
| facilitate                  | help                                    |
| in order to                 | to                                      |
| due to the fact that        | because                                 |

## Verbs

- Use the imperative, the simple present, the simple past, and the simple future.
- Use a past participle only as an adjective that states a condition: "the closed connection".
- Leave out the perfect and progressive tenses. "The job has written" becomes "the job wrote". "The job is writing" becomes "the job writes".
- Use an `-ing` form only inside a technical noun, such as "sync scheduling".
- State the action with a verb. "Do a validation of the row" becomes "validate the row".

## Sentences

- A step has 20 words or fewer. A description has 25 words or fewer.
- A step gives one instruction in the imperative. When two actions happen at the same time, they can share a step.
- Put a condition before its command, and separate them with a comma: "If the image is absent, pull it."
- A note gives information only. The steps stay complete and safe when the reader skips every note.
- A paragraph has one topic, a topic sentence first, and six sentences or fewer.
- Keep the articles: "the", "a", "this".

## Counting words

- A number with its unit, an identifier, a code span, a proper name, and a hyphenated group each count as one word.
- A colon before a vertical list ends the sentence. Each list item counts as its own sentence.

## Google developer style

These rules come from the Google developer documentation style guide and work beside STE:

- Address the reader as "you". Use the present tense, and the future tense only for a real future event.
- Say what the reader can do and what the system does. Software has no feelings or intentions.
- Use American spelling and the Oxford comma.
- Use sentence case for headings.
- Format code, commands, file names, and identifiers as code, with their exact spelling.
- Introduce an example before it, and explain the result after it when the result isn't obvious.
- State the measurable behavior instead of a claim like "easy", "simple", "fast", or "best".
