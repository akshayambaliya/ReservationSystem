import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from './Home';

describe("Home page should render", () => {
  it("it should render proper Home page screen", () => {
    render(
      <Home />
    );
    expect(screen.getByText('First Name')).not.toBeNull()
    expect(screen.getByText('Last Name')).not.toBeNull()
    expect(screen.getByText('Email')).not.toBeNull()
    expect(screen.getByText('Phone')).not.toBeNull()
    expect(screen.getByText('Actions')).not.toBeNull()
    expect(screen.getByPlaceholderText('Search with First Name/ Last Name/ Email')).not.toBeNull()
    expect(screen.queryByTestId('SearchIcon')).not.toBeNull()

  });

  it("it should open add reservation modal on add button press", () => {
    render(
      <Home />
    );
    fireEvent.click(screen.getByText('ADD'))
    expect(screen.getByText('Reservation Details')).not.toBeNull()
  });

  it("it should open edit reservation modal on edit icon press", () => {
    render(
      <Home />
    );
    const ele = screen.queryAllByTestId('EditIcon')[0];
    fireEvent.click(ele);
    expect(screen.getByText('Reservation Details')).not.toBeNull()
    const EditEle = screen.queryAllByRole("button", { name: "Edit" })[0];
    fireEvent.click(EditEle);
    expect(screen.queryByText('Reservation Details')).toBeNull()
  });

  it("it should remove row on delete icon press", () => {
    render(
      <Home />
    );
    fireEvent.click(screen.queryAllByTestId('DeleteForeverIcon')[0]);
  });

  it("it should return proper search result", () => {
    render(
      <Home />
    );
    fireEvent.change(screen.getByPlaceholderText('Search with First Name/ Last Name/ Email'), { target: { value: 'PM' } })
    expect(screen.queryAllByText('IDM')).toHaveLength(1)
  });
});