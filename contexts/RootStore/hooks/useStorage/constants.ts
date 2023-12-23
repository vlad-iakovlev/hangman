export const LOCAL_STORAGE_KEY = 'rootStore'
export const LOCAL_STORAGE_VERSION = 1

export const getLocalStorageKey = (version = LOCAL_STORAGE_VERSION) => {
  return `${LOCAL_STORAGE_KEY}/v${version}`
}
