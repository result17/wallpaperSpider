export function buildReg(key: string): RegExp {
  return new RegExp(key)
}

export function isMatchedImgsHref(reg: RegExp, href: string): boolean {
  return reg.test(href)
}