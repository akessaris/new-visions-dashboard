//Import mongoose to use data schemas and provide structure for data
const mongoose = require("mongoose");

// Represents Student
const StudentSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    homePhoneNumber: {type: String},

    school: {type: String},
    studentId: {type: Number},
    cohort: {type: Number},
    attendancePercentage: {type: Number},
    
    guidanceCounselor: {type: String},
    guidanceCounselorEmail: {type: String},
});

// Export Student model
module.exports = mongoose.model("Student", StudentSchema);