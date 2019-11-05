import React from 'react'
import WidgetList from "../components/WidgetList";
import {connect} from 'react-redux'

const stateToPropertyMapper = state => {
  return {
    widgets: state.widgets,
  }
}

const findAllWidgets = dispatch => {
  fetch('https://tranquil-hamlet-37825.herokuapp.com/api/widgets')
  .then(response => (response.json()))
  .then(widgets => dispatch({
    type: 'FIND_ALL_WIDGETS',
    widgets: widgets
  }))
}

const deleteWidget = (dispatch, id) => {
  fetch('https://tranquil-hamlet-37825.herokuapp.com/api/widgets/' + id, {
    method: 'DELETE'
  })
  .then(response => (response.json()))
  .then(widgets => dispatch({
    type: 'DELETE_WIDGET',
    widgetId: id,
    widgets: widgets
  }))
}

const addWidget = (dispatch) => {
  fetch('https://tranquil-hamlet-37825.herokuapp.com/api/widgets/', {
    method: 'POST',
    body: JSON.stringify({
      type: "HEADING",
      size: 1,
      text: "New Heading",
      id:  new Date().getTime() % 100000,

    }),
    headers: {'content-type': 'application/json'},
  })
  .then(response => (response.json()))
  .then(widgets => dispatch({
    type: 'CREATE_WIDGET',
    widgets: widgets
  }))
}

const updateWidget = (dispatch,widgetType,id) => {
  fetch('https://tranquil-hamlet-37825.herokuapp.com/api/widgets/' + id, {
    method: 'PUT',
    body: JSON.stringify({
      id:id,
      type: widgetType
    }),
    headers: {'content-type': 'application/json'},
  })
  .then(response => (response.json()))
  .then(widgets => dispatch({
    type: 'UPDATE_WIDGET',
    widgets: widgets
  }))
}

const dispatcherToPropertyMapper = dispatch => {
  return {
    addWidget: () => addWidget(dispatch),
    deleteWidget: (id) => deleteWidget(dispatch, id)
    ,
    updateWidget: (id,widgetType) => updateWidget(dispatch, id, widgetType),
    goUp: (id) => {
      dispatch({type: 'GO_UP', widgetId: id})
    },
    goDown: (id) => {
      dispatch({type: 'GO_DOWN', widgetId: id})
    },
    findAllWidgets: () => findAllWidgets(dispatch)
  }
}

const WidgetListContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetList)

export default WidgetListContainer;