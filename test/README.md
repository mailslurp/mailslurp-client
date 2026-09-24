# Developing and testing the client

The tests are a private package with their own manifest and lockfile. Vitest,
coverage tooling, Express, and test types are installed here, separately from
the SDK's build and documentation tools. The published SDK depends only on
`cross-fetch`; the entire `test/` directory is excluded from its npm tarball.

Use Node.js 22.12+, 24.x, or 26+ for development. Vitest and the documentation
linter require modern Node.js; the SDK's runtime requirements are unchanged.

From the repository root:

```sh
npm ci
npm run test:install
npm test
npm run test:typecheck
npm run test:package
```

`npm test` (also `npm run integration`) builds the SDK and runs Vitest once,
including both `*.spec.ts` and the README's `*.use.ts` examples. JUnit output is
written to `test-results/junit.xml`; coverage of `dist/**/*.js` is written to
`coverage/`. For a focused run, use `npm run integration -- fetch-api.spec.ts`.
After building, `npm --prefix test test` runs the suite without coverage.

Live email tests require `API_KEY`; phone tests require `PHONE_KEY` and optionally
`TEST_ID`. These tests are reported as skipped when their key is absent. Keys
must be supplied as environment variables; `.env` is not loaded automatically.
Live tests create resources and send messages in the configured account.

Express is used by the webhook example in `webhook.use.ts`. Its built-in JSON
middleware handles request bodies. The example is also extracted into the main
README by `npm run readme`.

Remark, `remark-cli`, and `remark-validate-links` are documentation tools used by
`scripts/lint.sh`, alongside `markdownlint-cli`. They remain root development
dependencies; npm does not install them for SDK consumers. The legacy
`make docs-test` recipe is currently commented out.

TypeScript 6.0 is used for both the SDK build and test type checking. The SDK
keeps its ES5 output target, with `ignoreDeprecations: "6.0"` for the existing
ES5/Node module-resolution settings. TypeScript 7 removes ES5 output and is not
yet supported by TypeDoc. TypeDoc 0.28 and its matching plugins support the
TypeScript 6 compiler API.

Run `npm run fmt` to format source and test files with Oxfmt.
Use `npm run fmt:check` to check without changing files. `.oxfmtrc.json` preserves the previous
80-column, two-space, single-quote formatting settings. Package lockfiles are
excluded and package.json key sorting is disabled.
