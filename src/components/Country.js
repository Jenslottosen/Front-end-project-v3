import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryData } from "../redux/countryAction";
import CountryCard from "./CountryCard";

export default function Country() {
  const { countryname } = useParams();
  const dispatch = useDispatch();
  const countryNameData = useSelector(
    (state) => state.countryData.countryNameData
  );
  const loading = useSelector((state) => state.countryData.loading);
  const error = useSelector((state) => state.countryData.error);

  useEffect(() => {
    dispatch(fetchCountryData(countryname));
  }, [dispatch, countryname]);

  if (loading) return <div>Loading..!</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <Link to="/">Go Back</Link>
      {countryNameData &&
        countryNameData
          .filter(
            (data) =>
              data.name.common.toLowerCase() === countryname.toLowerCase()
          )
          .map((result) => {
            return (
              <>
                <CountryCard result={result} />
              </>
            );
          })}
    </div>
  );
}
