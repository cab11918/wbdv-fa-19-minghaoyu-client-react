import React from 'react'
import courses from '../services/courses'
import CourseRow from "../components/CourseRow";


export default class CourseService {
  static myInstance = null;

  courses = courses

  static getInstance() {
    if(CourseService.myInstance == null) {
      CourseService.myInstance = new CourseService()
    }
    return this.myInstance
  }

  findAllCourses() {
    return this.courses
  }

  createCourse(course) {
    this.courses.push(course)
  }

  findCourseById(courseId) {
    return  this.courses.find(course => course.id === courseId)
  }

  deleteCourse(courseId) {

    this.courses = this.courses.filter(course => course.id !== courseId)




  }


  updateCourse(courseId, course) {
    // ...
  }
}


// import React from 'react'
// import courses from '../services/courses'
// import CourseRow from "../components/CourseRow";
//
// export default class CourseService {
//   static myInstance = null;
//
//   courses = courses
//
//   static getInstance() {
//     if (CourseService.myInstance == null) {
//       CourseService.myInstance = new CourseService()
//     }
//     return this.myInstance
//   }
//
//   findAllCourses() {
//     return fetch('https://tranquil-hamlet-37825.herokuapp.com/api/courses')
//     .then(response => (response.json()))
//   }
//
//   createCourse(course) {
//     return fetch('https://tranquil-hamlet-37825.herokuapp.com/api/courses', {
//       method: 'POST',
//       body: JSON.stringify(course),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//   }
//
//   findCourseById(courseId) {
//     return fetch(
//         'https://tranquil-hamlet-37825.herokuapp.com/api/courses/' + courseId, {
//           method: 'GET',
//
//         }).then(function (response) {
//       return response.json();
//     })
//   }
//
//   deleteCourse(courseId) {
//
//     return fetch(
//         'https://tranquil-hamlet-37825.herokuapp.com/api/courses/' + courseId, {
//           method: 'DELETE',
//
//         })
//
//   }
//
//   updateCourse(courseId, course) {
//     return fetch(
//         'https://tranquil-hamlet-37825.herokuapp.com/api/courses/' + courseId, {
//           method: 'PUT',
//
//           headers: {
//             'content-type': 'application/json'
//           },
//           body: JSON.stringify(course)
//         })
//
//   }
// }
//
// // const CourseService = () =>
// //     <h1>hi there!</h1>
// //
// // function createCourse(course) {
// //   courses.push(course)
// //
// // }
// //
// // function findAllCourses() {
// //   return courses
// // }
// //
// // function findCourseById(id) {
// //   courses.find(id)
// // }
// //
// // function updateCourse(id, course) {
// //   courses.update(id, course)
// // }
// //
// // function deleteCourse(id) {
// //   courses.delete(id)
// // }
// //
// // export default CourseService