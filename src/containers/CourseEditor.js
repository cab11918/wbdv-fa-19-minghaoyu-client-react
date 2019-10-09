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

      course: course,
      module: {
        title: "new module title"
      },

    }

  }

  deleteModule = id => {
    this.state.course.modules = this.state.course.modules.filter(
        module => module.id !== id)
    this.setState({modules: this.state.course.modules});

  }

  newModuleChanged = (event) =>
      this.setState({
        module: {

          title: event.target.value

        }

      })


  createModule = () => {
    this.setState(prevState => {
      const module = {
        title: prevState.module.title,
        id: (new Date().getTime())
      };
      this.state.course.modules = this.state.course.modules.push(module)

      this.setState({modules: this.state.course.modules});

    })

    return {
      modules: this.state.course.modules
    }
  }

  render() {
    return (

        <div>


          <LessonTabs
              course={this.state.course}

              module={this.state.selectedModule}
          />


          <div className="row">
            <ModuleList
                course={this.state.course}
                handleDelete={this.deleteModule}
                module={this.state.module}
                newModuleChanged={this.newModuleChanged}
                createModule={this.createModule}
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