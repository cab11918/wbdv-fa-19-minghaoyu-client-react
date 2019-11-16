import widgets from '../services/widgets'

export default class WidgetService {
  static myInstance = null;

  static getInstance() {
    if (WidgetService.myInstance == null) {
      WidgetService.myInstance = new WidgetService()
    }
    return this.myInstance
  }

  findAllWidgets() {
    return fetch('https://tranquil-hamlet-37825.herokuapp.com/api/widgets')
    .then(response => (response.json()))

  }

  createWidget(widget) {

    return fetch('https://tranquil-hamlet-37825.herokuapp.com/api/widgets', {
      method: 'POST',
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  findWidgetById(widgetid) {

    return fetch(
        'https://tranquil-hamlet-37825.herokuapp.com/api/widgets/' + widgetid, {
          method: 'GET',

        }).then(function (response) {
      return response.json();
    })

  }

  deleteWidget(widgetid) {

    return fetch(
        'https://tranquil-hamlet-37825.herokuapp.com/api/widgets/' + widgetid, {
          method: 'DELETE',

        })

  }

  updateWidget(widgetid, widget) {
    return fetch(
        'https://tranquil-hamlet-37825.herokuapp.com/api/widgets/' + widgetid, {
          method: 'PUT',

          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(widget)
        })
  }
}