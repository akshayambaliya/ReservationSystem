import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationDetails from "./ReservationDetails";

const mock = {
    id: 100,
    arrivalDate: "2021-11-18T05:00:00.000Z",
    departureDate: "2021-11-25T05:00:00.000Z",
    roomSize: "business-suite",
    roomQuantity: 3,
  
    firstName: "IDM",
    lastName: "ENG",
    email: "idm.test@idm.com",
    phone: "9999999999",
    streetName: "IDM Street",
    streetNumber: "1234",
    zipCode: "123456",
    state: "Arizona",
    city: "OAKVILLE",
    extras: [
      "extraBreakfast",
      "extraTV",
      "extraWiFi",
      "extraParking",
      "extraBalcony",
    ],
    payment: "cc",
    note: "idm lab test",
    tags: ["hotel", "booking", "labtest"],
    reminder: true,
    newsletter: true,
    confirm: false,
  };

const mockProps = {
  item: { ...mock },
  showModal: true,
  isEdit: true,
};

describe("Reservation details page should render", () => {
    const onClickShowModal = jest.fn();
    const onEditModal = jest.fn();
  it("it Reservation details page screen", () => {
    render(<ReservationDetails {...mockProps} />);
  });
  it("it should fire show modal function", () => {
    render(<ReservationDetails {...mockProps} handleShowModal={onClickShowModal} onEditPress={onEditModal} />);
    const btnEl = screen.queryAllByRole("button", { name: "Cancel" })[0];
    fireEvent.click(btnEl);
    expect(onClickShowModal).toBeCalled();
    const EditEle = screen.queryAllByRole("button", { name: "Edit" })[0];
    fireEvent.click(EditEle);
    expect(onEditModal).toBeCalled();
  });
  it("it Should fire input change", () => {
    render(<ReservationDetails {...mockProps} />);
    const inputEle = screen.getByPlaceholderText('First Name');
    fireEvent.change(inputEle, {target: {value: 'ABC'}});
    expect(inputEle.value).toBe('ABC');
  });
});
