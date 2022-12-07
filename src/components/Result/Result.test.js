import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "./Result";

const mock = [
  {
    id: 100,
    stay: {
      arrivalDate: "2021-11-18T05:00:00.000Z",
      departureDate: "2021-11-25T05:00:00.000Z",
    },
    room: {
      roomSize: "business-suite",
      roomQuantity: 3,
    },
    firstName: "IDM",
    lastName: "ENG",
    email: "idm.test@idm.com",
    phone: "9999999999",
    addressStreet: {
      streetName: "IDM Street",
      streetNumber: "1234",
    },
    addressLocation: {
      zipCode: "123456",
      state: "Arizona",
      city: "OAKVILLE",
    },
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
  },
];

const mockProps = {
  items: { ...mock },
};

describe("Result component should render", () => {
  const handleEdit = jest.fn();
  const handleDelete = jest.fn();
  const onSelectDetails = jest.fn();
  it("it should fire delete event", () => {
    const { container } = render(
      <Result
        {...mockProps}
        items={mock.map((item) => ({
          ...item,
        }))}
        onEdit={handleEdit}
        onDelete={handleDelete}
        handleSelecteDetails={onSelectDetails}
      />
    );
    const deleteEle = container.querySelector(
      "[data-testid='DeleteForeverIcon']"
    );
    fireEvent.click(deleteEle);
    expect(handleDelete).toBeCalled();
  });
  it("it should fire edit event", () => {
    const { container } = render(
      <Result
        {...mockProps}
        items={mock.map((item) => ({
          ...item,
        }))}
        onEdit={handleEdit}
        onDelete={handleDelete}
        handleSelecteDetails={onSelectDetails}
      />
    );
    const editEle = container.querySelector("[data-testid='EditIcon']");
    fireEvent.click(editEle);
    expect(handleEdit).toBeCalled();
  });
});
