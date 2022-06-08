export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCountriesRequest());
      const response = await fetch("https://restcountries.com/v3.1/all").then(
        (response) => response.json()
      );
      dispatch(fetchCountriesSucces(response));
    } catch (error) {
      dispatch(fetchCountriesFailure(error));
    }
  };
};

export const fetchCountriesRequest = () => {
  return { type: "FETCH_COUNTRIES_SUCCESS" };
};

export const fetchCountriesSucces = (response) => {
  return { type: "FETCH_COUNTRIES_SUCCESS", payload: response };
};

export const fetchCountriesFailure = (error) => {
  return { type: "FETCH_COUNTRIES_SUCCES", payload: error };
};

export const addFavoriteCountries = (country) => {
  return { type: "ADD_FAVORITE_COUNTRIES", payload: country };
};

export const removeFavoriteCountries = (country) => {
  return { type: "REMOVE_FAVORITE_COUNTRIES", payload: country };
};

export const filteredCountries = (keyword) => {
  return { type: "FILTERED_COUNTRIES", payload: keyword };
};
