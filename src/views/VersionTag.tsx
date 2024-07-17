import React from 'react'
import { useParameter } from '@storybook/manager-api'
import { styled, css } from '@storybook/theming'
import { ADDON_PARAM_KEY } from '../constants'
import type { AddonParamVersion } from '../types'

const VersionTag = () => {
  const parameters: AddonParamVersion = useParameter(ADDON_PARAM_KEY, null)

  if (parameters === null) {
    return null
  }

  const { major, minor, patch, postfix, style } = parameters

  const baseVersion = `${major}.${minor}.${patch}`
  const extraVersion = postfix ? `-${postfix}` : ''
  const text = `${baseVersion}${extraVersion}`
  
  const extraStyle = style && Object.entries(style)
    .map(([cssProperty, cssValue]: [string, string]) => `${cssProperty}: ${cssValue};`)

  const defaultStyle = css`
    align-self: center;
    border-radius: 0.25em;
    font-size: 11px;
    font-weight: 700;
    line-height: 20px;
    padding: 0 0.5em;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    ${extraStyle}
  `

  const TextTag = styled.span`
    ${defaultStyle}
  `

  return (
    <>
      <TextTag key={text} title={text}>
        {text}
      </TextTag>
    </>
  )
}

export default VersionTag
