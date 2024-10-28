// import "./App.css";

// Import Swiper styles
import "swiper/css";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <>
      <header className="header flex gap-x-5 items-center justify-center text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://genk.mediacdn.vn/2019/11/12/1-1573571042465953988347.jpeg"
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <div className="font-bold text-3xl mb-5">Avenger: Endgame</div>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Action
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Drama
              </span>
            </div>
            <button className="py-3 px-6 bg-primary rounded-lg text-white font-medium">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://s3.cloud.cmctelecom.vn/tinhte1/2018/05/4308115_preview.medium.jpg"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="capitalize text-xl font-bold mb-3">
              Doraemon và những hiệp sĩ không gian
            </h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 bg-primary rounded-lg text-white font-medium capitalize w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://s3.cloud.cmctelecom.vn/tinhte1/2018/05/4308115_preview.medium.jpg"
              alt=""
              className="w-full h-[250px] rounded-lg object-cover mb-5"
            />
            <h3 className="capitalize text-xl font-bold mb-3">
              Doraemon và những hiệp sĩ không gian
            </h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 bg-primary rounded-lg text-white font-medium capitalize w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
