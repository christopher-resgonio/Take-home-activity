let TaxiRides= [
    {fare:200, distance: 15,time: '07:30AM'},
    {fare:220, distance: 20,time: '08:00AM'},
    {fare:250, distance: 23, time: '08:29AM'},
    {fare:380, distance: 30, time: '09:00AM'},
    {fare:400, distance: 40, time: '10:00AM'},
    {fare:500, distance: 50, time: '11:30AM'}
 
];

function summarizeRides(TaxiRides) {
let totalEarnings= 0;
let longestRide= TaxiRides[0];
const hourFrequency ={};

for(const ride of TaxiRides){
    totalEarnings += ride.fare;



if (ride.distance > longestRide.distance) {
    longestRide = ride;
}

const hour = ride.time.split(':') [0];


hourFrequency[hour] = (hourFrequency[hour] || 0) + 1;
}

//Determin peak hour
let peakHour= null;
let maxRides = 0;

for(const hour in hourFrequency) {
    if (hourFrequency[hour] > maxRides) {
        maxRides= hourFrequency[hour];
        peakHour= hour;
    }
}

return {
    totalEarnings,
    longestRide,
    peakHour: `${peakHour}: 00 - ${peakHour}: 59`,
};
}



const summary = summarizeRides(TaxiRides);
console.log("------Taxi Fare Summary------");
console.log(`Total Earnings: ${summary.totalEarnings}`);
console.log(`Longest Rides: ${summary.longestRide.distance} km, Fare: ${summary.longestRide.fare}, Time: ${summary.longestRide.time}`);
console.log(`Peak Hour: ${summary.peakHour}`);
