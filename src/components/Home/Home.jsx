import React, { useState } from "react";
import { BehaviorSubject } from "rxjs";
import Button from "@mui/material/Button";
import Search from "../Search/Search";
import "./Home.css";
import Result from "../Result/Result";
import data from "../../assets/reservations.json";

import ReservationDetails from "../ReservationDetails/ReservationDetails";

import AddReservationDetails from "../AddReservation/AddReservationDetails";

let subject = null;

// For Flattening object, so Form change event can be handled in single function
const convertNestedToSimpleJson = function (obj) {
  const dummyObj = {};
  for (let key in obj) {
    const value = obj[key];
    const type = typeof value;

    if (
      ["string", "boolean"].includes(type) ||
      (type === "number" && !isNaN(value)) ||
      Array.isArray(value)
    ) {
      dummyObj[key] = value;
    } else if (type === "object") {
      Object.assign(dummyObj, convertNestedToSimpleJson(value));
    }
  }
  return dummyObj;
};

export default function Home() {
  const [resultData, setResultData] = useState(
    data.map((item) => convertNestedToSimpleJson(item))
  );
  const [searchResult, setSearchResult] = useState(
    data.map((item) => convertNestedToSimpleJson(item))
  );
  const [showModal, setIsShowModal] = useState(false);
  const [showAddModal, setIsshowAddModal] = useState(false);
  const [itemDetailsId, setItemDetailsId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  // Use rxjs observable for subscrbing the changes
  if (!subject) {
    subject = new BehaviorSubject(resultData);
  }

  React.useEffect(() => {
    const subscription = subject.subscribe((resultData) => {
      setResultData(resultData);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const handleSelecteDetails = (id) => {
    setItemDetailsId(id);
    setIsShowModal(true);
  };

  const handleShowModal = () => {
    setIsShowModal(false);
    setIsEdit(false);
  };

  const handleEdit = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setItemDetailsId(index);
    setIsEdit(true);
    setIsShowModal(true);
  };

  const onDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const newArr = [...resultData];
    let updatedArr = newArr.filter((x) => x.id !== id);

    subject.next(updatedArr);
    setSearchResult(updatedArr);
    setItemDetailsId(null);
  };

  const onAddPress = (data) => {
    subject.next([...resultData, data]);
    setSearchResult([...resultData, data]);
    setIsshowAddModal(false);
  };

  const onEditPress = (data) => {
    const newArr = [...resultData];
    let index = newArr.findIndex((x) => x.id === data.id);
    if (index !== -1) {
      newArr[index] = data;
    }

    const newASearchrr = [...searchResult];
    let searchIndex = newASearchrr.findIndex((x) => x.id === data.id);
    if (searchIndex !== -1) {
      newASearchrr[searchIndex] = data;
    }
    subject.next(newArr);
    setSearchResult(newASearchrr);
    setIsShowModal(false);
    setItemDetailsId(null);
  };

  const onSearchChange = (value) => {
    let filteredData = [];
    if (value === "") {
      filteredData = [...resultData];
    }
    filteredData = resultData.filter((item) => {
      let resultSting =
        item.firstName.toLowerCase() + item.lastName.toLowerCase();
      if (resultSting.includes(value.toLowerCase())) {
        return true;
      }
      return false;
    });

    setSearchResult(filteredData);
  };

  return (
    <div className="container">
      <div className="searchContainer">
        <Search
          onValueChange={(e) => {
            onSearchChange(e.target.value);
          }}
        />
        <div className="buttonContainer">
          {" "}
          <Button onClick={() => setIsshowAddModal(true)} variant="contained">
            ADD
          </Button>
        </div>
      </div>
      <Result
        items={searchResult}
        handleSelecteDetails={handleSelecteDetails}
        onEdit={handleEdit}
        onDelete={onDelete}
      />
      {itemDetailsId !== null && (
        <ReservationDetails
          showModal={showModal}
          item={resultData[itemDetailsId]}
          isEdit={isEdit}
          handleShowModal={handleShowModal}
          onEditPress={onEditPress}
        />
      )}
      {showAddModal && (
        <AddReservationDetails
          showModal={showAddModal}
          handleShowModal={() => setIsshowAddModal(false)}
          onAddPress={onAddPress}
        />
      )}
    </div>
  );
}
