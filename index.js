// Your code here
// has a function called createEmployeeRecord
function createEmployeeRecord(employee) {
    // console.log(employee, "employee") // [ 'Gray', 'Worm', 'Security', 1 ] employee
    // console.log(employee[0], "employee0") //Gray employee0 
    // console.log(employee[1], "employee1") // Worm employee1
    // console.log(employee[2], "employee2") // Security employee2
    return {
        // populates a firstName field from the 0th element
        firstName: employee[0],
        // populates a familyName field from the 1th element
        familyName: employee[1],
        // populates a title field from the 2th element
        title: employee[2],
        // populates a payPerHour field from the 3th element
        payPerHour: employee[3],
        // initializes a field, timeInEvents, to hold an empty Array
        timeInEvents: [],
        //  initializes a field, timeOutEvents, to hold an empty Array
        timeOutEvents: []
    }
}

// has a function called createEmployeeRecords
    function createEmployeeRecords(e) {
    // console.log(e, "e") 
    // [
    //     [ 'moe', 'sizlak', 'barkeep', 2 ],
    //     [ 'bartholomew', 'simpson', 'scamp', 3 ]
    //   ] e
    // console.log(e.length, "e length")
    // 2 e length

        // Iterate over e
        return e.map((record) => {
            // creates two records
            // correctly assigns the first names
            return createEmployeeRecord(record)
        })
    }

    // has a function called createTimeInEvent
    function createTimeInEvent(employeeRecord, dateStamp) {
        // console.log(employeeRecord, "employeeRecord") 
        // {
        //     firstName: 'Byron',
        //     familyName: 'Poodle',
        //     title: 'Mascot',
        //     payPerHour: 3,
        //     timeInEvents: [],
        //     timeOutEvents: []
        //   } employeeRecord

        // console.log(dateStamp, "dateStamp") // 2014-02-28 1400 dateStamp

        // extracts the correct date extracts the correct hour
        let [date, hour] = dateStamp.split(" ");        
        employeeRecord.timeInEvents.push({
            // creates the correct type
            type: "TimeIn", 
            // extracts the correct hour
            hour: parseInt(hour, 10),
            // extracts the correct date
            date
        })      
        return employeeRecord
    }

    // has a function called createTimeOutEvent
    function createTimeOutEvent(employeeRecord, dateStamp) {
        // extracts the correct date extracts the correct hour
        let [date, hour] = dateStamp.split(" ");
        employeeRecord.timeOutEvents.push({
            // creates the correct type
            type: "TimeOut",
            // extracts the correct hour
            hour: parseInt(hour, 10),
            // extracts the correct date
            date
        })
        return employeeRecord        
    }

    // hoursWorkedOnDate calculates the hours worked when given an employee record and a date
    function hoursWorkedOnDate(employeeRecord, dateStamp) {
        // console.log(employeeRecord, "employeeRecord")
        // {
        //     firstName: 'Julius',
        //     familyName: 'Caesar',
        //     title: 'General',
        //     payPerHour: 1000,
        //     timeInEvents: [ { type: 'TimeIn', hour: 900, date: '0044-03-15' } ],
        //     timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: '0044-03-15' } ]
        //   } employeeRecord
        //console.log(dateStamp, "dateStamp") // 0044-03-15 dateStamp
        // console.log(employeeRecord.timeInEvents, "employeeRecord.timeInEvents")
        // [ { type: 'TimeIn', hour: 900, date: '0044-03-15' } ] employeeRecord[timeInEvents]
        // console.log(employeeRecord.timeOutEvents, "employeeRecord.timeOutEvents")
        // [ { type: 'TimeOut', hour: 1100, date: '0044-03-15' } ] employeeRecord.timeOutEvents

        // Find comparison of date in employeeRecord to dateStamp for timeInEvents
        let employeeRecordDateIn = employeeRecord.timeInEvents.find( ({date}) =>
                date === dateStamp)
                // console.log(employeeRecordDateIn, "employeeRecordDateIn")
                // { type: 'TimeIn', hour: 900, date: '0044-03-15' } employeeRecordDateIn
                // console.log(employeeRecordDateIn.date, "employeeRecordDateIn.date")
                // 0044-03-15 employeeRecordDateIn.date
                
                // Get hour property from timeInEvents Set to variable timeIn
                // let timeIn = employeeRecordDateIn.hour
                // console.log(employeeRecordDateIn.hour, "employeeRecrdDateIn.hour")
                // 900 employeeRecrdDateIn.hour
                let timeIn = employeeRecordDateIn.hour/100
                // console.log(timeIn, "timeIn")
                // 9 timeIn
                
        // Find comparison of date in employeeRecord to dateStamp for timeOutEvents
        let employeeRecordDateOut = employeeRecord.timeOutEvents.find( ({date}) =>
                date === dateStamp)
                // console.log(employeeRecordDateOut, "employeeRecordDateOut")
                // { type: 'TimeOut', hour: 1100, date: '0044-03-15' } employeeRecordDateOut
                // console.log(employeeRecordDateOut.date, "employeeRecordDateOut.date")
                // 0044-03-15 employeeRecordDateOut.date

                // Get hour property from timeOutEvents Set to variable timeOut
                // let timeOut = employeeRecordDateOut.hour
                // console.log(employeeRecordDateOut.hour, "employeeRecrdDateOut.hour")
                // 1100 employeeRecrdDateOut.hour
                let timeOut = employeeRecordDateOut.hour/100
                // console.log(timeOut, "timeOut")
                //  11 timeOut
                // calculates that the employee worked 2 hours
                return timeOut - timeIn 
    }

    // wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
    function wagesEarnedOnDate(employeeRecord, dateStamp) {
        // console.log(employeeRecord, "employeeRecord")
        // {
        //     firstName: 'Julius',
        //     familyName: 'Caesar',
        //     title: 'General',
        //     payPerHour: 27,
        //     timeInEvents: [ { type: 'TimeIn', hour: 900, date: '0044-03-15' } ],
        //     timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: '0044-03-15' } ]
        //   } employeeRecord
        let payRate = employeeRecord.payPerHour
        // console.log(employeeRecord.payPerHour, "employeeRecord.payPerHour")
        // 27 employeeRecord.payPerHour
        // console.log(payRate, "payRate")
        // 27 payRate
        // calculates that the employee earned 54 dollars
        return payRate * hoursWorkedOnDate(employeeRecord,dateStamp)
    }

    // allWagesFor aggregates all the dates' wages and adds them together
    function allWagesFor(employeeRecord) {
        // console.log(employeeRecord, "employeeRecord")
        // {
        //     firstName: 'Julius',
        //     familyName: 'Caesar',
        //     title: 'General',
        //     payPerHour: 27,
        //     timeInEvents: [
        //       { type: 'TimeIn', hour: 900, date: '0044-03-14' },
        //       { type: 'TimeIn', hour: 900, date: '0044-03-15' }
        //     ],
        //     timeOutEvents: [
        //       { type: 'TimeOut', hour: 2100, date: '0044-03-14' },
        //       { type: 'TimeOut', hour: 1100, date: '0044-03-15' }
        //     ]
        // } employeeRecord
        
        // console.log(employeeRecord.payPerHour, "employeeRecord.payPerHour")  
        // 27 employeeRecord.payPerHour
        // let payRate = employeeRecord.payPerHour
            
        // Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record 
        // used as context. Amount should be returned as a number.
        // Testing for the first object in employeeRecord.timeInEvents[0].date
        //return wagesEarnedOnDate(employeeRecord, employeeRecord.timeInEvents[0].date)

        // totalEvent is the accumalator, e is the event => current value
        return employeeRecord.timeInEvents.reduce((totalEvent, e) => {
            // calculates that the employee earned 378 dollars
            return wagesEarnedOnDate(employeeRecord, e.date) + totalEvent
        },0)
    }

    // findEmployeeByFirstName exists
    function findEmployeeByFirstName(src, firstName) {
        // console.log("firstName", firstName)
        // firstName Loki

        // console.log("src", src)
        // src [
        //     {
        //       firstName: 'Loki',
        //       familyName: 'Laufeysson-Odinsson',
        //       title: 'HR Representative',
        //       payPerHour: 35,
        //       timeInEvents: [],
        //       timeOutEvents: []
        //     },
        //     {
        //       firstName: 'Natalia',
        //       familyName: 'Romanov',
        //       title: 'CEO',
        //       payPerHour: 150,
        //       timeInEvents: [],
        //       timeOutEvents: []
        //     }
        //   ]

        // finds "Loki"
        return src.find(obj => obj.firstName === firstName)
    }

    // calculatePayroll exists
    function calculatePayroll(employeeRecord) {
        // console.log(employeeRecord, "employeeRecord")
        // {
        //     firstName: 'Thor',
        //     familyName: 'Odinsson',
        //     title: 'Electrical Engineer',
        //     payPerHour: 45,
        //     timeInEvents: [ [Object], [Object], [Object] ],
        //     timeOutEvents: [ [Object], [Object], [Object] ]
        //   },
        //   {
        //     firstName: 'Loki',
        //     familyName: 'Laufeysson-Odinsson',
        //     title: 'HR Representative',
        //     payPerHour: 35,
        //     timeInEvents: [ [Object], [Object], [Object] ],
        //     timeOutEvents: [ [Object], [Object], [Object] ]
        //   },
        //   {
        //     firstName: 'Natalia',
        //     familyName: 'Romanov',
        //     title: 'CEO',
        //     payPerHour: 150,
        //     timeInEvents: [ [Object], [Object], [Object] ],
        //     timeOutEvents: [ [Object], [Object], [Object] ]
        //   },
        //   {
        //     firstName: 'Darcey',
        //     familyName: 'Lewis',
        //     title: 'Intern',
        //     payPerHour: 15,
        //     timeInEvents: [ [Object], [Object], [Object] ],
        //     timeOutEvents: [ [Object], [Object], [Object] ]
        //   },
        //   {
        //     firstName: 'Jarvis',
        //     familyName: 'Stark',
        //     title: 'CIO',
        //     payPerHour: 125,
        //     timeInEvents: [ [Object], [Object], [Object] ],
        //     timeOutEvents: [ [Object], [Object], [Object] ]
        //   },
        //   {
        //     firstName: 'Anthony',
        //     familyName: 'Stark',
        //     title: 'Angel Investor',
        //     payPerHour: 300,
        //     timeInEvents: [ [Object], [Object], [Object] ],
        //     timeOutEvents: [ [Object], [Object], [Object] ]
        //   }
        // ] employeeRecord

        // ...when passed an array of employee records
        // Iterate over employeeRecord. Use .reduce(m, e)
        return employeeRecord.reduce((m, e) => {
            // correctly sums the payroll burden to $11,880 
            // calculates that the employees earned 770 dollars
            // Call allWagesFor(e) = currentValue and ADD m = accumulator
            return allWagesFor(e) + m
        // initialValue is 0
        }, 0)
   }







    