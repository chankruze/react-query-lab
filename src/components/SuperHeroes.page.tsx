/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Oct 05 2022 12:28:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useEffect, useState } from "react";

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    // start loading
    setIsLoading(true);
    // fetch the data
    fetch(`${import.meta.env.VITE_API_URL}/superheroes`)
      .then((res) => res.json())
      .then((data) => {
        // end loading
        setIsLoading(false);
        // set result
        setResult(data);
      });
  }, []);

  return (
    <div className="p-4">
      {isLoading && <p>loading...</p>}
      {!isLoading && result.length > 0 && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
};
