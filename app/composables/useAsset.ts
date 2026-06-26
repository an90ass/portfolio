export const useAsset = (path: string): string => {
  const { baseURL } = useRuntimeConfig().app
  return `${baseURL}${path}`.replace('//', '/')
}