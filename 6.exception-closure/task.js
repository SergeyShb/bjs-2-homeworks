//Задача 1
function parseCount(value) {
    if (isFinite(Number.parseFloat(value)) === false) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(value);        
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    } 
}


//Задача 2
class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || c + b <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.side1 = a;
            this.side2 = b;
            this.side3 = c;
        }  
    }   
    

    get perimeter() {
        return this.side1 + this.side2 + this.side3;
    }   

    get area() {
        let a = this.side1;
        let b = this.side2;
        let c = this.side3;

        let p = (a + b + c) / 2;

        let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        s = s.toFixed(3);
        s = Number(s);

        return s;
    }
} 


function getTriangle(a, b, c) {
        try {
            return new Triangle(a, b, c)
        } catch (error) {
            return {
                get area() {
                    return "Ошибка! Треугольник не существует"
                },
                get perimeter() {
                    return "Ошибка! Треугольник не существует"
                }
            };
        }
} 