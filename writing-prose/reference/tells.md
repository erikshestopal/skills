# Tells

A **tell** is a habit that makes text read as machine-written. A model picks it by default for every reader, where a person picks for one reader. Read the draft once for each group, strongest first. Fix a tell by stating the point plainly, and keep every fact.

Groups A and E justify an edit on one sighting. A tell marked *weak* needs a second tell in the same passage before you act.

## A. Staging instead of stating

1. **Not X but Y.** "It's not just a parser, it's a toolchain." State Y. Keep a contrast only when the reader really holds X.
   - Before: "The answer isn't more caching. It's fewer queries."
   - After: "The page makes 40 queries. Batching them into 2 cuts the load time."
2. **One-line closers.** "That's the real win." "No setup. No config." Cut the closer, or merge the fragments into one sentence with a claim.
3. **Sayings that sound deep.** "At its core", "the real question is". Write the specific claim.
4. **Run-up before the point.** "Here's the thing", "Let's dive in", "It turns out", "It's worth noting". Start with the point.
5. **Arguing with no one.** "To be clear", "I'm not saying", "You might think". State the claim the defense hides.
6. **Rhetorical questions.** A question the next sentence answers. State the problem.

## B. Rhythm by rule

7. **Forced triads.** Items in threes when the meaning has a different number. Use the real number.
8. **Describing the text.** "Three things to know." "This section covers..." State the first point.
9. **Repeated openings.** Several sentences in a row start with the same word. *Weak.*
10. **Stacked qualifiers.** "Could potentially", "might arguably". Keep one qualifier when the evidence supports it. *Weak.*
11. **Same rhythm everywhere.** Every sentence the same length, or every paragraph ending on a punchy line. *Weak.*

## C. Inflation

12. **AI words.** Additionally, align with, crucial, delve, enhance, fostering, garner, highlight (verb), interplay, intricate, key (adjective), landscape, meticulous, pivotal, quietly, robust, seamless, showcase, tapestry, testament, underscore, valuable, vibrant. Use the plain word.
13. **Inflated significance.** "Marks a pivotal moment", "plays a key role". Keep the fact and drop the significance.
14. **Shallow -ing riders.** "..., ensuring Y", "..., highlighting Z". Cut the rider, or make it its own sentence with evidence.
15. **Sales language.** Groundbreaking, stunning, game-changer, best-in-class. State what the thing is.
16. **Avoiding "is" and "has".** "Serves as", "stands as", "features", "boasts". Use "is" or "has".
17. **Vague links.** "Associated with", "tied to". Name the real relation: "calls", "owns", "replaces".
18. **Borrowed authority.** "Experts believe". Name the source and what it said, or cut the claim.
19. **Feelings instead of mechanisms.** "SQL you can read". Name the mechanism: "`.toSQL()` returns the exact query string". If the sentence fits another project's docs unchanged, cut it.
20. **Abstract metaphor nouns.** Substrate, wedge, vector, surface, primitive, harness, scaffolding, north star, flywheel, unlock. Use the concrete word.
21. **Analogies.** "The index is like a card catalog." Describe the real thing.
22. **Fake agency.** "The logs become searchable records." Name who or what acts.
23. **Empty emphasis.** Really, truly, very, deeply, make no mistake. Cut them.

## D. Formatting by rule

24. **Bold labels that repeat the text.** "**Performance:** Performance improved." Cut the label, or make it the word that makes the item different.
25. **Decorative headings.** Title case, emojis, arrows, or a rule between every section. Use sentence case.
26. **Dashes.** Em dashes, en dashes, and ` -- ` used as a dash. Use a period, a comma, or "and". Code, paths, URLs, and diagram arrows keep their dashes.
27. **Curly quotes.** Use straight quotes. *Weak.*
28. **Coined hyphen pairs.** "A reveal-style colon." Use dictionary words.
29. **Colon joins.** A colon that glues two clauses in a prose sentence. Use a period. A colon after a list label, before a list, or before an example is fine.

## E. Leftovers

30. **Chatbot residue.** "I hope this helps", "Great question", "You're absolutely right", "Let me know if". Keep the content and drop the wrapper.
31. **Guesses dressed as hedges.** "It appears that", "likely", "based on available information". Check it and state the result. If you can't check it, say why.
32. **Writing about the previous version.** "This replaces the old approach of..." Describe the current behavior. Only a changelog or migration guide covers the old version.
33. **Synonym cycling.** One thing named three ways. Pick one name.
34. **Answering in place.** "To answer the retry question, the job does retry." Write the sentence the text would have had from the start: "The job retries 3 times and then marks the row failed."

## When to leave text alone

Leave a watched phrase in a quotation, a title, a proper name, or a passage that discusses the phrase. In chat and review replies, keep what carries the user's voice: an odd specific detail, a real opinion, a mixed feeling, or a self-correction.
