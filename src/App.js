import { Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Dasboard from './pages/dasboard/dasboard';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/dasboard" component={Dasboard}/>


      </Switch>
      
    </div>
  );
}

export default App;
