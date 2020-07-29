# student-entry

to get started :
1] npm install
2] node app.js


1]“/” Route
This route renders the landing page(landing.ejs) which consist of add student button which redirects to the form page to add student details.

2]“/entry” Route
This route renders the form to fill the student information(entry.ejs) once the user submits the information there is a http post request and the data saves into mongo dB database and then the user is redirected to the students list page were the user can see the updated students list.

3]“/students_list” Route
This route consist of all the students information(students_list.ejs) listed down in cards , here the client makes a http get request to the server to fetch all the data available then once we get data we render the data on the client side. 

4]“/student/:id” Route
This route has the individual student information(student.ejs) we make a http get request which finds students from the database using there id as we know mongo dB when a new data is created it assigns unique id to each data so using that id we can access individual student data then render it on client side. 

5]“/student/edit/:id” Route
This route renders the edit form(edit.ejs) so here i access individual student’s data by finding by id and updating the student information.

6]Searching students
Here basically i use the req.query.search and i find the user by name and then once the i find the user in the database it will be rendered on to the screen

