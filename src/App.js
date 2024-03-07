import "./App.css";
import Header from "./Components/Header";
import TopValues from "./Components/TopValues";
import Tripadvisor from "./Components/Tripadvisor";
import WatchVideo from "./Components/WatchVideo";

function App() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Tripadvisor />
      <TopValues />
      <WatchVideo />
    </div>
  );
}

export default App;
