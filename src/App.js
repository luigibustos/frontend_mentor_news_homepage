import NavBar from "./components/NavBar";
import Main from "./components/Main";
import News from "./components/News";
import Stories from "./components/Stories";

function App() {
  return (
    <div className="h-screen w-screen p-20 font-sans bg-offWhite">
      <NavBar />
      <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-6">
        <Main />
        <News />
        <Stories />
      </div>
    </div>
  );
}

export default App;
