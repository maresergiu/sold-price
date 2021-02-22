const generateColorPrice = (housePrice, maxHouseVal) => {
  const valueIndex = (parseInt(housePrice) / maxHouseVal) * 100

  if (!valueIndex) {
    return '#FFFFFF'
  } else if (0 <= valueIndex && valueIndex <= 5) {
    return '#9eb3e8'
  } else if (5 <= valueIndex && valueIndex <= 25) {
    return '#5887FF'
  } else if (25 <= valueIndex && valueIndex <= 75) {
    return '#EEB902'
  } else if (75 <= valueIndex && valueIndex <= 95) {
    return '#F45D01'
  } else {
    return '#FF0000'
  }
}

const generateStylePosObj = (postion, parentWidth, parentHeight) => {
  return {
    width: `${parentWidth ? parentWidth / 100 : 0}px`,
    height: `${parentHeight ? parentHeight / 100 : 0}px`,
    top: Array.isArray(postion) ? `${postion[0]}%` : '0',
    left: Array.isArray(postion) ? `${postion[1]}%` : '0'
  }
}

export default {
  generateColorPrice,
  generateStylePosObj
}
