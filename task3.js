'use strict'

var employees = {
    "permittedCountries": [{
            "employeeId": "1",
            "employeeAddress": {
                "city": "Bangalore",
                "state": "Karnataka"
            }
        },
        {
            "employeeId": "2",
            "employeeAddress": {
                "city": "Chennai",
                "state": "TamilNadu"
            }
        },
        {
            "employeeId": "4",
            "employeeAddress": {
                "city": "Bangalore",
                "state": "Karnataka"
            }
        },
        {
            "employeeId": "5",
            "employeeAddress": {
                "city": "Chennai",
                "state": "TamilNadu"
            }
        }
    ]
}
var employee = employees.permittedCountries;
employee.sort(function(a, b) {
    var employees1 = a.employeeAddress.state;
    var employees2 = b.employeeAddress.state;
    if (employees1 === employees2) {
        return 0;
    }
    if (employees1 < employees2) {
        return -1;
    }
    if (employees1 > employees2) {
        return 1;
    }
});
console.log(employee)