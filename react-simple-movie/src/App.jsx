// import "./App.css";

function App() {
  return (
    <>
      <header className="header flex gap-x-5 items-center justify-center text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
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
    </>
  );
}

export default App;
