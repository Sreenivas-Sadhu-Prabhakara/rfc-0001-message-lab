# Message Lab

Inspect destination, link and trace fields; measure UTF-8 text against the historical message-body limit.

**[Open the interactive utility](https://sreenivas-sadhu-prabhakara.github.io/rfc-0001-message-lab/)** · [RFC 1](https://www.rfc-editor.org/rfc/rfc1.txt) · [Official status and errata](https://www.rfc-editor.org/info/rfc1)

## Community benefit

Understand why a message needs an address and a size limit. Intended audience: Students, educators and curious internet users.

## Run locally

Serve this folder with `python3 -m http.server 8000`, then open http://localhost:8000.
The site has no build step or runtime dependencies. Inputs remain in the browser.
Run meaningful behavioral tests with `node --test` (Node 22 or later).

## Evidence and limitations

Basis: RFC 1, I: Messages; Links; III: Establishment of a Connection.

Field layout is a visual convention, not an asserted wire bit order. UTF-8 is a modern input convenience. Link field capacity is distinguished from the 32 links in the proposal.

Legacy proposal, not a current Internet standard. This independent educational project is not affiliated with the IETF or RFC Editor.

## Publish

GitHub Pages serves `main` at `/`; assets use relative URLs. `.nojekyll` disables Jekyll processing.
See [PROMOTION.md](PROMOTION.md) for a classroom activity and sharing copy.
Original project code is MIT licensed; referenced RFCs retain their respective notices.

## Optional cloud CI

Tests run locally before publication. `ci/test.yml` is an inactive Actions template; activating it under `.github/workflows/` requires a GitHub credential with workflow permission.
