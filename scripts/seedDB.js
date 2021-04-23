const mongoose = require("mongoose");
const db = require("../models");

// This file empties the developer collection and inserts the developer below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project_manager"
);

const developerSeed = [
  {
    name: "Adam",
    role: "JavaScript",
  },
  {
    name: "Ali-2",
    role: "Database",
  },
  {
    name: "Peter",
    role: "Front-end",
  },
];

db.Developer.remove({})
  .then(() => db.Developer.collection.insertMany(developerSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const tech_stackSeed = [
  {
    name: "JavaScript",

    Description:
      "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions",
  },
  {
    name: "MongoDB",

    Description:
      "MongoDB, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions",
  },
];

db.Tech_stack.remove({})
  .then(() => db.Tech_stack.collection.insertMany(tech_stackSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const projectSeed = [
  {
    id:1,
    name: "Project-1",
    details:"add and add",
    due_date:[{day:12/10/2021}],
    tech_stacks: [{ name: "JavaScript", count: 1 }],
    developers: [{ name: "Adam"}]
  },
  {
    id:2,
    name: "Project-2",
    details: 'Add and add and ',
    due_date: [{ day: 12 / 10 / 2021 }],
    tech_stacks: [{ name: "JavaScript", count: 1 }],
    developers: [{ name: "Adam" }]
  },
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
