export const onMountedInterval = (
  elementID: string[],
  callback: () => void,
  time = 100
) => {
  onMounted(() => {
    const interval = setInterval(() => {
      if (checkElementExist(elementID)) {
        callback()
        clearInterval(interval)
      }
    }, time)
  })
}

const checkElementExist = (elementID: string[]) => {
  for (const id of elementID) {
    const element = document.getElementById(id)!
    if (element === null) {
      return false
    }
  }
  return true
}
