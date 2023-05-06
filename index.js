console.log('2nd Chapter Practice');

//Object
let rectengal = {
    length : 1,
    breadth : 2,
    draw : function(){
        console.log('Drawinig');
    }
};

console.log(rectengal)

//Creating object using factory function 
function studentName(fname, lname){
    let student = {
        Fname : fname,
        Lname : lname
    }
    return student;
} 

//new object creation, new properties introduce, new properties deletion
let studentName1 = studentName('Satyanarayan', 'sen');
studentName1.color = 'yellow';
delete studentName1.color;

let studentName2 = studentName('Chinmay', 'Mukhi');
let studentName3 = studentName('Madhusmita', 'Masanta');
console.log(studentName1);
console.log(studentName2);
console.log(studentName3);

//creating object using constructor function
function ShopName(fname, lname){
    this.Fname = fname;
    this.Lname = lname;
}
let ShopName1 = new ShopName('Satyanarayan', 'Bhandar');
ShopName1.ShopAge = 29;
console.log(ShopName1);

//