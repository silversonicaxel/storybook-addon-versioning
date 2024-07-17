import { addons, types } from '@storybook/manager-api'
import { ADDON_ID, ADDON_TOOL_ID } from './constants'
import VersionTag from './views/VersionTag'

addons.register(ADDON_ID, () => {
  addons.add(ADDON_TOOL_ID, {
    type: types.TOOL,
    title: 'Version',
    match: () => true,
    render: VersionTag
  })
})
