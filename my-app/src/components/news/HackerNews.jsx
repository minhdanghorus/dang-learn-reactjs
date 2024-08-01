import React, { useRef } from "react";
import axios from "axios";

//https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  const [hits, setHits] = React.useState([]);
  const [query, setQuery] = React.useState("react");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    console.log("response: ", response);
    setHits(response.data?.hits || []);
  };

  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div>
      <input type="text" className="border border-green-500 text-black p-5 mb-5" value={query} onChange={(e) => setQuery(e.target.value)}/>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
