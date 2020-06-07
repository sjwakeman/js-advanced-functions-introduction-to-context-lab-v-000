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

        // Find comparison of date in employeeRecord to dateStamp
        let employeeRecordDateIn = employeeRecord.timeInEvents.find( ({date}) =>
                date === dateStamp)
                console.log(employeeRecordDateIn, "employeeRecordDateIn")
                // { type: 'TimeIn', hour: 900, date: '0044-03-15' } employeeRecordDateIn
                
        
        let employeeRecordDateOut = employeeRecord.timeOutEvents.find( ({date}) =>
                date === dateStamp)
                console.log(employeeRecordDateOut, "employeeRecordDateOut")
                // { type: 'TimeOut', hour: 1100, date: '0044-03-15' } employeeRecordDateOut



            return date


        // Get hour property from timeInEvents Set to variable timeIn

        // Get hour property from timeOutEvents Set to variable timeOut

        // return timeOut - timeIn


            
            // let timeIn = createTimeInEvent(dateStamp);
            // console.log(timeIn, "timeIn")
            // let timeOut = createTimeOutEvent(dateStamp);
            // return timeOut - timeIn
            


        // let [date, hour] = date.split
        // console.log(employeeRecord[4].)
        // console.log(date, "date") // DOES NOT HIT
        // console.log(timeInEvents[0], "timedInEvents0") // DOES NOT HIT
        // console.log(timeOutEvents[0], "timeOutEvents0")  // DOES NOT HIT
        
        
        // return timeOutEvents - timeInEvents

        
    }