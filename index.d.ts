export function defaultConversionFunction(filePath: string): string

export default function filesToRoutes(
  baseDir: string,
  globPath?: string,
  conversionFunc?: typeof defaultConversionFunction
): Promise<{ route: string; filePath: string }[]>
