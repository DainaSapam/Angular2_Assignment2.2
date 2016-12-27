class Vehicle{
  constructor(name,type){
    this.name =  name;
    this.type = type;
  }
  
 getName(){
   console.log("This is "+this.name);
 }
 
 getType(){
   console.log("Type of the vehicle is "+this.type);
 }
}
class Scooter extends Vehicle {
  constructor(color,name,type){
    super(name,type);
    this.color = color;
  }
  
  getColor(){
    console.log("Color is "+this.color);
  }
}

var scoter = new Scooter("White","Scooter","2 wheeler");
scoter.getName();
scoter.getType();
scoter.getColor();

class Bike extends Vehicle {
  constructor(color,name,type){
    super(name,type);
    this.color = color;
  }
  
  getColor(){
    console.log("Color is "+this.color);
  }
}

var bike = new Scooter("black","Bike","2 wheeler");
bike.getName();
bike.getType();
bike.getColor();

class Car extends Vehicle {
  constructor(color,name,type){
    super(name,type);
    this.color = color;
  }
  
  getColor(){
    console.log("Color is "+this.color);
  }
}

var car = new Scooter("red","Car","4 wheeler");
car.getName();
car.getType();
car.getColor();
