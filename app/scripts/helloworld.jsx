import React from 'react'
import ReactDOM from 'react-dom'
import MessageDisplay from './messagedisplay'

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {greeting: this.props.greeting}
    this.updateModel = this.updateModel.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    this.setState({greeting: ''})
    ReactDOM.findDOMNode(this.refs.in).focus()
  }

  updateModel(event) {
    this.setState({greeting: event.target.value})
  }

  render() {
    return (
      <div>
        <p><img src={require('../img/pumpkin-128.png')}/></p>
        <input ref="in"
               onChange={this.updateModel}
               value={this.state.greeting}/>
        <MessageDisplay greeting={this.state.greeting}/>
        <button onClick={this.reset}>Clear</button>
      </div>
    )
  }
}
