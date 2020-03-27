import React from "react"
import useDispatchContext from "./useDispatchContext"
import novelCovid from "novelcovid"
import calculateColor from "../helpers/calculateColor"

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
        const color = calculateColor(all)
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
              color,
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
