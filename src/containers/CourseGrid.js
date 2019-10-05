import React from 'react'
import CourseRow from "../components/CourseRow";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTh, faSortAlphaDown} from '@fortawesome/free-solid-svg-icons'
import CourseServices from "../services/CourseService"
import CourseCard from "../components/CourseCard"

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

const CourseGrid = () =>
    <div className="row">
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>
      <div className="col-xs-12 col-md-4 col-lg-2">
        <CourseCard/>

      </div>


    </div>

export default CourseGrid