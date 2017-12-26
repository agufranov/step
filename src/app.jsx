import ReactDOM from 'react-dom';
import React from 'react';
import Stepper from './components/stepper/stepper.jsx';

const steps = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Sed do eiusmod tempor incididunt", "Ut labore et dolore"];

class Main extends React.Component {
  constructor() {
    super();
    this.state = { step: 0, steps };
  }

  render() {
    return <div>
      <Stepper
        steps={this.state.steps}
        step={this.state.step}
        onChange={step => this.setState({ step })}
      />
    </div>
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('container')
);
