import "./App.css";
import Header from "./components/Header.js";
import Body from "./components/video/BodyVideo.js";
import BodyChannel from "./components/channel/BodyChannel";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyChannel />
      <Body />
    </div>
  );
}

export default App;
