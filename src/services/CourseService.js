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


// const CourseService = () =>
//     <h1>hi there!</h1>
//
// function createCourse(course) {
//   courses.push(course)
//
// }
//
// function findAllCourses() {
//   return courses
// }
//
// function findCourseById(id) {
//   courses.find(id)
// }
//
// function updateCourse(id, course) {
//   courses.update(id, course)
// }
//
// function deleteCourse(id) {
//   courses.delete(id)
// }
//
// export default CourseService