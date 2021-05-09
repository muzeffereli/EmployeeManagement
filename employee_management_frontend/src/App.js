import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <div className='container'>
          <Switch>
            <Route path='/' exact component={ListEmployeeComponent}></Route>
            <Route
              path='/employees'
              exact
              component={ListEmployeeComponent}
            ></Route>
            <Route
              path='/add-employee/:id'
              exact
              component={CreateEmployeeComponent}
            ></Route>
            {/* <Route
              path='/update-employee/:id'
              exact
              component={UpdateEmployeeComponent}
            ></Route> */}
            <Route
              path='/view-employee/:id'
              exact
              component={ViewEmployeeComponent}
            ></Route>
          </Switch>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
