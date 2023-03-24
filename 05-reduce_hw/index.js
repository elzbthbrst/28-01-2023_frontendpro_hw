const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

function averageStudentMark(id) {
    const studentMarksArr = students.find((student) => {
        return student.id === id
    }).marks
    const studentMarcksAverage = studentMarksArr.reduce((accumulator, mark) => {
        return accumulator + mark
    })

    return studentMarcksAverage / studentMarksArr.length

}

// console.log(averageStudentMark(13));


function averageGroupMark(students) {
    let sumMarks = 0
    for (i = 0; i < students.length; i++) {
        sumMarks += students[i].marks.reduce((accumulator, mark) => {
            return accumulator + mark
        }) / students[i].marks.length


    };
    return sumMarks / students.length
}




// console.log(averageGroupMark(students));














// //smith
// const arrSmithMarks = getArrSmithMarks(students)
// const averageSmithMarks = getAverageSmithMarks(arrSmithMarks)

// //doe

// const arrDoeMarks = getArrDoeMarks(students)
// const averageDoeMarks = getAveragDoehMarks(arrDoeMarks)


// //anderson

// const arrAndersonMarks = getArrAndersonMarks(students)
// const averageAndersonMarks = getAverageAndersonMarks(arrAndersonMarks)

// //zorg

// const arrZorgMarks = getArrZorgMarks(students)
// const averageZorgMarks = getAverageZorgMarks(arrZorgMarks)


// function averageStudentMark(id) {
//     if (id === 10) {
//         return averageSmithMarks
//     } else if (id === 11) {
//         return averageDoeMarks
//     } else if (id === 12) {
//         return averageAndersonMarks
//     } else if (id === 13) {
//         return averageZorgMarks
//     }
// }


// function averageGroupMark(students) {
//     return (averageSmithMarks + averageDoeMarks + averageAndersonMarks + averageZorgMarks) / students.length
// }

// //SMITH functions

// function getArrSmithMarks(students) {
//     return students.find((student) => {
//         return student.id === 10
//     }).marks
// }

// //console.log(arrSmithMarks);

// function getAverageSmithMarks(arrSmithMarks) {
//     return arrSmithMarks.reduce((accumulator, mark) => {
//         return accumulator + mark
//     }) / arrSmithMarks.length
// }
// // console.log(averageSmithMarks);


// //DOE functions
// function getArrDoeMarks(students) {
//     return students.find((student) => {
//         return student.id === 11
//     }).marks
// }

// function getAveragDoehMarks(arrDoeMarks) {
//     return arrDoeMarks.reduce((accumulator, mark) => {
//         return accumulator + mark
//     }) / arrDoeMarks.length
// }

// // console.log(arrDoeMarks);
// // console.log(averageDoeMarks);


// //ANDERSON functions
// function getArrAndersonMarks(students) {
//     return students.find((student) => {
//         return student.id === 12
//     }).marks
// }

// function getAverageAndersonMarks(arrAndersonMarks) {
//     return arrAndersonMarks.reduce((accumulator, mark) => {
//         return accumulator + mark
//     }) / arrAndersonMarks.length
// }

// // console.log(arrAndersonMarks);
// // console.log(averageAndersonMarks);


// //ZONG FUNCTIONS
// function getArrZorgMarks(students) {
//     return students.find((student) => {
//         return student.id === 13
//     }).marks
// }

// function getAverageZorgMarks(arrZorgMarks) {
//     return arrZorgMarks.reduce((accumulator, mark) => {
//         return accumulator + mark
//     }) / arrZorgMarks.length
// }
// // console.log(arrZorgMarks);
// // console.log(averageZorgMarks);































