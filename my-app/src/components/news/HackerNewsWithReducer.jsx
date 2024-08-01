import React, { useRef } from "react";
import axios from "axios";

//https://hn.algolia.com/api/v1/search?query=react

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      // const newState = JSON.parse(JSON.stringify(state));
      return { ...state, hits: action.payload, loading: false };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};

const HackerNewsWithReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await axios.get(state.url);
      console.log("response: ", response);
      dispatch({ type: "SET_DATA", payload: response.data?.hits || [] });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      console.log("error: ", error);
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({
        type: "SET_ERROR",
        payload: `There was an error fetching data ${error}`,
      });
    }
  };

  //   // Add lodash debounce to prevent multiple API calls
  //   // const handleUpdateQuery = lodash.debounce((e) => {
  //   //   setQuery(e.target.value);
  //   // }, 1000);

  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <div className=" bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          className=" bg-blue-500 text-white font-semibold rounded-md flex-shrink-0 px-2"
        >
          Fetching
        </button>
      </div>
      {!state.loading && state.errorMessage && (
        <p className=" text-red-400 my-5">{state.errorMessage}</p>
      )}
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className=" p-3 bg-gray-200 mt-5 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
