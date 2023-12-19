import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
function App() {
  return (
    <>
      <div
        className="MainBody flex items-start justify-center flex-col w-full"
        // style={{
        //   backgroundColor: "#e5e5f7",
        //   // opacity: 0.2,
        //   background:
        //     "radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 10px 10px, linear-gradient(#444cf7 0.8px, transparent 0.8px) 0 -0.4px, linear-gradient(90deg, #444cf7 0.8px, #e5e5f7 0.8px) -0.4px 0",
        //   backgroundSize: "20px 20px, 20px 20px, 10px 10px, 10px 10px",
        // }}
      >
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
      </div>
    </>
  );
}

export default App;
