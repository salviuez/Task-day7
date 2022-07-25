
//3. using class constructor "bio" to hold all the details.
class bio{
    constructor(name,age,location,designation,salary){
        this.name = name;
        this.age = age;
        this.location = location;
        this.designation = designation;
        this.salary = salary;
    }
    getdetails(){
        return(`The name is ${this.name} aged ${this.age} from ${this.location} and his designation is ${this.designation} with his salary ${this.salary}`);
    }
}
let person1 = new bio("Arun","28","chennai","software developer","100000");
console.log(person1.getdetails());

// 4. Using class "UBER" to calculate the uber price:

class uber {
    constructor(distance,price,waitingcharge){
        this.distance = distance;
        this.price = price;
        this.waitingcharge = waitingcharge;
    }
    changedestination(changedistance){
        this.distance = changedistance;

    }

    getprice(){
        let price = (this.price*this.distance) + (this.waitingcharge*5)
        return price;
    }
}
let customer1 = new uber (12,5,5);
customer1.changedestination(16);
console.log(customer1.getprice())