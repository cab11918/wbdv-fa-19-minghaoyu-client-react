import React from 'react'

class HeadingWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: "",
      size: 'h' + this.props.widget.size,
      showing: true

    }

  }

  newHeadingChanged = (event) =>

      this.setState({
        preview: event.target.value

      })

  changeSize = (event) => {

    if (event.target.value === 'Heading 1') {
      this.setState({size: 'h1'})
    } else if (event.target.value === 'Heading 2') {
      this.setState({size: 'h2'})
    } else if (event.target.value === 'Heading 3') {
      this.setState({size: 'h3'})
    } else if (event.target.value === 'Heading 4') {
      this.setState({size: 'h4'})
    } else if (event.target.value === 'Heading 5') {
      this.setState({size: 'h5'})
    } else if (event.target.value === 'Heading 6') {
      this.setState({size: 'h6'})
    }

  }

  render() {
    return (
        <div className="container-fluid">

          <input type="checkbox" onChange={() => {
            this.setState({showing: !this.state.showing})
          }}/>preview

          {
            this.state.showing ?
                <div>
                  <label className="h4">Heading widget</label>

                  <select
                      className="selectPicker"
                      onChange={(event) => this.props.handleChange(event,
                          this.props.widget.id)}>
                    <option selected value="Heading">Heading</option>
                    <option value="Paragraph">Paragraph</option>
                    <option value="List">List</option>
                    <option value="Image">Image</option>
                    <option value="Link">Link</option>


                  </select>


                  <form>
                    <div className="form-group">
                      <input className="form-control"
                             onChange={this.newHeadingChanged}

                             placeholder="Heading text"
                      />

                    </div>
                    <div className="form-group">
                      <select
                          onChange={(event) => this.changeSize(event)}
                          className="form-control">
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                        <option>Heading 3</option>
                        <option>Heading 4</option>
                        <option>Heading 5</option>
                        <option>Heading 6</option>

                      </select>

                    </div>

                    <div className="form-group">
                      <input className="form-control"

                             placeholder="Widget name"/>

                    </div>

                    <h3>Preview</h3>


                  </form>

                </div>
                : null
          }

          <div className={this.state.size}>{this.state.preview}</div>


        </div>
    )

  }
}

export default HeadingWidget
