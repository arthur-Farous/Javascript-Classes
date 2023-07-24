class Student {
    constructor(studentName, studentAge, studentScore, studentCourses) {
      this.name = studentName;
      this.age = studentAge;
      this.score = studentScore;
      this.courses = studentCourses;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    increaseAge() {
      this.age++;
    }
  
    addCourse(course) {
      this.courses.push(course);
    }
  }
  
  //For trials
  const studentOne = new Student("Nana Kwame Arthur",27,80,['CSS','HTML','React']);
  console.log(studentOne.getName());
  console.log(studentOne.getAge());
  studentOne.increaseAge();
  console.log(studentOne.getAge());
  console.log(studentOne.score);
  console.log(studentOne.courses);
  studentOne.addCourse("Python");
console.log(studentOne.courses);