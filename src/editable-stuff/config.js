// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "NITIN ",
  middleName: "PRATAP ",
  lastName: "SINGH",
  message: "I'm an Android Developer who is passionate about making open source accessible,creating technology to elevate people and building community...   ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nitinsingh-007",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nitin.pratapsingh.5621/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nitin_crazy.007/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nitin-pratap-singh-a3759a1b3/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/nitin007pratap",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "My name is Nitin Pratap Singh. I'm an Android Developer who is passionate about making open source accessible,creating technology to elevate people and building community...              ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nitinsingh-007", 
  reposLength: 12,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "DIPLOMA IN ELECTRONICS ENGINEERING", value: 72.58 },
    { name: "BACHELOR IN INFORMATION TECHNOLOGY", value: 100 },
  ],
  softSkills: [
    { name: "C", value: 100 },
    { name: "C++", value: 100 },
    { name: "JAVA", value: 100 },
    { name: "PYTHON", value: 100 },
    { name: "KOTLIN", value: 100 },
    { name: "Basic knowledge of gates and microprocessors", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "An astrophysics geek who always thinks about how this universe works. A passionate bike rider.Fitness is my passion. Volunteer at Aadhar Shree Vikaas Samiti Cadet at NATIONAL CADET CORPS(NCC)...   ",
  email: "programwarehouse@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
