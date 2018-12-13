//Chapter Material

var hoagieObject = {
    name: "Hoagie",
    color: "Gray",
    type: "Dog",
    favoriteThings: ["human laps", "floofy blankets", "dog parks"],
    bark: function(){
      console.log("woof!");
    }
  }
  
  hoagieObject.bark(); // "woof!"

  // Let's declare an object to represent our friend Emily
var emilyObject = {
    firstName: "Emily",
    lastName: "Lemmon",
    greetSomeone: function(personsName){
      console.log(`Hi, ${personsName}, I'm ${this.firstName} ${this.lastName}.`);
    }
  }
  
  // And another one to represent our other friend Jisie
  var jisieObject = {
    firstName: "Jisie",
    lastName: "David",
    greetSomeone: function(personsName){
      console.log(`Hi, ${personsName}, I'm ${this.firstName} ${this.lastName}.`);
    }
  }
  
  
  // Now we can have them say hi to each other!
  
  emilyObject.greetSomeone(jisieObject.firstName);
  // Expected output: "Hi, Jisie, I'm Emily Lemmon.
  
  jisieObject.greetSomeone(emilyObject.firstName);
  // Expected output: "Hi, Emily, I'm Jisie David.

  //1
  var animals = [{
        name:"Sammy",
        species:"snake",
        fun:["being mean", "sleeping", "strangulation"],
        sound: function(){
              console.log("HISSSSSS SSSSSS SS S");}
      },
      {
        name:"Barry",
        species:"Honey Badger",
        fun:["stealing from bees", "badgering kids", "giving zero fucks"],
        sound: function(){
              console.log("**Incoherent Angry Noise**");}    
      },
      {
        name:"Edd",
        species:"Ant",
        fun:["playing with dirt","lifting heavy stuff", "running the world"],
        sound: function(){
              console.log("**PURE SILENCE**");}
      }
    
]

console.log(animals[0].sound());
console.log(animals[1].sound());
console.log(animals[2].sound());

//2
var russContactInfo = {
    name: "Russ",
    cell: "(304) 751-5724",
    email: "downeastrussell@gmail.com",
    address: "3679 Trace Creek Road",
    callCell: function(cell){
        console.log(`Now calling Russ - ${russContactInfo.cell}`)},
    
    sendEmail: function(email){
        console.log(`Sending email to ${russContactInfo.name} @ ${russContactInfo.email}`)},
    
    sendMail: function(address){
        console.log(`${russContactInfo} lives at ${russContactInfo.address}`)}
    
    
  }

  var jonContactInfo = {
    name: "Jon",
    cell: "(304) 633-6415",
    email: "noIdea@gmail.com",
    address: "Barboursville WV",
    callCell: function(cell){
        console.log(`Now calling Jon - ${jonContactInfo.cell}`)},
    
    sendEmail: function(email){
        console.log(`Sending email to ${jonContactInfo.name} @ ${jonContactInfo.email}`)},
        
    sendMail: function(address){
        console.log(`${jonContactInfo} lives at ${jonContactInfo.address}`)}
    
  }

  var dannyContactInfo = {
    name: "Danny",
    cell: "(304) 743-3312",
    email: "iDontKnow@gmail.com",
    address: "Huntington WV",
    callCell: function(cell){
        console.log(`Now calling Danny - ${dannyContactInfo.cell}`)},

    sendEmail: function(email){
        console.log(`Sending email to ${dannyContactInfo.name} @ ${dannyContactInfo.email}`)},
        
    sendMail: function(address){
        console.log(`${dannyContactInfo} lives at ${dannyContactInfo.address}`)}
    
  }
  
  console.log(russContactInfo.callCell());
  console.log(jonContactInfo.callCell());
  console.log(dannyContactInfo.callCell());
  console.log(russContactInfo.sendEmail());
  console.log(jonContactInfo.sendEmail());
  console.log(dannyContactInfo.sendEmail());
  console.log(russContactInfo.sendMail());
  console.log(jonContactInfo.sendMail());
  console.log(dannyContactInfo.sendMail());

  //3
  var calculator = {
    add: function(x, y) {
      return x + y;
    }
    ,

    subtract: function(x,y){
        return x - y;
    }
    ,

    division: function(x,y){
        return x / y;
    }
    ,

    multiplication: function(x,y){
        return x * y;
    }
  }
  
  var sum = calculator.add(2, 2);
  console.log(sum); // Expected output: 4
  console.log(calculator.add(2,2));
  console.log(calculator.subtract(2,2));
  console.log(calculator.division(10,5));
  console.log(calculator.multiplication(2,5));



