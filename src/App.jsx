import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <img
          src="https://r4.wallpaperflare.com/wallpaper/428/434/322/art-computer-digital-art-concept-art-wallpaper-b9a0c85d016a9d0b66a7b84f509116ad.jpg"
          alt="dnd-background-img"
          className="bg-image"
        />
        <img
          src="https://r4.wallpaperflare.com/wallpaper/428/434/322/art-computer-digital-art-concept-art-wallpaper-b9a0c85d016a9d0b66a7b84f509116ad.jpg"
          alt="dnd-background-img"
          className="scroll-mask-image"
        />

        <Dashboard />
      </main>
    </div>
  );
}

export default App;
