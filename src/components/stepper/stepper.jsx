import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './stepper.less';

export default class Stepper extends React.Component {
  onChange(step) {
    if (Math.abs(this.props.step - step) === 1) {
      this.props.onChange(step);
    }
  }
  render() {
    return <div className="stepper">
      {this.props.steps.map((step, i) =>
          <div
            className={classNames(
              "stepper__step",
              `stepper__step_${i}`,
              { "stepper__step_active": this.props.step >= i },
              { "stepper__step_current": this.props.step === i }
            )}
            key={i}>
            <div className="stepper__title" onClick={() => this.onChange(i)}>{step}</div>
            <div className="stepper__lines">
              <div className={classNames(
                "stepper__line",
                "stepper__line_left",
                { "stepper__line_hidden": (i === 0) }
              )}></div>
              <div className="stepper__tick" onClick={() => this.onChange(i)}></div>
              <div className={classNames(
                "stepper__line",
                "stepper__line_right",
                { "stepper__line_hidden": (i === this.props.steps.length - 1) }
              )}></div>
            </div>
          </div>
      )}
    </div>
  }
}

Stepper.propTypes = {
  steps: (props, propName, componentName) => {
    const minLength = 2;
    const maxLength = 5;
    const prop = props[propName];
    if (!prop instanceof Array)
      return new Error('Steps property should be Array');
    if(minLength > prop.length || maxLength < prop.length)
      return new Error(`Steps length should be ${minLength} to ${maxLength}`);
  },
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
