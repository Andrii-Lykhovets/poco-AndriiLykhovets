// Create an object person with properties firstName, lastName, and a method fullName that returns the
// full name.

const person = {
    firstName: 'Andrew',
    lastName: 'Wilson',
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

person.fullName();


// Create an object student with properties name, age, and an array of objects representing courses (with
// courseName and grade). Write a function to log the student’s name and their course grades.

const student = {
    name: 'Andrew',
    age: 25,
    courses: [{
        courseName: 'ForeignPolicy',
        grade: 85,
    }, {
        courseName: 'English',
        grade: 95,
    }, {
        courseName: 'Geopolitics',
        grade: 78,
    }, {
        courseName: 'Japanese',
        grade: 99,
    }]
}

function logStudentGrades(student) { 
    console.log(`${student.name}`)    
    for (let i = 0; i < student.courses.length; i++) {
        courseAccess = student.courses[i]
        console.log(`${courseAccess.courseName} ${courseAccess.grade}`)
    }
}


logStudentGrades(student)