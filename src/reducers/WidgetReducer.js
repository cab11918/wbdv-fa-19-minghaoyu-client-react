import WidgetService from "../services/WidgetService"

const service = WidgetService.getInstance()

const initialState = {
  widgets: [],
  preview: "off"
}

const WidgetListReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'DELETE_WIDGET':

      return {

        widgets: service.deleteWidget

      }

    case 'CREATE_WIDGET':
      return {

        widgets: service.addWidget
      }

    case 'UPDATE_WIDGET' :

      return {
        widgets: service.updateWidget
      }

    case 'GO_UP' :
      let tempUp = []
      state.widgets.map(widget => {
        tempUp.push(widget)
      })
      let fromUp
      let toUp
      fromUp = tempUp.indexOf(tempUp.find(({id}) => id === action.widgetId))
      toUp = fromUp - 1
      tempUp[fromUp] = tempUp.splice(toUp, 1, tempUp[fromUp])[0]
      return {
        widgets: tempUp
      }

    case 'GO_DOWN' :
      let tempDown = []
      state.widgets.map(widget => {
        tempDown.push(widget)
      })
      let fromDown
      let toDown
      fromDown = tempDown.indexOf(
          tempDown.find(({id}) => id === action.widgetId))
      toDown = fromDown + 1
      tempDown[fromDown] = tempDown.splice(toDown, 1, tempDown[fromDown])[0]
      return {
        widgets: tempDown
      }

    case 'FIND_ALL_WIDGETS':

      return {
        widgets: action.widgets
      }

    default:
      return state

  }
}

export default WidgetListReducer;