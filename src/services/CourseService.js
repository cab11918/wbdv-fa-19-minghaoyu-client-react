import React from 'react'

const CourseService = () =>
    <h1>hi there!</h1>

function createCourse(course) {
    return fetch('/src/services/courses.json', {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })

}

function findAllCourses() {
    return fetch('/src/services/courses.json')
        .then(function (response) {
            return response.json();
        })
}

function findCourseById(id) {
    return fetch('/src/services/courses.json/' + id, {
        method: 'GET',

    }).then(function (response) {
        return response.json();
    })
}

function updateCourse(id, course) {
    return fetch('/src/services/courses.json/' + id, {
        method: 'PUT',

        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(course)
    })
}

function deleteCourse(id) {
    return fetch('/src/services/courses.json/' + id, {
        method: 'DELETE',

    })
}

export default CourseService