import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faTh} from '@fortawesome/free-solid-svg-icons'

const CourseRow = ({title, ownedBy, lastModified}) =>
    <tr>

      <td>
        <FontAwesomeIcon icon={faBook}/>
        <a href="#">


          {title}

        </a>
      </td>
      <td>
        {ownedBy}
      </td>
      <td>
        {lastModified}
      </td>
      <td>
        <button className={"btn btn-outline-secondary float-right"}>
          <FontAwesomeIcon icon={faTrash}/>

        </button>

      </td>
    </tr>

export default CourseRow