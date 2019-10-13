import courses from "./courses";

export default class WidgetService {
  static myInstance = null;
  widgets = courses

  static getInstance() {
    if (WidgetService.myInstance == null) {
      WidgetService.myInstance = new WidgetService()
    }
    return this.myInstance
  }

  findWidgets() {
    return this.widgets
  }

  createWidget(topicid, widget) {
    //
  }

  findWidget(widgetid) {

    //
  }

  deleteWidget(widgetid) {

    //

  }

  updateWidget(widgetid, widget) {
    //
  }
}