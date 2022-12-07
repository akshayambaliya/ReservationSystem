import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/joy/Radio";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";

const ROOM_SIZE = ["business-suite", "presidential-suite"];

export default function ReservationDetails({
  item,
  showModal,
  isEdit,
  handleShowModal,
  onEditPress,
}) {
  const extras = [
    "extraBreakfast",
    "extraTV",
    "extraWiFi",
    "extraParking",
    "extraBalcony",
  ];
  const tags = ["hotel", "booking", "labtest"];
  const [resultItem, setResultItem] = useState({
    arrivalDate: item?.stay?.arrivalDate || "",
    departureDate: item?.stay?.departureDate || "",
    roomSize: item?.roomSize || 0,
    roomQuantity: item?.roomQuantity || 0,
    firstName: item?.firstName || "",
    lastName: item?.lastNam || "",
    email: item?.email || "",
    phone: item?.phone || "",
    streetName: item?.streetName || "",
    streetNumber: item?.streetNumber || "",
    zipCode: item?.zipCode || "",
    state: item?.state || "",
    city: item?.city || "",
    extras: item?.extras || [],
    payment: item?.payment || "",
    tags: item?.tags || [],
    reminder: item?.reminder || false,
    newsletter: item?.newsletter || false,
    confirm: item?.confirm || false,
  });

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    if (name === "reminder" || name === "newsletter") {
      setResultItem({ ...resultItem, [name]: !resultItem[name] });
    } else {
      setResultItem({ ...resultItem, [name]: value });
    }
  };

  const handleOnEditPress = (e) => {
    const data = {
      id: item.id,
      ...resultItem,
    };
    onEditPress(data);
  };

  useEffect(() => {
    setResultItem(item);
  }, [item]);

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={showModal}
        onClose={handleShowModal}
      >
        <form onSubmit={handleOnEditPress}>
          <DialogTitle>Reservation Details</DialogTitle>
          <DialogContent>
            <Grid container direction={"column"} rowSpacing={2}>
              <Grid container item>
                <Grid item xs={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      disabled={!isEdit}
                      label="Date of Arrival"
                      inputFormat="MM/DD/YYYY"
                      value={resultItem.arrivalDate}
                      onChange={(value) =>
                        setResultItem({ ...resultItem, arrivalDate: value })
                      }
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      disabled={!isEdit}
                      label="Date of Depature"
                      inputFormat="MM/DD/YYYY"
                      value={resultItem.departureDate}
                      onChange={(value) =>
                        setResultItem({ ...resultItem, departureDate: value })
                      }
                      renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "60%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Room size
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={resultItem.roomSize}
                      name="roomSize"
                      defaultValue={resultItem.roomSize}
                      onChange={handleItemChange}
                      disabled={!isEdit}
                      label="Room size"
                      required
                    >
                      {ROOM_SIZE.map((room) => (
                        <MenuItem value={room}>{room}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="filled-number"
                    label="Room quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={resultItem.roomQuantity}
                    variant="standard"
                    onChange={handleItemChange}
                    name="roomQuantity"
                    disabled={!isEdit}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    name="firstName"
                    label="First Name"
                    variant="standard"
                    data-testid="first-name"
                    value={resultItem.firstName}
                    onChange={handleItemChange}
                    disabled={!isEdit}
                    placeholder="First Name"
                    required
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    name="lastName"
                    variant="standard"
                    value={resultItem.lastName}
                    onChange={handleItemChange}
                    disabled={!isEdit}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Email Id"
                    variant="standard"
                    name="email"
                    type="email"
                    value={resultItem.email}
                    onChange={handleItemChange}
                    disabled={!isEdit}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Phone No"
                    variant="standard"
                    name="phone"
                    value={resultItem.phone}
                    onChange={handleItemChange}
                    disabled={!isEdit}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Street Name"
                    variant="standard"
                    name="streetName"
                    value={resultItem.streetName}
                    onChange={handleItemChange}
                    disabled={!isEdit}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="Street Number"
                    variant="standard"
                    name="streetNumber"
                    value={resultItem.streetNumber}
                    defaultValue={resultItem.streetNumber}
                    onChange={handleItemChange}
                    disabled={!isEdit}
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="ZIP"
                    variant="standard"
                    name="zipCode"
                    onChange={handleItemChange}
                    value={resultItem.zipCode}
                    disabled={!isEdit}
                    required
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="State"
                    variant="standard"
                    name="state"
                    defaultValue={resultItem.state}
                    onChange={handleItemChange}
                    disabled={!isEdit}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="standard-basic"
                    label="City"
                    variant="standard"
                    name="city"
                    value={resultItem.city}
                    onChange={handleItemChange}
                    disabled={!isEdit}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "60%" }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Extras
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={resultItem.extras}
                      name="extras"
                      onChange={handleItemChange}
                      label="Extras"
                      disabled={!isEdit}
                    >
                      {extras.map((extra) => (
                        <MenuItem value={extra}>{extra}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item sx={{ display: "flex", gap: 2 }}>
                  <Radio
                    checked={resultItem.payment === "cc"}
                    label="Credit Card"
                    value="cc"
                    componentsProps={{ input: { "aria-label": "A" } }}
                    disabled={!isEdit}
                    name="payment"
                    onChange={handleItemChange}
                  />
                  <Radio
                    checked={resultItem.payment === "paypal"}
                    label="Paypal"
                    value="paypal"
                    name="payment"
                    componentsProps={{ input: { "aria-label": "B" } }}
                    disabled={!isEdit}
                    onChange={handleItemChange}
                  />
                  <Radio
                    checked={resultItem.payment === "cash"}
                    label="Cash"
                    value="cash"
                    name="payment"
                    componentsProps={{ input: { "aria-label": "A" } }}
                    disabled={!isEdit}
                    onChange={handleItemChange}
                  />
                  <Radio
                    checked={resultItem.payment === "bitcoin"}
                    label="Bitcoin"
                    value="bitcoin"
                    name="payment"
                    componentsProps={{ input: { "aria-label": "B" } }}
                    disabled={!isEdit}
                    onChange={handleItemChange}
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={8}>
                  <Autocomplete
                    multiple
                    id="size-small-standard-multi"
                    size="small"
                    name="tags"
                    options={tags}
                    getOptionLabel={(option) => option}
                    defaultValue={[...resultItem.tags]}
                    onChange={(event, value) =>
                      setResultItem({ ...resultItem, tags: value })
                    }
                    disabled={!isEdit}
                    renderInput={(params) => (
                      <TextField {...params} variant="standard" label="Tags" />
                    )}
                  />
                </Grid>
              </Grid>

              <Grid container item spacing={2}>
                <Grid item xs={8}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={resultItem.reminder}
                        onChange={handleItemChange}
                        name="reminder"
                        disabled={!isEdit}
                      />
                    }
                    label="Send me a reminder"
                  />
                </Grid>
              </Grid>

              <Grid container item spacing={2}>
                <Grid item xs={8}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={resultItem.newsletter}
                        onChange={handleItemChange}
                        name="newsletter"
                        disabled={!isEdit}
                      />
                    }
                    label="Subscribe to newslatter"
                  />
                </Grid>
              </Grid>

              <Grid container item spacing={2}>
                <Grid item xs={8}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={resultItem.confirm}
                        onChange={(event, value) =>
                          setResultItem({ ...resultItem, confirm: value })
                        }
                        inputProps={{ "aria-label": "controlled" }}
                        disabled={!isEdit}
                        required
                      />
                    }
                    label="i confirm the information given above"
                  />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleShowModal()}>Cancel</Button>
            {isEdit && (
              <Button onClick={() => handleOnEditPress()}>Edit</Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
