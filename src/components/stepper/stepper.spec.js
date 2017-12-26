import React from 'react';
import Stepper from './stepper';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('Stepper', () => {
  let props;
  let mountedStepper;
  const stepper = () => {
    if (!mountedStepper) {
      mountedStepper = mount(
        <Stepper {...props}/>
      );
    }
    return mountedStepper;
  };

  beforeEach(() => {
    props = {
      step: 0,
      steps: [1, 2, 3],
      onChange: jest.fn()
    };
    mountedStepper = undefined;
  });

  it('Changes step if it\'s a next or previous one', () => {
    const divs = stepper().find('.stepper__step_1 .stepper__tick');
    divs.simulate('click');
    expect(props.onChange).toHaveBeenCalledWith(1);
  });

  it('Can\'t jump over a step', () => {
    const divs = stepper().find('.stepper__step_2 .stepper__tick');
    divs.simulate('click');
    expect(props.onChange).not.toHaveBeenCalled();
  });
});
