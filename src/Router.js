import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="login" initial component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene initial rightTitle="Add" onRight={() => Actions.employeeCreate() } key="employeeList" component={EmployeeList} title="Employee List" />
          <Scene component={EmployeeCreate} key="employeeCreate" title="Create Employee"/>
          <Scene component={EmployeeEdit} key="employeeEdit" title="Edit Employee" />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
