import { basename, sep } from 'path'
import type { PageExtensions } from '../build/page-extensions-type'

export function isAppPageFile(
  filePath: string,
  pageExtensions: PageExtensions = ['js', 'jsx', 'ts', 'tsx']
): boolean {
  const normalizedPath = filePath.split(/[\\/]/).join(sep)
  return new RegExp(`^page\\.(${pageExtensions.join('|')})$`).test(
    basename(normalizedPath)
  )
}
