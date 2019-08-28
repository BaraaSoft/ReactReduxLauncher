import { ActionType } from '../../common';

/* Every reducer in HRIS section has to end with ((HR)) */

const employeeDetailsHR = (state = ["Baraa the dev"], action) => {
    switch (action.type) {
        case ActionType.Hris_Fetch_EmployeeDetails:
            return state;
            break;

        default:
            return state;
            break;
    }
}

export {
    employeeDetailsHR
}