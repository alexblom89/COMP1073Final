// JavaScript Document

//A Person class constructor is created that takes name, age, gender, and interests as parameters to be set as object attributes upon
//a new Person object being instantiated.
class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

//greeting and bye functions are created within the Person class, tying it to the class so that all future Person objects will also
//use the function. These functions prints out a string in the console log that includes the name parameter passed into the object at creation.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

//New Person objects are instantiated using the new keyword. Parameters are passed to the object constructor, giving the person object those attributes.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//A new subclass is created based on the Person class, that inherits the Person class methods and properties. New properties are added
//to this class to differentiate it from the Person class objects, and include more information.
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

//Instantiating a new Teacher object.
let Alex = new Teacher('Alex', 30, 'male', ['PHP', 'C#', 'Anything but Java'], 'How To Eat An Entire Pizza 101', '12');
