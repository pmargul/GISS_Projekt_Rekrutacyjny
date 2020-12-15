import React, { useState } from "react";
import InfoGeneral from "./Components/InfoGeneral";
import TaskWrapper from "./Components/TaskModule/TaskWrapper";
import Header from "./Components/Header/Header";
import AlertWrapper from "./Components/Common/Alert/AlertWrapper";
import ConnectionProblemInfo from "./Components/ConnectionProblemInfo";

function App() {
  const [error, riseError] = useState(false);

  return (
    <>
      <header>
        <Header />
      </header>
      <main role="main" style={{ paddingTop: "10px" }}>
        <AlertWrapper />
        {error ? (
          <ConnectionProblemInfo />
        ) : (
          <>
            <InfoGeneral />
            <TaskWrapper 
              riseError={(val) => riseError(val)} 
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
