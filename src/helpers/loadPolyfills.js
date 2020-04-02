function loadPolyfills() {
  const polyfills = []

  if (!supportsResizeObserver()) {
    polyfills.push(import("resize-observer-polyfill"))
  }

  return Promise.all(polyfills)
}

function supportsResizeObserver() {
  return (
    "ResizeObserver" in global &&
    "ResizeObserverEntry" in global &&
    "contentRect" in ResizeObserverEntry.prototype
  )
}

export default loadPolyfills
