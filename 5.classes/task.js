// Задание 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }


    fix() {
      this.state = this.state * 1.5;
    }

    set state(number) {
      if (number < 0) {
        this._state = 0;
      } else if (number > 100) {
        this._state = 100;
      } else {
        this._state = number; 
      }
    }
    
    get state() {
      return this._state; 
    }
    
}



class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);     
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount); 
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic"; 
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}



// Задание 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }


    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let resultFindBook = this.books.find(item => item[type] === value);
        if (resultFindBook === undefined) {
            return null;
        } else {
            return resultFindBook;
        }
    }

    giveBookByName(bookName) {
        let resultGiveBook = this.books.findIndex(item => item.name === bookName);
        if (resultGiveBook === -1) {
            return null;
        } else {
            return this.books.splice(resultGiveBook, 1)[0];
        }
    }
}


// Задание 3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = [];   
    }


    addMark(number, subjectName) {
        if (number >= 2 && number <= 5) {
            if (this.marks[subjectName] === undefined) {
                this.marks[subjectName] = [];
                this.marks[subjectName].push(number);     
            } else {
                this.marks[subjectName].push(number); 
            }
        }
    }    

    getAverageBySubject(subjectName) {
        if (this.marks[subjectName] === undefined) {
            return 0;
        } else {
            let resultAverageBySubject = this.marks[subjectName].reduce((acc, item, index, arr) => {
                acc = acc + item;
                if (index === arr.length - 1) {
                    return acc / arr.length;
                }
                return acc;
            }, 0); 
            return resultAverageBySubject;
        }
    }

    getAverage() {
        let resultGetAverage = Object.keys(this.marks).reduce((acc, item, index, arr) => {
            
            acc = acc + this.getAverageBySubject(item);
            if (index === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0);
        return resultGetAverage;
    }
}