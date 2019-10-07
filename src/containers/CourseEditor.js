import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import {
  faTimesCircle,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CourseTable from "./CourseTable";
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";

class CourseEditor extends React.Component {
  render() {
    return(

        <div>


          <LessonTabs/>


          <div className="row">
            <ModuleList/>


            <div className="col-9">

              <TopicPills/>

            </div>


          </div>


        </div>
    )
  }
}




export default CourseEditor