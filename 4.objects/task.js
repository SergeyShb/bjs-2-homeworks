function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ('marks' in this === true) {
    this.marks = this.marks.concat(marks);
  }
}

Student.prototype.getAverage = function () {
  if ('marks' in this === true && this.marks.length != 0) {
    let marksSum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      marksSum = marksSum + this.marks[i];
    }
    return marksSum / this.marks.length;
  } else return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;

  this.excluded = reason;
}
