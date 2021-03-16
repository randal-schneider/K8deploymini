import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { age } = this.props;
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
          <br />
          Age = {age}
        </h1>
      </>
    );
  }
}

export default hot(App);