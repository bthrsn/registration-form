
const isDisabled = (value) => {
  if(!value || value.error) {
    return true
  } else {
    return false
  }
}

export default isDisabled;