const initialState = {
  countriesData: [],
  error: null,
  loading: false,
  favoriteCountries: [],
  filteredCountriesData: [],
  keyword: null,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES_REQUEST":
      return { ...state, loading: true };

    case "FETCH_COUNTRIES_SUCCESS":
      return { ...state, loading: false, countriesData: action.payload };

    case "FETCH_COUNTRIES_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "FILTER_COUNTRIES":
      const keyword = action.payload;
      const result = state.countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(keyword)
      );
      return { ...state, filteredCountriesData: result, keyword: keyword };

    case "ADD_FAVORITE_COUNTRIES": {
      const country = action.payload;
      const newFavCountry = [...state.favoriteCountries, country];
      return { ...state, favoriteCountries: newFavCountry };
    }

    case "REMOVE_FAVORITE_COUNTRIES": {
      const country = action.payload;
      const favoriteCountries = state.favoriteCountries.findIndex(
        (value) => value.name.common !== country.name.common
      );
      return { ...state, favoriteCountries };
    }

    default:
      return state;
  }
};

export default countriesReducer;
