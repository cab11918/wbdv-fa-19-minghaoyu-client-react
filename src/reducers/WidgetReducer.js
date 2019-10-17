import WidgetService from "../services/WidgetService"

const service = WidgetService.getInstance()
const initialState = {
  widgets: service.findWidgets(),
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

  }
}

export default WidgetListReducer;