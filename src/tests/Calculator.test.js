import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  
  let container;
  
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it("should add correctly", () => {
    const button4 = container.getByTestId('number4');
    const addButton = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');
  })

  it("should subtract correctly", () => {
    const button7 = container.getByTestId('number7');
    const subtractButton = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId("number4");
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })

  it("should multiply correctly", () => {
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId("number5");
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("15");
  })

  it("should divide correctly", () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divideButton = container.getByTestId('operator-divide');
    const button7 = container.getByTestId("number7");
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("3");
  })

  it("should concatenate numbers correctly", () => {
    const button8 = container.getByTestId("number8");
    const button0 = container.getByTestId("number0");
    const button1 = container.getByTestId("number1");
    const button3 = container.getByTestId("number3");
    const button5 = container.getByTestId("number5");
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button8)
    fireEvent.click(button0)
    fireEvent.click(button0)
    fireEvent.click(button8)
    fireEvent.click(button1)
    fireEvent.click(button3)
    fireEvent.click(button5)
    expect(runningTotal.textContent).toEqual("8008135");
  })

  it("should chain multiple operations together", () => {
    const button8 = container.getByTestId("number8");
    const button1 = container.getByTestId("number1");
    const button3 = container.getByTestId("number3");
    const addButton = container.getByTestId("operator-add");
    const multiplyButton = container.getByTestId("operator-multiply");
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button8);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(multiplyButton);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("27");
  })

  it("should clear the running total without affecting the calculation", () => {
    const button8 = container.getByTestId("number8");
    const button1 = container.getByTestId("number1");
    const button3 = container.getByTestId("number3");
    const multiplyButton = container.getByTestId("operator-multiply");
    const addButton = container.getByTestId("operator-add");  
    const clearButton = container.getByTestId("running-total");
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button8);
    fireEvent.click(multiplyButton);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    fireEvent.click(clearButton);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("25");
  })

})

