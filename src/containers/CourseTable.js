import React from 'react'
import CourseRow from "../components/CourseRow";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTh, faEye} from '@fortawesome/free-solid-svg-icons'

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

const CourseTable = () =>
    <div>
      <table className="table">
        <thead className="thead-dark">
        <tr>
          <th>
            Title
          </th>
          <th>
            Owned by
          </th>
          <th>
            Last modified
          </th>

          <th>
            <button className={"btn btn-outline-light float-right"}>

              <FontAwesomeIcon icon={faTh}/>

            </button>



          </th>
        </tr>
        </thead>
        <tbody>
        {
          courses.map(course =>
              <CourseRow
                  key={course.id}
                  title={course.title}
                  ownedBy={course.ownedBy}
                  lastModified={course.lastModified}
              />
          )
        }


        </tbody>
      </table>
    </div>

export default CourseTable