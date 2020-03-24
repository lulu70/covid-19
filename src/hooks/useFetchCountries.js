import React from "react"
import useDispatchContext from "./useDispatchContext"

const useFetchCountries = () => {
  const [dispatch, { setData }] = useDispatchContext()

  React.useEffect(() => {
    const getData = async () => {
      try {
        dispatch(
          setData({
            dataStatus: "LOADING",
          })
        )
        const allResponse = await fetch("https://corona.lmao.ninja/all")
        const countriesResponse = await fetch(
          "https://corona.lmao.ninja/countries"
        )
        const allJson = await allResponse.json()
        const countriesJson = await countriesResponse.json()
        if (allJson.error || countriesJson.error)
          throw new Error({
            allError: allJson.error,
            countriesError: countriesJson.error,
          })
        dispatch(
          setData({
            dataStatus: "SUCCESS",
            data: {
              all: allJson,
              countries: countriesJson,
            },
          })
        )
      } catch (err) {
        dispatch(
          setData({
            dataStatus: "ERROR",
            err,
          })
        )
      }
    }
    getData()
  }, [dispatch, setData])
}

export default useFetchCountries
