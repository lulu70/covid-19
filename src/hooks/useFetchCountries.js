import React from "react"

const useFetchCountries = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState("")

  React.useEffect(() => {
    const getData = async () => {
      try {
        const allResponse = await fetch(
          "https://coronavirus-19-api.herokuapp.com/all"
        )
        const countriesResponse = await fetch(
          "https://coronavirus-19-api.herokuapp.com/countries"
        )
        const allJson = await allResponse.json()
        const countriesJson = await countriesResponse.json()
        if (allJson.error || countriesJson.error)
          throw new Error({
            allError: allJson.error,
            countriesError: countriesJson.error,
          })

        setData({
          all: allJson,
          countries: countriesJson,
        })
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    getData()
  }, [])
  return { data, loading, error }
}

export default useFetchCountries
