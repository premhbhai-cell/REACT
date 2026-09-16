import "./App.css";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Fotter from "./components/Fotter";

function App() {
  return (
    <>
      <Navbar />
      <Category className={"py-10"} />
      <News />
      <Fotter className={"my-auto "} />
    </>
  );
}

export default App;
