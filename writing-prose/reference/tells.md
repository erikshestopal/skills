# Tells

A **tell** is a habit that makes text read as machine-written. Each one is a default choice a model makes for every reader, where a person chooses for one reader. Read the draft once for each group, strongest group first. Fix a tell by stating the point plainly, and keep every fact.

Groups A and E justify an edit on one sighting. A tell marked *weak* needs a second tell in the same passage before you act.

## A. Staging instead of stating

1. **Not X but Y.** "It's not just a parser, it's a toolchain." "This doesn't mean X. It means Y." "..., no guessing." State Y. Keep a contrast only when the reader really holds X.
   - Before: "The answer isn't more caching. It's fewer queries."
   - After: "The page makes 40 queries. Batching them into 2 cuts the load time."
2. **One-line closers and fragments.** A short paragraph that repeats the one before it. "That's the real win." "Let that sink in." "No setup. No config." Cut the closer, or merge the fragments into one sentence with a claim.
3. **Sayings that sound deep.** "At its core", "the real question is", "X is the language of Y", "X becomes a trap". Write the specific claim.
4. **Run-up before the point.** "Here's the thing", "Let's dive in", "Here's what you need to know", "Quick note", "Honestly?", "It turns out", "It's worth noting". Start with the point.
5. **Arguing with no one.** "To be clear", "I'm not saying", "A tempting approach would be", "You might think". Remove the defense. State the claim it hides.
6. **Rhetorical questions.** Two or three questions in a row to sound thoughtful, or a question the next sentence answers. State the problem.

## B. Rhythm by rule

7. **Forced triads.** Items arrive in threes whether or not the meaning has three parts. Use the real number.
8. **Describing the text.** "Two cautions." "Three things to know." "The table below lists...", "This section covers...". State the first point. A heading goes straight into its table or list.
9. **Repeated openings.** Several sentences in a row start with the same word. Merge them or begin with the action. *Weak.*
10. **Stacked qualifiers.** "Could potentially", "might arguably", "it's also possible that". Keep one qualifier when the evidence supports it. *Weak.*
11. **Same rhythm everywhere.** Three sentences of the same length in a row, or every paragraph ending on a punchy line. Vary them. *Weak.*

## C. Inflation

12. **AI words.** Additionally, align with, crucial, delve, enduring, enhance, fostering, garner, highlight (verb), interplay, intricate, key (adjective), landscape (abstract), meticulous, pivotal, quietly, robust (figurative), seamless, showcase, tapestry, testament, underscore, valuable, vibrant. Use the plain word.
13. **Inflated significance.** "Marks a pivotal moment", "plays a key role", "setting the stage for", "a step in the right direction". Keep the fact and drop the significance.
14. **Shallow -ing riders.** "..., highlighting the need for X", "..., ensuring Y", "..., reflecting Z". Cut the rider, or make it its own sentence with evidence.
15. **Sales language.** Boasts, nestled, groundbreaking, stunning, game-changer, best-in-class. State what the thing is.
16. **Avoiding "is" and "has".** "Serves as", "stands as", "functions as", "features", "boasts". Use "is" or "has".
17. **Vague links.** "Associated with", "tied to", "in connection with". Name the real relation: "calls", "owns", "replaces".
18. **Borrowed authority.** "Experts believe", "industry reports suggest". Name the source and what it said, or cut the claim.
19. **Feelings instead of mechanisms.** "SQL you can read", "the database stays close at hand". Name the mechanism or the number: "`.toSQL()` returns the exact query string". If the sentence could appear unchanged in another project's docs, cut it.
20. **Abstract metaphor nouns.** Substrate, wedge, vector, surface, primitive, harness, scaffolding, north star, flywheel, unlock. Use the concrete word: "base", "add", "way", "API".
21. **Analogies.** "The index is like a card catalog." Describe the real thing.
22. **Fake agency.** "The logs become searchable records." Name who or what acts, unless an ordinary verb fits: "The API returns JSON."
23. **Puffery and empty emphasis.** Really, truly, very, deeply, it's important to note, this matters because, make no mistake. Cut them.

## D. Formatting by rule

24. **Bold labels.** "**Performance:** Performance improved." Remove the bold. Turn the labeled list into prose when the labels add nothing.
25. **Decorative headings.** Title case, emojis, arrows, a horizontal rule between every section, or a heading repeated in the next sentence. Use sentence case and let the content start.
26. **Dashes.** Em dashes, en dashes, and ` -- ` used as a dash. Use a period, a comma, or "and". Code, paths, and URLs keep their dashes.
27. **Curly quotes.** Use straight quotes. *Weak.*
28. **Coined hyphen pairs.** "A reveal-style colon." Use words a dictionary has: "a colon that shows the schema".
29. **Colon joins.** A colon that glues two clauses in prose. Use a period. A colon before a list or an example is fine.

## E. Leftovers

30. **Chatbot residue.** "I hope this helps", "Great question", "You're absolutely right", "Let me know if", "Want me to...?" Remove the wrapper and keep the content.
31. **Knowledge-limit hedges.** "Based on available information", "it appears that", "likely". Say what you checked and what you didn't. Never present a guess as a fact.
32. **Writing about the previous version.** "This replaces the old approach of ..." Describe the current behavior. A changelog or migration guide is the only place for the old version.
33. **Synonym cycling.** The same thing named three ways in one paragraph. Pick one name and repeat it.
34. **Answering in place.** A sentence added because someone asked a question reads as a reaction. Rewrite it as the sentence the text would have had from the start, or put the answer in the reply.
    - Before: "To answer the retry question, the job does retry, up to 3 times."
    - After: "The job retries 3 times and then marks the row failed."

## When to leave text alone

Leave a watched phrase in a quotation, a title, a proper name, or a passage that discusses the phrase. In chat and review replies, keep the details that carry the user's voice: an odd specific detail, a real opinion, a mixed feeling, or a self-correction.
