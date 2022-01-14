import React from 'react'
import { useParameter } from '@storybook/api'
import { styled, css } from '@storybook/theming'
import { ADDON_PARAM_KEY } from '../constants'
import type { AddonParameters } from '../types'

const textStyles = css`
  align-self: center;
  border-radius: 0.25em;
  font-size: 11px;
  font-weight: 700;
  line-height: 20px;
  padding: 0 0.5em;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
`

const TextTag = styled.span`
  ${textStyles}
`

const VersionTag = () => {
  const parameters = useParameter(
    ADDON_PARAM_KEY,
    null,
  ) as AddonParameters | null

  if (parameters === null) {
    return null
  }

  const { version } = parameters

  const baseVersion = `${version.major}.${version.minor}.${version.patch}`
  const extraVersion = version.postfix ? `-${version.postfix}` : ''
  const text = `${baseVersion}${extraVersion}`


  return (
    <>
      <TextTag key={text} title={text}>
        {text}
      </TextTag>
    </>
  )
}

export default VersionTag
