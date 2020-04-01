import React from "react"
import { animated, useSpring, config } from "react-spring"

const Bar = ({ color, width }) => {
  const spring = useSpring({
    width,
    from: { width: "0%" },
    config: config.molasses,
  })
  return (
    <svg width="100%" height="5px">
      <animated.rect {...spring} height="100%" fill={color} />
    </svg>
  )
}

export default Bar
