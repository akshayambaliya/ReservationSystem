import React from "react";

import ReservationDetails from "./ReservationDetails";

const mockData = {
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

export default {
  title: "Example/ReservationDetails",
  component: ReservationDetails,
};

const Template = (args) => <ReservationDetails {...args} />;

export const ReservationEditDetails = Template.bind({});

ReservationEditDetails.args = {
  item: { ...mockData },
  showModal: () => console.log("Show Modal"),
  isEdit: true,
  handleShowModal: () => console.log("On Handle Show Modal"),
  onEditPress: () => console.log("On Edit Press"),
};

export const ReservationShowDetails = Template.bind({});

ReservationShowDetails.args = {
  item: { ...mockData },
  showModal: () => console.log("Show Modal"),
  isEdit: false,
  handleShowModal: () => console.log("On Handle Show Modal"),
  onEditPress: () => console.log("On Edit Press"),
};
