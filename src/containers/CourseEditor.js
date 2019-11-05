import React from 'react'

import ModuleList from "../components/ModuleList";
import NavBar from "../components/NavBar";
import LessonsTab from "../components/LessonsTab";
import CourseService from "../services/CourseService";
import TopicPills from "../components/TopicPills";
import {Provider} from "react-redux";
import WidgetListContainer from "./WidgetListContainer";
import {createStore} from "redux";
import WidgetReducer from "../reducers/WidgetReducer";

const store = createStore(WidgetReducer)

class CourseEditor extends React.Component {

  constructor(props) {
    super(props)

    const service = CourseService.getInstance()

    const course = service.findCourseById(props.match.params.courseId)

    const module = course.modules[0]

    const lesson = module.lessons[0]

    const topic = lesson.topics[0]

    this.state = {

      course: course,
      module: module,
      phTitle: "New Module",
      lTitle: "New Lesson",
      tTitle: "New Topic",
      lesson: lesson,
      topic: topic,

    }

  }

  deleteModule = id => {
    this.state.course.modules = this.state.course.modules.filter(
        module => module.id !== id)
    this.setState({modules: this.state.course.modules});

  }

  deleteLesson = id => {
    this.state.module.lessons = this.state.module.lessons.filter(
        lesson => lesson.id !== id)
    this.setState({lessons: this.state.module.lessons});
  }

  deleteTopic = id => {
    this.state.lesson.topics = this.state.lesson.topics.filter(
        topic => topic.id !== id)
    this.setState({topics: this.state.lesson.topics});
  }

  newModuleChanged = (event) =>

      this.setState({
        phTitle: event.target.value

      })

  newLessonChanged = (event) =>

      this.setState({
        lTitle: event.target.value

      })

  newTopicChanged = (event) =>

      this.setState({
        tTitle: event.target.value

      })

  createModule = () => {
    this.setState(prevState => {
      const module = {
        title: prevState.phTitle,
        id: (new Date().getTime()),
        lessons: [
          {
            topics: [],
          }
        ]

      };
      this.state.course.modules.push(module)

      this.setState({modules: this.state.course.modules});

    })

    return {
      modules: this.state.course.modules
    }
  }

  createLesson = () => {
    this.setState(prevState => {
      const lesson = {
        title: prevState.lTitle,
        id: (new Date().getTime()),
        topics: [],

      };
      this.state.module.lessons.push(lesson)

      this.setState({lessons: this.state.module.lessons});

    })

    return {
      lessons: this.state.module.lessons
    }
  }

  createTopic = () => {
    this.setState(prevState => {
      const topic = {
        title: prevState.tTitle,
        id: (new Date().getTime()),

      };
      this.state.lesson.topics.push(topic)

      this.setState({topics: this.state.lesson.topics});

    })

    return {
      topics: this.state.lesson.topics
    }
  }

  selectModule = module => {
    this.setState({
      module: module,
    })
    this.selectLesson(module.lessons[0])
  }

  selectLesson = lesson => {
    this.setState({
      lesson: lesson
    })
  }

  selectTopic = topic => {
    this.setState({
      topic: topic
    })
  }

  render() {
    return (

        <div>


          <NavBar
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
                selectModule={this.selectModule}
            />


            <div className="col-9">

              <LessonsTab
                  module={this.state.module}
                  selectLesson={this.selectLesson}
                  deleteLesson={this.deleteLesson}
                  createLesson={this.createLesson}
                  newLessonChanged={this.newLessonChanged}/>

              <TopicPills
                  lesson={this.state.lesson}
                  deleteTopic={this.deleteTopic}
                  newTopicChanged={this.newTopicChanged}
                  createTopic={this.createTopic}
                  selectTopic={this.selectTopic}/>


              <Provider store={store}>
                <WidgetListContainer topicId={this.state.topic.id}/>
              </Provider>


            </div>


          </div>


        </div>
    )
  }
}

export default CourseEditor