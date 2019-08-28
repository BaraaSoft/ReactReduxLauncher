import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PageNav } from './common/components';
import { EmployeeDetails } from './hris/layouts'

class App extends Component {

  render() {
    return (
      <PageNav>
        <Route exact path="/employees/:empId" component={EmployeeDetails} />
      </PageNav>
    );
  }
}

export default App;
