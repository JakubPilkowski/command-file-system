## Development

run local application: `npm run local <COMMAND> <ARGS>`
example: `npm run local gf index index.ts`

build local application:

1. `npm run build`
2. `npm link`
3. `cfs <COMMAND> <ARGS>`
4. example: `cfs gf index index.ts`

## Publication

- Testing locally `npm publish --dry run`
- Set prelease version `npm version prerelease --preid=<alpha|beta|rc>.<number_of_version>`
