//Importing the require module
const { info } = require('console');
const express =require('express');
const fs = require('fs');
const { writeFile } = require('fs/promises');
let app = express();
app.use(express.json());
let data1 = JSON.parse(fs.readFileSync("C:/Users/Admin/Desktop/git/node-js-Lecture-LAST/data/student.json"));

//Creating GET request
app.get("/", (req, res) => {
    res.status(200).json({
        
        data: {
            data: data1,
        },
    });
});

//Creating post Method
app.post("/", (req, res) => {
    const newId = data1[data1.length - 1].identifier+1;
    const newInfo = Object.assign({identifier: newId}, req.body)
    data1.push(newInfo);
    fs.writeFileSync('C:/Users/Admin/Desktop/git/node-js-Lecture-LAST/data/student.json',JSON.stringify(data1));{
        res.status(201).json({
            message: "Student Added Successfully",
            status: 201,
            data: data1
        });
    }

});

//Creating Patch Method
app.patch("/:identifier", (req, res) => {
    let identifier = req.params.identifier*1;
    let InfotoUpdate = data1.find(sd => sd.identifier === identifier)
    let index = data1.indexOf(InfotoUpdate)
    Object.assign(InfotoUpdate,req.body)
    data1[index] = InfotoUpdate;
    fs.writeFileSync('C:/Users/Admin/Desktop/git/node-js-Lecture-LAST/data/student.json', JSON.stringify(data1)); {
        res.status(200).json({
            message: "Student Added Successfully",
            status: 200,
            data: data1
        });
    }
})
//Creating Server Object
app.listen(8000,()=>{
    console.log("Server Chalu Ho gaya he bhai.......");
});
































































































