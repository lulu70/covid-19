import React from "react"
import useDispatchContext from "./useDispatchContext"
import novelCovid from "novelcovid"
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
        const all = await novelCovid.getAll()
        const countries = await novelCovid.getCountry()

        if (all.error || countries.error)
          throw new Error({
            allError: all.error,
            countriesError: countries.error,
          })
        dispatch(
          setData({
            dataStatus: "SUCCESS",
            data: {
              all,
              countries,
            },
            currentCountry: {
              ...all,
              country: "Global",
              active: all.cases - all.deaths - all.recovered,
              countryInfo: {
                iso2: "global",
              },
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
