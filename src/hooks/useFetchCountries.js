import React from "react"

const useFetchCountries = countries => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState("")
  React.useEffect(() => {
    const fetchCountry = async country => {
      try {
        const response = await fetch(
          `https://covid19.mathdro.id/api/countries/${country}`
        )
        const json = await response.json()
        if (json.error) throw json.error
        setData(data => [...data, { ...json, name: country }])
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    countries.forEach(country => {
      fetchCountry(country)
    })
  }, [countries])
  return {
    data,
    loading,
    error,
  }
}
export default useFetchCountries
