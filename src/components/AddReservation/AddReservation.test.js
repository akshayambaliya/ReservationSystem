import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddReservationDetails from "./AddReservationDetails";

const mockProps = {
  showModal: true
};

describe("Add Reservation details page should render", () => {
    const addPress = jest.fn();
    const onShowModal = jest.fn();
  it("it Reservation details page screen", () => {
    render(<AddReservationDetails {...mockProps} />);
  });
  it("it should fire show modal function", () => {
    render(<AddReservationDetails {...mockProps} onAddPress={addPress} handleShowModal={onShowModal} />);
    const btnEl = screen.queryAllByRole("button", { name: "Cancel" })[0];
    fireEvent.click(btnEl);
    expect(onShowModal).toBeCalled();
    const AddEle = screen.queryAllByRole("button", { name: "Add" })[0];
    fireEvent.click(AddEle);
  });
  it("it Should fire input change", () => {
    render(<AddReservationDetails {...mockProps} />);
    const inputEle = screen.getByPlaceholderText('First Name');
    fireEvent.change(inputEle, {target: {value: 'ABC'}});
    expect(inputEle.value).toBe('ABC');
  });
  it("it Should switch reminder value", () => {
    render(<AddReservationDetails {...mockProps} />);
    const switchEle = screen.getByPlaceholderText('reminder');
    fireEvent.click(switchEle);
  });
});
