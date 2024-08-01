import React, { useRef } from "react";
import axios from "axios";
import lodash from "lodash";

//https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  const [hits, setHits] = React.useState([]);
  const [query, setQuery] = React.useState("react");
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
    }
    catch (error) {
        console.log("error: ", error);
        setLoading(false);
        setErrorMessage(`There was an error fetching data ${error}`);
    }
  };

  // Add lodash debounce to prevent multiple API calls
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 2000);

  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        className="border border-green-500 text-black p-5 mb-5"
        defaultValue={query}
        onChange={handleUpdateQuery}
      />
      {!loading && errorMessage && <p>{errorMessage}</p>}
      {loading && <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>}
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
