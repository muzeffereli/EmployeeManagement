import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }
  returnHome = () => {
    this.props.history.push('/employees');
  };

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <div className='card col-md-6 offset-md-3'>
          <h3 className='text-center'>View Employee details</h3>
          <div className='card-body'>
            <div className='row'>
              <label>Employee First Name:</label>
              <div>{this.state.employee.firstName}</div>
            </div>
            <div className='row'>
              <label>Employee Last Name:</label>
              <div>{this.state.employee.lastName}</div>
            </div>
            <div className='row'>
              <label>Employee Email: </label>
              <div>{this.state.employee.emailId}</div>
            </div>
            <br />
            <div className='row'>
              <button
                style={{ marginLeft: '30%' }}
                className='btn btn-info'
                onClick={this.returnHome.bind(this)}
              >
                Return to home page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
