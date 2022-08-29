//utility.js

const request = require("request-promise");
const EXTERNAL_API=""; // put url
const accessToken=""; // put access token
const student = {
  id_student:63361658,
  name: 'Thitikan', // replace with your full name.
  age: 21, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "POST",
            uri: EXTERNAL_API,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            formData: {
                message: `HTTP Request :${data.student_id} `,
                student_id: student_id
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}