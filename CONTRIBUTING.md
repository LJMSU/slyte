# Contributing

PRs are accepted. For large changes, please submit an issue first.

## Building

```sh
npm install
npx tsc
npm run format
```

_Tip: execute `npx onchange src/**/* -- tsc` for automated building._

## Testing

As for now, there is no automated testing available.

## Pushing changes to GitHub

```sh
npm run release
git push --follow-tags origin main && npm publish
```
