import React from 'react';
import PropTypes from 'react-proptypes';
import ReactLoggly from '../lib';

class LoggingComponent extends React.Component{
  static contextTypes = {
    logger: PropTypes.func,
  };

  render(){
    return (
        <div>
          <p>Type your message to log here, or paste in some JSON...</p>
          <textarea rows={10} cols="80" ref={r => this.text = r}/>
          <br />
          <button onClick={() => {
            let msg = this.text.value;
            try {
              if (msg.length){
                msg = JSON.parse(msg);
                console.log("Parsed as JSON");
              }
            }
            catch (err) {
              console.log("Parsed as arbitrary text");
            }
            this.context.logger(msg);
          }}
          >Log</button>
        </div>
    );
}
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      token: '',
    };
  }

  render() {
    return (
        <div>
          <p>Enter your API key for loggly here:</p>
          <input
              type="text"
              onChange={(f) => this.setState({token: f.target.value})}
              placeholder="Enter your loggly API token"
          />
          <ReactLoggly
              token={this.state.token}
          >
            <LoggingComponent />
          </ReactLoggly>
        </div>
    );
  }
}

export default App;
