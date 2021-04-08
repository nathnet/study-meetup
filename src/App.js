import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sessions from "./pages/Sessions";
import HostSession from "./pages/HostSession";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/sessions" exact component={Sessions} />
          <Route path="/host" exact component={HostSession} />
          <Route path="*" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
