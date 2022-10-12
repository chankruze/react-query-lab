/*
Author: chankruze (chankruze@gmail.com)
Created: Wed Oct 05 2022 12:29:21 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  // use react-query
  const query = useQuery("super-heroes", () =>
    axios.get(`${import.meta.env.VITE_API_URL}/superheroes`)
  );

  // get the query props
  const { isLoading, isError, error, data, dataUpdatedAt } = query;

  return (
    <div className="p-4">
      {isLoading && <p>fetching superheroes...</p>}
      {isError && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {!isLoading && !isError && (
        <p>{new Date(dataUpdatedAt).toLocaleString()}</p>
      )}
      {!isLoading && !isError && data?.data && (
        <pre>{JSON.stringify(data.data, null, 2)}</pre>
      )}
    </div>
  );
};
