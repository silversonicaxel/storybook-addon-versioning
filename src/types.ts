export type AddonParamVersion = 
  | {
    major: string
    minor: string
    patch: string
    postfix?: string
    style?: {
      [key: string]: string
    }
  }
  | null