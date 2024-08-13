import { isAppPageFile } from './is-app-page-file'

describe('isAppPageFile', () => {
  it('should identify valid app page files with default extensions', () => {
    expect(isAppPageFile('page.js')).toBe(true)
    expect(isAppPageFile('page.jsx')).toBe(true)
    expect(isAppPageFile('page.ts')).toBe(true)
    expect(isAppPageFile('page.tsx')).toBe(true)
  })

  it('should reject non-app page files', () => {
    expect(isAppPageFile('index.js')).toBe(false)
    expect(isAppPageFile('component.tsx')).toBe(false)
    expect(isAppPageFile('api.js')).toBe(false)
    expect(isAppPageFile('page.css')).toBe(false)
    expect(isAppPageFile('page.html')).toBe(false)
    expect(isAppPageFile('page.mjs')).toBe(false)
  })

  it('should correctly handle custom page extensions', () => {
    const customExtensions = ['mdx', 'jsx', 'mjs']
    expect(isAppPageFile('page.mdx', customExtensions)).toBe(true)
    expect(isAppPageFile('page.jsx', customExtensions)).toBe(true)
    expect(isAppPageFile('page.mjs', customExtensions)).toBe(true)
    expect(isAppPageFile('page.js', customExtensions)).toBe(false)
    expect(isAppPageFile('page.tsx', customExtensions)).toBe(false)
  })

  it('should correctly identify app page files in various directory structures', () => {
    expect(isAppPageFile('/app/dashboard/page.js')).toBe(true)
    expect(isAppPageFile('src/pages/about/page.tsx')).toBe(true)
    expect(isAppPageFile('./nested/deeply/page.js')).toBe(true)
    expect(isAppPageFile('C:\\Windows\\Path\\page.jsx')).toBe(true)
  })

  it('should reject files with additional extensions or prefixes', () => {
    expect(isAppPageFile('page.test.js')).toBe(false)
    expect(isAppPageFile('page.spec.tsx')).toBe(false)
    expect(isAppPageFile('page.min.js')).toBe(false)
    expect(isAppPageFile('page-component.js')).toBe(false)
    expect(isAppPageFile('my-page.js')).toBe(false)
  })

  it('should be case sensitive', () => {
    expect(isAppPageFile('Page.js')).toBe(false)
    expect(isAppPageFile('PAGE.jS')).toBe(false)
    expect(isAppPageFile('PaGe.Ts')).toBe(false)
    expect(isAppPageFile('PaGe.JsX')).toBe(false)
    expect(isAppPageFile('PaGe.TsX')).toBe(false)
  })
})
