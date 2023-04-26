import path from 'node:path'
import { glob } from 'glob'

export function defaultConversionFunction(filePath) {
  return (
    '/' + filePath.replace(/(^index.jsx?$|.jsx?$|\])/g, '').replace(/^\[/, ':')
  )
}

export default async function filesToRoutes(
  baseDir,
  globPath = '**/*.{js,jsx}',
  conversionFunc = defaultConversionFunction
) {
  const dir = path.resolve(process.cwd(), baseDir)
  const files = await glob(globPath, { cwd: dir })
  return files.map(filePath => ({
    route: conversionFunc(filePath),
    filePath: path.resolve(dir, filePath),
  }))
}
