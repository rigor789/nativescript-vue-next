type Platform = 'Android' | 'iOS'

let currentPlatform: Platform = 'Android'
export const setPlatform = (platform: Platform) => (currentPlatform = platform)
export const resetPlatform = () => (currentPlatform = 'Android')
export const getCurrentPlatform = () => currentPlatform
