let paymentRecords = [];

function AddPayment(Type, Amount, Timestamp){
    let record = {
        Type: Type,
        Amount: Amount,
        Timestamp: Timestamp
    };
    paymentRecords.push(record);

}

paymentRecords.sort((a, b) => b.Amount - a.Amount);


function PaymentHistory(){
    paymentRecords.forEach(record => {
    console.log("\nType of Payment: "+ record.Type + "\nAmount: " + record.Amount.toFixed(2) + "\nTimestamp: " + record.Timestamp);
});
}

AddPayment("Credit Card", 50.00, "2025-07-25T14:00:00Z");
AddPayment("Cash", 110.00, "2025-07-25T15:00:00Z");
AddPayment("GCash", 1000.00, "2025-07-25T16:00:00Z");


console.log("Payment History")
PaymentHistory();
