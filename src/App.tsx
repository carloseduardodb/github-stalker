import { UserContextProvider } from "contexts/UserContext";
import React from "react";
import Routes from "routes";

function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
