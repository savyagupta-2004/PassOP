import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  // const showtext = () => {
  //   return (
  //     <h1 className=" text-white">
  //       Welcome to{" "}
  //       <ReactTyped strings={["My React App"]} typeSpeed={100} loop />
  //     </h1>
  //   );
  // };

  return (
    <>
      <Navbar />
      <Manager />
      <Footer />
    </>
  );
}

export default App;
