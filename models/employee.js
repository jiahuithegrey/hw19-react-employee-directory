const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    title: {type: String, required: true},
    department: {type: String, required: true},
    email: {type: String, required: true}
});

const Employee = mongoose.model("Employee", employeeSchema);

module.export = Employee;