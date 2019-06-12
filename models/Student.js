import mongoose from 'mongoose';

// Represents Student
const StudentSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    studentId: {type: Number},
    grade: {type: Number},
    attendancePercentage: {type: Number},
    school: {type: String},
});

// Export Student model
module.exports = mongoose.model("Student", StudentSchema);