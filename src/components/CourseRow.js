import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import CourseTable from "../containers/CourseTable";
import CourseEditor from "../containers/CourseEditor";
import CourseGrid from "../containers/CourseGrid";

const CourseRow = ({title, ownedBy, lastModified}) =>


      <tr>

        <td>
          <FontAwesomeIcon icon={faBook}/>
          <Link to="/courseEditor">


            {title}


          </Link>

        </td>
        <td>
          {ownedBy}
        </td>
        <td>
          {lastModified}
        </td>
        <td>
          <button className={"btn btn-outline-secondary float-right"}>
            <FontAwesomeIcon icon={faTimes}/>

          </button>

        </td>
      </tr>

export default CourseRow