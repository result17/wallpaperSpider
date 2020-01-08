function buildReg(key: string): RegExp {
  return new RegExp(key)
}

function isMatchedImgsHref(reg: RegExp, href: string): boolean {
  return reg.test(href)
}

export { buildReg, isMatchedImgsHref }