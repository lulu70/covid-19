export const initialState = {
  dataStatus: "INITIAL",
  error: null,
  data: null,
  countryClicked: false,
  currentCountry: "",
}

export const types = {
  setData: "SET_DATA",
  setCountryClicked: "SET_COUNTRY_CLICKED",
  setCurrentCountry: "SET_CURRENT_COUNTRY",
  setDataStatus: "SET_DATA_STATUS",
}
export const actions = {
  setData: payload => ({
    type: types.setData,
    payload,
  }),
  setCountryClicked: payload => ({
    type: types.setCountryClicked,
    payload,
  }),
  setCurrentCountry: payload => ({
    type: types.setCurrentCountry,
    payload,
  }),
  setDataStatus: payload => ({
    type: types.setDataStatus,
    payload,
  }),
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.setData:
      return {
        ...state,
        ...payload,
      }
    case types.setCountryClicked:
      return {
        ...state,
        countryClicked: payload,
      }
    case types.setCurrentCountry:
      return {
        ...state,
        currentCountry: payload,
      }

    case types.setDataStatus:
      return {
        ...state,
        dataStatus: payload,
      }

    default:
      return state
  }
}

export default reducer
