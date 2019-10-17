import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const TopicPills = ({lesson, deleteTopic, newTopicChanged, createTopic,selectTopic}) =>
      <ul className="nav nav-pills">


        {

          lesson.topics.map(topic =>
              <li className="nav-item">
                <a className="btn btn-outline btn-warning"
                   onClick={()=>selectTopic(topic)}>
                  {topic.title}

                  &nbsp;

                  <button className="close"
                          onClick={() => {
                            deleteTopic(topic.id)
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


        &nbsp;

        <button className="close"
                onClick={createTopic}>

          <FontAwesomeIcon icon={faPlusCircle}/>
        </button>

        &nbsp;

        <input
            onChange={newTopicChanged}


            className="form-control col-1"
            placeholder="New Topic" aria-label="Search"
        >

        </input>


      </ul>



export default TopicPills














































