# React Loggly Component

Easily log to loggly from inside your react application.

## Getting Started

Install React-Loggly using npm:

`npm install --save react-loggly`

At the top of your application, or at the top of the tree where you want to do your logging, add ReactLoggly

```javascript
import ReactLoggly from 'react-loggly';
...
render(){
    return (
        <ReactLoggly
            token={this.state.token}
        >
         <App>
        </ReactLoggly>
    );
}
```

Then in each component you want to log from, accept the context type: logger

```javascript
import ReactLoggly from 'react-loggly';
...
render(){
    return (
        <ReactLoggly
            token={this.state.token}
        >
         <App>
        </ReactLoggly>
    );
}
```
class MyComponent extends React.Component{
  static contextTypes = {
    logger: PropTypes.func,
  };

  render(){
    return (
        <button onClick={() => {
           this.context.logger("Logging from my component");
        }}
        >
            Log
        </button>
    );
  }
}
```

## Props

- token: Loggly API token
- logFromConsole: When true, capture console output and send it to loggly
- logToConsole: When true, echo all log messages sent to loggly to the console too
- tags: Array of tags to log with the message.

## Log(data)

Expects data to be a string or an object, which will be send to loggly.




