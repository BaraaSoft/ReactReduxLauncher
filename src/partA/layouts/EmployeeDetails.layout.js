import React, { Component } from 'react';
import { connect } from 'react-redux'


class EmployeeDetailsComp extends Component {
    state = {
        empId: null
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({ empId: params.empId })
    }
    render() {
        const { empId } = this.state;
        return (
            <div>
                <h2> This Employee Details {empId} </h2>
                <h2>
                    Name {this.props.employeeDetailsHR && this.props.employeeDetailsHR[0]}
                </h2>
            </div>
        );
    }
}


const mapStateToProps = ({ employeeDetailsHR }) => {
    return { employeeDetailsHR };
}

const EmployeeDetails = connect(mapStateToProps, {})(EmployeeDetailsComp)
export {
    EmployeeDetails
}