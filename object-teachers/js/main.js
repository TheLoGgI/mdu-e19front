"use strict";

// declaring teacher objects

// Birgitte
let teacher1 = {
  name: "Birgitte Kirk Iversen",
  initials: "bki",
  mail: "bki@baaa.dk",
  phone: "7228 6316",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg"
};

// Martin
let teacher2 = {
  name: "Martin Aagaard Nøhr",
  initials: "mnor",
  mail: "mnor@baaa.dk",
  phone: "7228 6349",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Multimedia Design",
  img: "https://media-exp1.licdn.com/dms/image/C4D03AQElLjyVglReqw/profile-displayphoto-shrink_800_800/0?e=1602720000&v=beta&t=hDUFJrkrpSm_-G2m5ov8EkPPmAIJhylSECOG3WAEyk8"
};

let teacher3 = {
  name: "Kim Elkjær Marcher-Jepsen",
  initials: "kije",
  mail: "kije@baaa.dk",
  phone: "7228 6325",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/3zihz21l/kim-elkjaer-marcher-jepsen.jpg"
};

let teacher4 = {
  name: "Rasmus Cederdorff",
  initials: "race",
  mail: "race@baaa.dk",
  phone: "7228 6318",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg"
};

// log objects to the developer console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(teacher4);

// Appending objects to the DOM

// teacher1 - Birgitte
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" +
  "</article>";

//teacher2 - Gertie
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher2.img + "'>" +
  "<h3>" + teacher2.name + "</h3>" +
  teacher2.position + "<br>" +
  "<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" +
  "</article>";

//teacher3 - Kim
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher3.img + "'>" +
  "<h3>" + teacher3.name + "</h3>" +
  teacher3.position + "<br>" +
  "<a href='mailto:" + teacher3.mail + "'>" + teacher3.mail + "</a>" +
  "</article>";

//teacher4 - Rasmus
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher4.img + "'>" +
  "<h3>" + teacher4.name + "</h3>" +
  teacher4.position + "<br>" +
  "<a href='mailto:" + teacher4.mail + "'>" + teacher4.mail + "</a>" +
  "</article>";