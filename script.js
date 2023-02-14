// write a "person" class to hold all the details

// class person{
//     constructor(firstName,lastName,mailId,mobileNumber){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.mailId = mailId;
//         this.mobileNumber = mobileNumber;
//     }
//     get_details(){
//         console.log(`person details is ${this.firstName}`)
//     }
// }
// var person1 = new person("sairam","gurunathan","sairam.gurunathan@gmail.com",9688238114);
//     person1.get_details()


// write a class to calculate the uber price

    class uber_price{
        constructor(distance){
            this.distance = distance;
        }
        get_user_price(){
            var fare = this.distance*10;
            console.log(`your fare price ${fare}`)
        }
    }
var total_fare = new uber_price(26);
    total_fare.get_user_price()