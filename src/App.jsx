import Landing from "./components/Landing";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useState } from "react";

function App() {
  const [conditionalRender, setConditionalRender] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar />
        {conditionalRender ? (
          <Chat />
        ) : (
          <Landing
            conditionalRender={conditionalRender}
            setConditionalRender={setConditionalRender}
          />
        )}
      </div>
    </>
  );
}

export default App;
