# New Visions for Public Schools Challenge

## Challenge Description
Dashboards are displays we build at New Visions to help each other
and our schools make sense of school data. Create a principal and guidance-counselor facing
dashboard from the provided dataset that assists in identifying students who are chronically
absent (missing X% or more of school days) for targeted interventions by guidance counselors
(e.g. parent conferences, SMS messages sent, phone calls home, etc).

Specifically, build a dashboard that:
* Displays a list of students who are chronically absent, including the data points from the
data set you feel would be useful and relevant to view alongside each student.
* Allows the principal or guidance counselor to adjust the threshold for what it means to be
chronically absent. Upon modifying the threshold, the list of students should change.

## Technologies Used
* Node.js
  * It's non-blocking I/O model allows for real-time functionality, which would be a useful future feature rather than having to submit a form
  * It's also highly scalable and efficient
* Express
  * Light-weight web application framework that allows for MVC architecture
  * Integrates with Node.js, MongoDB, Mongoose, and Handlebars
* MongoDB
  * The data given was JSON format so I decided to use MongoDB since it is document oriented
  * Offers high performance and scalability with easy setup
* Mongoose
  * Allows me to create data schemas for the data I store in Mongo
* Handlebars
  * Templating that allows me to extend layouts across several pages if necessary
  * Allowed dynamic passing of data retrieved from database to pages

## How to Run
1. Clone (or download) github repo:
  * $ git clone https://github.com/akessaris/new-visions-dashboard.git
2. Import JSON data to Mongo
  * $ mongoimport --db new-visions --collection students --file /location/of/students.json --jsonArray
3. Install node modules
  * $ npm install
4. Start the server
  * $ npm start
5. Start mongo
  * In separate window but still in directory of project, run: $ mongod
  * In another separate window, run: $ mongo
6. Go to http://localhost:5000/ in browser