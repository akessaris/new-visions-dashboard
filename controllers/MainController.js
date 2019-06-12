//Models
const StudentModel = require("../models/Student");

//Object to export
const mainController = {};

//Home route
mainController.home = async (req, res) => {
    try {
        //Make sure attendancePercentage is a number
        const attendancePercentage = isNaN(req.query.attendancePercentage) ? 0 : req.query.attendancePercentage;

        //Use asynchronous await to retrieve data from database and subsequently pass to render function
        //Find all students with a higher attendance percentage than given by the user (retrieved from url query)
        //Sort results by attendance percentage (ascending) and last name (ascending)
        const students = await StudentModel.find({attendancePercentage: {$gte: attendancePercentage}}).sort({attendancePercentage: 1, lastName: 1});
        
        // Render the index page and pass in the students data
        res.render("index", {
            "students": students,
        });
    } 
    catch (e) {
        //If there's an error, log the error and redirect to index
        console.log(e);
        res.redirect("index");
    }
};

//Export mainController
module.exports = mainController;