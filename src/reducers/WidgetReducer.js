import WidgetService from "../services/WidgetService"

const service = WidgetService.getInstance()
const initialState = {
  widgets: service.findWidgets(),
  preview: "off"
}

const WidgetListReducer = (state = initialState, action) => {

  console.log(action)

  switch (action.type) {

    case 'DELETE_WIDGET':
      return {

        widgets: state.widgets.filter(widget => widget.id !==
            action.widgetId)
      }
    case 'CREATE_WIDGET':
      return {
        widgets: [
          ...state.widgets,
          {
            type: 'HEADING',
            size: 1,
            text: 'New Heading',
            id: (new Date()).getTime()
          }
        ]
      }
    default:
      return state

    case 'UPDATE_WIDGET' :
      let widgets = []

      state.widgets.map(widget => {
        widgets.push(widget)
      })

      widgets.find(({id}) => id === action.widgetId).type = action.widgetType

      return {
        widgets: widgets
      }

    case 'GO_UP' :
      let tempUp = []
      state.widgets.map(widget => {
        tempUp.push(widget)
      })
      let fromUp
        let toUp
      fromUp = tempUp.indexOf(tempUp.find(({id}) => id === action.widgetId))
      toUp = fromUp-1
      tempUp[fromUp] = tempUp.splice(toUp,1,tempUp[fromUp])[0]
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
      fromDown = tempDown.indexOf(tempDown.find(({id}) => id === action.widgetId))
      toDown = fromDown+1
      tempDown[fromDown] = tempDown.splice(toDown,1,tempDown[fromDown])[0]
      return {
        widgets: tempDown
      }

  }
}

export default WidgetListReducer;