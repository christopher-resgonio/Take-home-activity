let passengers = [
    { Name: "Mayor", age: 28 },
    { Name: "Lucas", age: 62 },
    { Name: "Ponce", age: 4 }
];

let fare = 100;

function fareDiscount(age) {
    if (age <= 5) {
        
        return { fare: 0 };
    } else if (age >= 6 && age <= 59) {
        let StudentFare = fare * 0.2;
        
        return { fare: StudentFare };
    } else {
        let SeniorFare = fare * 0.5;
        return { fare: SeniorFare };
    }
}

function StartUp(){
    console.log("Passenger Fare List:");
    console.log("------------------------");

    passengers.forEach(p => {
    let result = fareDiscount(p.age);
    console.log(`Name: ${p.Name}, Age: ${p.age}, Fare: P${result.fare.toFixed(2)}`);
});
}

StartUp();
