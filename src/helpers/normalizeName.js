const normalizeName = word => {
  if (word.includes(",")) {
    const arr = word.split("")
    const slicedArr = arr.slice(0, arr.indexOf(","))
    return slicedArr.join("")
  } else return word
}

export default normalizeName
