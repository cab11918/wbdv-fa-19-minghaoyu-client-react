import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons/faArrowAltCircleUp";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons/faArrowAltCircleDown";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

export default class WidgetList extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event, widgetId) {

    this.props.updateWidget(event.target.value.toString().toUpperCase(),
        widgetId)
  }

  handleGoUp(id) {
    this.props.goUp(id)

  }

  handleGoDown(id) {
    this.props.goDown(id)

  }

  render() {
    return <div>


      <ul className="list-group">

        {
          this.props.widgets.map(widget =>

              <li className="list-group-item">
                <div className="row float-right">

                  <button className="btn btn-warning"
                          onClick={()=>this.handleGoUp(widget.id)}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp}/>
                  </button>
                  <button className="btn btn-warning"
                          onClick={()=>this.handleGoDown(widget.id)}>
                    <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                  </button>

                  <button className="btn btn-danger float-right"
                          onClick={() => this.props.deleteWidget(widget.id)}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                  </button>
                </div>
                {widget.type === "HEADING" && <HeadingWidget widget={widget}
                                                             handleChange={this.handleChange}
                />}


                {widget.type === "LIST" && <ListWidget widget={widget}
                                                       handleChange={this.handleChange}/>}

                {widget.type === "PARAGRAPH" && <ParagraphWidget
                    widget={widget} handleChange={this.handleChange}/>}
                {widget.type === "LINK" && <LinkWidget widget={widget}
                                                       handleChange={this.handleChange}/>}
                {widget.type === "IMAGE" && <ImageWidget widget={widget}
                                                         handleChange={this.handleChange}/>}

              </li>
          )
        }
      </ul>

      <button className="btn btn-success btn-lg float-right"
              onClick={this.props.addWidget}>
        <FontAwesomeIcon icon={faPlusCircle}/></button>
      <input type="checkbox"/>preview

      <button className="btn btn-success btn-lg float-right">
        Save
      </button>


    </div>
  }

}