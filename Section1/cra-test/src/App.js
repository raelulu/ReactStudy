import logo from "./logo.svg";
import "./App.css";
import SmallImg from "./imgSmall.jpg";
import BigImg from "./imgBig.jpg";

function App() {
  function onClick() {
    import("./data.json").then(({ default: data }) => {
      console.log({ data });
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={BigImg} className="App-logo" alt="logo" />
        <img src={SmallImg} className="App-logo" alt="logo" />
        <button onClick={onClick}>데이터 보여주세요</button>
        <p>hello!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
