// src/App.jsx
import './App.css';
import IronhackLogo from "./assets/ironhack-logo-xs.png"
import MenuTop from "./assets/menu-top-xs.png"
import Icon1 from "./assets/icon1.png";
import Icon2 from "./assets/icon2.png"
import Icon3 from "./assets/icon3.png"
import Icon4 from "./assets/icon4.png"

function App() {
  return (
    <div className="App"></div>
     <div className="upperContainer">
      <div className="Navbar">
        <img src={IronhackLogo} alt="IronhackLogo" />
          <img src={MenuTop} alt="MenuTop" className="menutop" />
          </div>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library,and become a super Ninja developer</p>
          <button>Awesome!</button>
      </div>
      <div className="bodyContainer">
      <div className="imgsInfo">
      <img src={Icon1} alt="icon1" />
      <h4>Declarative</h4>
      <p>React makes it painless to create interactive UIs.</p>
      <img src={Icon2} alt="icon2" />  
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
          <img src={Icon3} alt="icon3" />
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the component's</p>
          <img src={Icon4} alt="icon4" />
          <h4>JSX</h4>
          <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
         </div>
        </div>
        );
}


export default App;