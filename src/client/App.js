import Tool from './tool';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router> 
      <Switch>
      <Route exact path="/" component={Tool} />
      </Switch>  
    </Router>
  );
}

export default App;
