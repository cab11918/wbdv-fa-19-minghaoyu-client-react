import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";

const LessonsTab = ({module,selectLesson,deleteLesson,createLesson,newLessonChanged}) =>

    <ul className="nav nav-tabs">
      {
        module.lessons.map(lesson =>
            <li className="nav-item">
              <a className="btn btn-outline btn-light"
                 onClick={()=>selectLesson(lesson)}

              >
                {lesson.title} &nbsp;


                <button className="close"
                        onClick={() => {
                          deleteLesson(lesson.id)
                        }}>


                  <FontAwesomeIcon icon={faTimesCircle}/>


                </button>


                <button className="close">

                  <FontAwesomeIcon icon={faEdit}/>
                </button>
              </a>

            </li>
        )
      }

      <button className="close"
              onClick={createLesson}>

        <FontAwesomeIcon icon={faPlusCircle}/>
      </button>
      &nbsp;

      <input


          className="form-control col-2"
          placeholder="New Lesson" aria-label="Search"
          onChange={newLessonChanged}
      >

      </input>


    </ul>

export default LessonsTab














































