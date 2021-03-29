import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Dasboard from './pages/dasboard/dasboard';
import { useAppContext } from './store/context';
import DashboardPractice from './components/dashboardpractice/dashboardpractice'

function App() {
  const {state, dispatch} = useAppContext();

  console.log(state);

  useEffect(() => {
    dispatch({type:'stoploading'})
  },[])
  
  return (
    <div className="App">
      {state.apploading && <h4>application loading...</h4>}
      {  state.initializeapp && 
     <Switch>
     <Route exact path="/" component={Login}/>
     <Route exact path="/signup" component={Signup}/>
     <Route exact path="/dasboard" component={Dasboard}/>
     <Route path="/dashboardpractice" exact component={DashboardPractice} />


   </Switch> 
   }
      
      
      
    </div>
  );
}

export default App;
