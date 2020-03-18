import React from "react"

const useFetch = url => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState("")
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        if (json.error) throw json.error
        setData(json)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    getData()
  }, [url])
  return { data, loading, error }
}

export default useFetch
