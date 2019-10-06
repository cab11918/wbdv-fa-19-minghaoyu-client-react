import React from 'react'
import CourseRow from "../components/CourseRow";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTh, faSortAlphaDown, faList, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import CourseServices from "../services/CourseService"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import CourseCard from "../components/CourseCard"
import CourseTable from "./CourseTable";
import {Link} from 'react-router-dom'


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

    <div>
      <Route path="/courseTable" component={CourseTable}/>

      <table className="table">
        <thead className="thead-dark">
        <tr>
          <th>
            Recent documents
          </th>

          <th>
            Owned by me
            &nbsp;
            <FontAwesomeIcon icon={faCaretDown}/>

          </th>


          <th>

            <button className={"btn btn-outline-light float-right"}>

              <FontAwesomeIcon icon={faSortAlphaDown}/>

            </button>

            <Link to="/courseTable">

            <button className={"btn btn-outline-light float-right"}>

              <FontAwesomeIcon icon={faList}/>

            </button>

            </Link>


          </th>
        </tr>
        </thead>
      </table>

      {

        courses.map(course =>
            <CourseCard
                key={course.id}
                title={course.title}
                ownedBy={course.ownedBy}
                lastModified={course.lastModified}
            />
        )
      }


    </div>

export default CourseGrid