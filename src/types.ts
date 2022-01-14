type AddonParamVersion = {
  major: string
  minor: string
  patch: string
  postfix?: string
}

export type AddonParameters = {
  version: AddonParamVersion
}