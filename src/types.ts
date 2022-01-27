export type AddonParamVersion = 
  | {
    major: string
    minor: string
    patch: string
    postfix?: string
  }
  | null