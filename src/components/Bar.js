import React from "react"
import { animated, useSpring } from "react-spring"

const Bar = ({ color, width }) => {
  const spring = useSpring({
    width,
    from: { width: "0%" },
    config: { duration: 700 },
  })
  return (
    <svg width="100%" height="20px" style={{ border: "solid white 1px" }}>
      <animated.rect {...spring} height="100%" fill={color} />
    </svg>
  )
}

export default Bar
