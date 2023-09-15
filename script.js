function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.driveMyCar = function() {
alert(`${this.name} will be the driver
${this.age} years old
${this.experience} of experience`)
   
   }
   this.carWash = function() {
    alert(`${this.name} is washing the car,
    ${this.age} years old
    ${this.experience} of experience`);
       
}}

 const toto = new Driver('Toto', 23, 2);
 const boy = new Driver('Boy', 28, 4);

 const driveButton = document.getElementById("driveButton");
 const washButton = document.getElementById("washButton");

 driveButton.addEventListener("click", () =>{
    toto.driveMyCar();
 });

 washButton.addEventListener("click", () =>{
    boy.carWash();
 });