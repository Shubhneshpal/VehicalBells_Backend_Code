const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

require("./database/connect");

// Post api 
const port = process.env.PORT || 5000;
const registerRoute = require("./view/register")
const loginRoute = require("./view/login")
const addVehicleRoute = require("./view/addVehicle")
const contactFormRoute = require("./view/contactformView")
const addTripRoute = require("./view/addTrip")
const addExpensesRoute = require("./view/AddExpenses")
const CrateTeamRoute = require("./view/CreateTeam")
const emailTampRoute = require("./view/emailTamp")
const markAttnendanceRoute = require("./view/markAttendance")
const changepassword = require("./view/changePass")

// Get API
const addVehicleGetRoute = require("./view/addVehicleGetData")
const addTripGetRoute = require("./view/addTripGetapi")
const addExpensesGetRoute = require("./view/ExpensesGetApi")
const TeamGetRoute = require("./view/createTeamGetApi")
const RegisterRoute = require("./view/RegistrationGetApi")
const attendanceGetRoute = require("./view/markattendanceGet")

// DELETE Api
const deleteTeameRoute = require("./view/Delete/createTeame")
const deleteAttendanceRoute = require("./view/Delete/markAttendanceD")

// Patch Api
const PatchTeameRoute = require("./view/PATCHapi/createTeameP")

// POST api routing*** 🫴
// Register page
app.use("/registerModule",registerRoute);
// login page
app.use("/loginModule",loginRoute);
// addVehicle page
app.use("/addVehicleModule",addVehicleRoute);
// contact Form
app.use("/contactFormModule",contactFormRoute);
// AddTrip page
app.use("/addTripModule",addTripRoute);
// AddExpenses page
app.use("/addExpensesModule",addExpensesRoute);
// CrateTeam page
app.use("/CrateTeamModule",CrateTeamRoute);
// emailTamp page
app.use("/emailTampModule",emailTampRoute);
// attendance page
app.use("/attendanceModule",markAttnendanceRoute);
// attendance page
app.use("/changepassModule",changepassword);


// Get api routing*** 🫴
app.use("/addVehicleGetModule",addVehicleGetRoute);
app.use("/addTripGetModule",addTripGetRoute);
app.use("/ExpensesGetApiModule",addExpensesGetRoute);
app.use("/TeamGetApiModule",TeamGetRoute);
app.use("/RegistrationApiModule",RegisterRoute);
app.use("/attendanceModule",attendanceGetRoute);

// Delete api routing*** 🫴
app.use("/DeleteModule",deleteTeameRoute);
app.use("/attendanceDeleteModule",deleteAttendanceRoute);

// PATCH api routing*** 🫴
app.use("/patchTeamModule",PatchTeameRoute);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
