//////////////////const / let / var ?//////////////////////
//////////////////////////////////////////////////////////
function varFunc(){
  for(var i=0 ; i<5 ; i++) {
    console.log(i); //1 2 3 4
  }
  console.log(i); //5
  //var i avaliable in the scope of the whole function
}

function letFunc(){
  for(let i=0 ; i<5 ; i++) {
    console.log(i); //1 2 3 4
  }
  //console.log(i); //undefined error
  //let i avaliable in the scope of its block
}
 //const is avaliable ony within its block (kima let) + read only

 
//////////////////OBJECTS////////////////////////////////
//////////////////////////////////////////////////////////
const person ={
  name:'jed',
 // Method :
 walk(){},
 talk(){}
}
console.log(person.name)
person.talk();
//we can use the bracket notation when we don't know which member of the object we will access
person['name']="bob";


//////////////////THIS KEYWORD////////////////////////////////
//////////////////////////////////////////////////////////////
const person1 ={
  name:'jed',
 // Method :
 walk(){
  console.log(this)
 },

}
person1.walk() //references the PERSON OBJECT
const walk1=person1.walk //this is a function
walk1();
//but when we call it we get WINDOW OBJECT (global object) because it is called outside of the object
//to fix this we use bend
const walk2=person1.walk.bind(person1);
walk2();

//////////////////ARROW FUNCTIONS////////////////////////////////
////////////////////////////////////////////////////////////////
/*const square = function (number) {
  return number*number
}*/
// becomes this in ES6 : 
const square = number => number*number
const person2 = {
  talk(){
    var self=this;
    setTimeout(function(){
      console.log("self",self) //if we use this here we get window object
      //here the best solution is to use an arrow function as parameter as it will reference the object person2
    },1000)
  }
}

//////////////////MAP FUNCTION////////////////////////////////
////////////////////////////////////////////////////////////////
//used on arrays
const colors = ['red','blue','green'];
const items = colors.map(color => `<li>${color}</li>`);

//////////////////SPREAD OPERATOR...////////////////////////////////
////////////////////////////////////////////////////////////////
//multiple concats or copying arrays + objects
const t1=[1,2,3]
const t2=[4,5,6]
const combined=[...t1,'a',...t2,'cd']
const clone=[...t1]
const o1={ name : 'jed'}
const o2={age:30}
const combinedO={...o1,...o2,location : 'tunisia'}

//////////////////CLASSES///////////////////////////////////////
////////////////////////////////////////////////////////////////
class Person {
  constructor(name) {
    this.name=name;
  }
  walk(){
    console.log("walking");
  }
}
const p1=new Person('jed') ;
class Teacher extends Person {
  constructor(name,subject){
    super(name);
    this.subject=subject;
  }
  teach(){
    console.log("teach");
  }
}
const teacher=new Teacher("klcj","math");

//////////////////MODULES///////////////////////////////////////
////////////////////////////////////////////////////////////////

//splitting into multiple files : export / import