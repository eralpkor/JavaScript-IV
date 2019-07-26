console.log(`************* Beginning of Lambda classes. **************`)
// CODE here for your Lambda Classes
// base-class Person

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// Instructors goes here
class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }

  randomGrades(student) {
    // generate random test scores
    let randomNumbers = Math.floor(Math.random() * 100);

    return `${student.name} just got ${randomNumbers} on ${student.gender === 'F' ? 'Her' : 'His'} project.`;
  }
}

// Student class
class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
    this.gender = props.gender;
  }

  listsSubjects() {
    return `${this.name}'s favorite subjects: ${JSON.stringify(this.favSubjects)}.`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}


// Project manager goes here
class ProjectManagers extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standup times!​​​​​.`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}





// Instructors
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: "Front-end",
  catchPhrase: "Don't forget the homies."
});

const mike = new Instructor({
  name: 'Mike',
  location: 'LA',
  age: 43,
  favLanguage: 'Python',
  specialty: 'Front-end',
  catchPhrase: "Don't forget to code."
});

const sherry = new Instructor({
  name: 'Sherry',
  location: "New York",
  age: 30,
  favLanguage: 'C++',
  specialty: 'Back-end',
  catchPhrase: "Eat your chicken."
});

// Students
const jane = new Student({
  name: 'Jane',
  location: 'Phoenix',
  className: 'WEB19',
  age: 35,
  gender: 'F',
  previousBackground: 'teacher',
  favLanguage: 'Node',
  specialty: 'Back-end',
  grade: 90,
  favSubjects: ['Design', 'Less', 'HTML']
});

const susan = new Student({
  name: 'Susan',
  location: 'wilmington',
  className: 'WEB20',
  age: 43,
  gender: 'F',
  previousBackground: 'Student',
  favLanguage: 'C',
  specialty: 'Back-end',
  grade: 85,
  favSubjects: ['HTML', 'JavaScript', 'Python', 'CS']
});

const eralp = new Student({
  name: 'Eralp',
  location: 'Long Island',
  className: 'WEB22',
  age: 48,
  gender: 'M',
  previousBackground: 'IT',
  favLanguage: 'C',
  specialty: 'Back-end',
  grade: 85,
  favSubjects: ['JavaScript', 'Node', 'React']
});

// ProjectManagers
const roman = new ProjectManagers({
  name: 'Roman',
  location: 'Idaho',
  age: 48,
  gender: 'M',
  favLanguage: 'C#',
  specialty: 'Design',
  catchPhrase: "Hello there!"
});

const tom = new ProjectManagers({
  name: 'Tom',
  location: 'New Paltz',
  age: 52,
  gender: 'M',
  favLanguage: 'Javascript, Node',
  specialty: 'Web-dev',
  catchPhrase: "Go get it!"
});

console.log(`${mike.name}'s phrase is ${mike.catchPhrase}`);
console.log(`${sherry.name} lives in ${sherry.location}`);
console.log(`${tom.speak()}`);
console.log(`${susan.listsSubjects()}`);
console.log(`${jane.listsSubjects()}`);
console.log(`${susan.PRAssignment('JavaScript')}`);
console.log(`${jane.sprintChallenge('User Interface and Git')}`);
console.log(`${fred.grade(susan, "LESS")}`);
console.log(`${eralp.listsSubjects()}`);
console.log(`${mike.demo('JavaScript-IV')}`);

console.log(`${roman.standUp('web22_romanights', 'All')}`);

console.log(`${tom.debugsCode(eralp, 'CSS')}`);

console.log(`${tom.randomGrades(eralp)}`);