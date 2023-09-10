import Landing from "./components/Landing";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Landing />
      </div>
    </>
  );
}

export default App;
