export const fetchCountryData = (countryname) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCountryRequest());
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryname}`
      ).then((response) => response.json());
      dispatch(fetchCountrySucces(response));
    } catch (error) {
      dispatch(fetchCountryFailure(error));
    }
  };
};

export const fetchCountryRequest = () => {
  return { type: "FETCH_COUNTRY_REQUEST" };
};

export const fetchCountrySucces = () => {
  return { type: "FETCH_COUNTRY_SUCCESS" };
};

export const fetchCountryFailure = () => {
  return { type: "FETCH_COUNTRY_Failure" };
};
