const mongoose = require("mongoose");
cosnt db = requrie("../models");
//reactreadinglist?????
mongoose.connect(
    process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const employeeSeed = [
    {
        headshot: "",
        name: "Jasmine Wang",
        title: "Software Engineer",
        department: "Engineering",
        phone: "(206)123-4567",
        emial: "jasminew@hogwarts.com"
    },
    {
        headshot: "",
        name: "Jacob Ke",
        title: "Technical Program Manager",
        department: "Operation",
        phone: "(206)123-4567",
        emial: "jaconk@hogwarts.com"
    },
    {
        headshot: "",
        name: "Harry Potter",
        title: "Lead Engineer",
        department: "Engineering",
        phone: "(206)123-4567",
        emial: "harryp@hogwarts.com"
    },
    {
        headshot: "",
        name: "Hermione Grangerr",
        title: "UX Designer",
        department: "Design",
        phone: "(206)123-4567",
        emial: "hermiong@hogwarts.com"
    },
    {
        headshot: "",
        name: "Ron Weasley",
        title: "Product Manager",
        department: "Business",
        phone: "(206)123-4567",
        emial: "ronw@hogwarts.com"
    },
    {
        headshot: "",
        name: "Fred Weasley",
        title: "Marketing Specialist",
        department: "Marketing",
        phone: "(206)123-4567",
        emial: "fredw@hogwarts.com"
    }
];

db.Employee
  .remove({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
