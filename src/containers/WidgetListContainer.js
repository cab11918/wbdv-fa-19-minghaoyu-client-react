import React from 'react'
import WidgetList from "../components/WidgetList";
import {connect} from 'react-redux'

const stateToPropertyMapper = state => {
  return {
    widgets: state.widgets
  }
}

const dispatcherToPropertyMapper = dispatch => {
  return {
    addWidget: () => {
      dispatch({type: 'CREATE_WIDGET'})
    },
    deleteWidget: (id) => {
      dispatch({type: 'DELETE_WIDGET', widgetId: id})
    }
  }
}

const WidgetListContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetList)

export default WidgetListContainer;