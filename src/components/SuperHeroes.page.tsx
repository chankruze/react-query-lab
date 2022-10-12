/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Oct 05 2022 12:28:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useEffect, useState } from "react";
import axios from "axios";

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    // start loading
    setIsLoading(true);
    // reset error
    setError("");
    // fetch the data
    axios
      .get(`${import.meta.env.VITE_API_URL}/superheroes`)
      .then(({ data }) => {
        // end loading
        setIsLoading(false);
        // set result
        setResult(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <div className="p-4">
      {isLoading && <p>loading...</p>}
      {!isLoading && error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {!isLoading && result.length > 0 && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
};
