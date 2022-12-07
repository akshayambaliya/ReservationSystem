import React from "react";

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
    {
      id: 200,
      stay: {
        arrivalDate: "2021-11-01T04:00:00.000Z",
        departureDate: "2021-11-04T04:00:00.000Z",
      },
      room: {
        roomSize: "presidential-suite",
        roomQuantity: 2,
      },
      firstName: "IDM",
      lastName: "PM",
      email: "idm.op@idm.com",
      phone: "123456789",
      addressStreet: {
        streetName: "IDM",
        streetNumber: "1234",
      },
      addressLocation: {
        zipCode: "123456",
        state: "Arkansas",
        city: "OAK",
      },
      extras: ["extraParking", "extraBalcony"],
      payment: "cash",
      note: "lab test",
      tags: ["angular", "material", "labtest"],
      reminder: true,
      newsletter: false,
      confirm: true,
    },
  ];
  
export default {
  title: "Example/Result",
  component: Result,
};

const Template = (args) => <Result {...args} />;

export const ResultDetails = Template.bind({});

ResultDetails.args = {
  items: [...mock],
  handleSelecteDetails: () => console.log("Selected details"),
  onEdit: () => console.log("On Edit"),
  onDelete: () => console.log("On Delete"),
};
