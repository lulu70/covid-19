export const initialState = {
  countryClicked: false,
  currentCountry: null,
}

export const types = {
  setCountryClicked: "SET_COUNTRY_CLICKED",
}
export const actions = {
  setCountryClicked: payload => ({
    type: types.setCountryClicked,
    payload,
  }),
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.setCountryClicked:
      return {
        ...state,
        countryClicked: payload,
      }
    default:
      return state
  }
}

export default reducer
