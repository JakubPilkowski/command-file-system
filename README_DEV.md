## Limitations

- local development doesn't allow to use path aliases because ts-node in esm mode could not resolve path aliases

## Requirements

- every import need to contain '.js' extension in order to be readable for Node16 ts module builder
- in order to use commonjs you need to provide extension '.cjs'

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
- Display Files included in package `npm pack --dry run`
- Set prelease version `npm version prerelease --preid=<alpha|beta|rc>.<number_of_version>`. Example: `npm version prerelease --preid=alpha.1`
- Publish ready version `npm publish`

## Merge

1. If publicated version passes tests bump major, minor or patch version of repository and publish again
   -r tsconfig-paths/register
