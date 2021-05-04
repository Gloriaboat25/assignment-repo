import { Switch, Route } from 'react-router-dom';
import Burger from './Burger/Burger';
import Contact from './Burger/contacts/contact';
import Login from './landingpage/login'
import Signup from './landingpage/signup'
import Landing from './landingpage/landing'
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/burger" component={Burger}/>
      <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
