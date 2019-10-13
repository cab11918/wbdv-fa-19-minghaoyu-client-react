import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';




const CourseRow = ({courses,handleDelete}) =>
    <tbody>
    {
      courses.map(course =>

          <tr>

            <td>
              <FontAwesomeIcon icon={faBook}/>
              &nbsp;
              <Link to={`/CourseEditor/${course.id}`}
              >


                {course.title}


              </Link>


            </td>
            <td>
              {course.ownedBy}
            </td>
            <td>
              {course.lastModified}
            </td>
            <td>
              <button className={"btn btn-outline-secondary float-right"}
                      onClick={() => {
                        handleDelete(course.id)
                      }}>
                <FontAwesomeIcon icon={faTimes}/>

              </button>

            </td>
          </tr>
      )
    }


    </tbody>

    export default CourseRow;

