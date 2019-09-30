import React from 'react'

const courses = [
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},
  {title: 'Course 1', ownedBy: 123, lastModified: 1},

]

const CourseService = () =>
    <h1>hi there!</h1>

function createCourse(course) {
  courses.push(course)

}

function findAllCourses() {
  return courses
}

function findCourseById(id) {
  courses.find(id)
}

function updateCourse(id, course) {
  courses.update(id, course)
}

function deleteCourse(id) {
  courses.delete(id)
}

export default CourseService