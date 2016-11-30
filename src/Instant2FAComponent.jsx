import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import scriptLoader from './react-async-script-loader'

class Instant2FAComponent extends Component {

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.init()
      } else this.props.onError()
    }
  }

  componentDidMount () {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.init()
    }
  }

  init() {
    window.Instant2FAPage.configure({
      element: ReactDOM.findDOMNode(this),
      uri: this.props.uri
    }, this.props.onEvent)
  }

  render() {
    return (
      <div></div>
    )
  }
}
Instant2FAComponent.propTypes = {
  uri: React.PropTypes.string.isRequired,
  onError: React.PropTypes.func,
  onEvent: React.PropTypes.func
}
Instant2FAComponent.SCRIPT_URL = 'https://js.instant2fa.com/hosted.js'

export default scriptLoader([Instant2FAComponent.SCRIPT_URL])(Instant2FAComponent)
