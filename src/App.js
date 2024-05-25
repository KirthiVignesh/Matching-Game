import React from "react";
import IntroScreen from "./components/IntroScreen";
import InstructionScreen from "./components/InstructionScreen";
import ActivityScreen from "./components/ActivityScreen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact Component={IntroScreen} />
          <Route path='/instruction-screen' exact Component={InstructionScreen} />
          <Route path='/activity-screen' exact Component={ActivityScreen} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;