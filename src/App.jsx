import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Chat />
      </div>
    </>
  );
}

export default App;
