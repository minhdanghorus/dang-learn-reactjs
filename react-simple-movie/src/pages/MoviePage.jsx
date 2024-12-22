import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;
const MoviePage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US&page=${nextPage}`
  );
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US&query=${filterDebounce}&page=${nextPage}&include_adult=false`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=cd274f8584c2f2d792eea93ffe4a8a94&language=en-US&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);

  const movies = data?.results || [];
  // const { page, total_pages } = data;
  console.log("🚀 ~ MovieList ~ data:", data);
  // console.log("🚀 ~ MoviePage ~ movies:", movies);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  useEffect(() => {
    if (!data || !data.total_results) return;
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="Text"
            className="w-full p-4 bg-slate-800"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className=" w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard item={item} key={item.id}></MovieCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
      {/* <div className="flex items-center justify-center mt-10 gap-x-5 hidden">
        <span
          className="cursor-pointer"
          onClick={() => {
            setNextPage(nextPage - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        {new Array(pageCount).fill(0).map((item, index) => {
          return (
            <span
              key={index}
              className="cursor-pointer inline-block py-2 px-4 rounded-lg bg-white text-slate-900 leading-none"
              onClick={() => {
                setNextPage(index + 1);
              }}
            >
              {index + 1}
            </span>
          );
        })}
        <span
          className="cursor-pointer"
          onClick={() => {
            setNextPage(nextPage + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div> */}
    </div>
  );
};

export default MoviePage;
