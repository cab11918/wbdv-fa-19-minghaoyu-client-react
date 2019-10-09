import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WhiteBoard from "./WhiteBoard"
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTh,
  faSortAlphaDown,
  faList,
  faCaretDown,
  faBook
} from '@fortawesome/free-solid-svg-icons'
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";

const ModuleList = ({course, handleDelete,module,newModuleChanged,createModule}) =>

    <div className="container-fluid col-3">
      <div className="list-group wbdv-module-list" id="list-tab"
           role="tablist">

        {course.modules.map(module =>

            <a className="list-group-item list-group-item-action wbdv-module-item"
               id="list-module1"
               data-toggle="list"
               href="#module1" role="tab" aria-controls="module1">
                    <span className="wbdv-module-item-title">
                      {module.title}
                    </span>


              <button className="close"

                      onClick={() => {
                        handleDelete(module.id)
                      }}>


                <FontAwesomeIcon icon={faTimesCircle}/>


              </button>


              <button className="close">

                <FontAwesomeIcon icon={faEdit}/>
              </button>


            </a>
        )
        }
        <input

            onChange={newModuleChanged}
            placeholder={module.title}
            className="form-control "
             aria-label="Search">

        </input>
        <button
            className="btn btn-success btn-block mt-3"
            onClick={createModule}>
          <i className="fas fa-plus-circle"></i> New Module
        </button>
      </div>
    </div>



export default ModuleList
