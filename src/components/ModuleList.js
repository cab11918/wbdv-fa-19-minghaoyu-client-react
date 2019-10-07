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



class ModuleList extends React.Component {
  render() {
    return(
        <div className="container-fluid col-3">
          <div className="list-group wbdv-module-list" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action active wbdv-module-item"
               id="list-module1"
               data-toggle="list"
               href="#module1" role="tab" aria-controls="module1">
                    <span className="wbdv-module-item-title">
                        Module1-JQuery
                    </span>


              <button className="close"
                      type="submit">


                <FontAwesomeIcon icon={faTimesCircle}/>


              </button>


              <button className="close"
                      type="submit">

                <FontAwesomeIcon icon={faEdit}/>
              </button>


            </a>

            <a className="list-group-item list-group-item-action wbdv-module-item"
               id="list-module1"
               data-toggle="list"
               href="#module1" role="tab" aria-controls="module1">
                    <span className="wbdv-module-item-title">
                        Module2-JQuery
                    </span>


              <button className="close"
                      type="submit">


                <FontAwesomeIcon icon={faTimesCircle}/>


              </button>


              <button className="close"
                      type="submit">

                <FontAwesomeIcon icon={faEdit}/>
              </button>


            </a>

            <a className="list-group-item list-group-item-action wbdv-module-item"
               id="list-module1"
               data-toggle="list"
               href="#module1" role="tab" aria-controls="module1">
                    <span className="wbdv-module-item-title">
                        Module3-JQuery
                    </span>


              <button className="close"
                      type="submit">


                <FontAwesomeIcon icon={faTimesCircle}/>


              </button>


              <button className="close"
                      type="submit">

                <FontAwesomeIcon icon={faEdit}/>
              </button>


            </a> <a
              className="list-group-item list-group-item-action wbdv-module-item"
              id="list-module1"
              data-toggle="list"
              href="#module1" role="tab" aria-controls="module1">
                    <span className="wbdv-module-item-title">
                        Module4-JQuery
                    </span>


            <button className="close"
                    type="submit">


              <FontAwesomeIcon icon={faTimesCircle}/>


            </button>


            <button className="close"
                    type="submit">

              <FontAwesomeIcon icon={faEdit}/>
            </button>


          </a> <a
              className="list-group-item list-group-item-action wbdv-module-item"
              id="list-module1"
              data-toggle="list"
              href="#module1" role="tab" aria-controls="module1">
                    <span className="wbdv-module-item-title">
                        Module5-JQuery
                    </span>


            <button className="close"
                    type="submit">


              <FontAwesomeIcon icon={faTimesCircle}/>


            </button>


            <button className="close"
                    type="submit">

              <FontAwesomeIcon icon={faEdit}/>
            </button>


          </a> <a
              className="list-group-item list-group-item-action wbdv-module-item"
              id="list-module1"
              data-toggle="list"
              href="#module1" role="tab" aria-controls="module1">
                    <span className="wbdv-module-item-title">
                        Module6-JQuery
                    </span>


            <button className="close"
                    type="submit">


              <FontAwesomeIcon icon={faTimesCircle}/>


            </button>


            <button className="close"
                    type="submit">

              <FontAwesomeIcon icon={faEdit}/>
            </button>


          </a>


          </div>
          <button
              className="btn btn-success btn-block mt-3"
          >
            <i className="fas fa-plus-circle"></i> New Module
          </button>
        </div>

    )
  }
}


export default ModuleList
