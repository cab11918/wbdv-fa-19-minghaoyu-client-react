import React from 'react'

import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseService from "../services/CourseService";

class CourseEditor extends React.Component {

  constructor(props) {
    super(props)

    const service = CourseService.getInstance()

    const course = service.findCourseById(props.match.params.courseId)


    this.state = {


      course: course
    }



  }




  render() {
    return (

        <div>


          <LessonTabs
              course={this.state.course}
          />


          <div className="row">
            <ModuleList
                course={this.state.course}

            />


            <div className="col-9">

              <TopicPills/>

            </div>


          </div>


        </div>
    )
  }
}

export default CourseEditor