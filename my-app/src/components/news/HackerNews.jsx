import React, { useRef } from "react";
import axios from "axios";
import lodash from "lodash";

//https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  const [hits, setHits] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      console.log("response: ", response);
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
      setErrorMessage(`There was an error fetching data ${error}`);
    }
  };

  // Add lodash debounce to prevent multiple API calls
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 1000);

  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div className=" bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
        placeholder="Typing your keyword..."
        defaultValue={query}
        onChange={handleUpdateQuery}
      />
      {!loading && errorMessage && <p className=" text-red-400 my-5">{errorMessage}</p>}
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => <h3 key={item.title} className=" p-3 bg-gray-200 mt-5 rounded-md">{item.title}</h3>)}
      </div>
    </div>
  );
};

export default HackerNews;
