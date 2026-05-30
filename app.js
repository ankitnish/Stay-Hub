const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Listing = require("./models/listing");

// MongoDB URL
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Connect DB
async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

// Routes
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/listings", async (req, res) =>{
    Listing.find({}).then(res =>{
        console.log(res);
    });

});

// app.get("/testListing", async (req, res) => {
//     try {
//         const sampleListing = new Listing({
//             title: "My new villa",
//             description: "By the beach",
//             price: 1200,
//             location: "Calangute, Goa",
//             country: "India",
//         });
//         await sampleListing.save();
//         console.log("Sample saved");
//         res.send("Data saved successfully");
//     } catch (err) {
//         console.log(err);
//         res.send("Error occurred");
//     }
// });

// Server
app.listen(8080, () => {
    console.log("Server running on port 8080");
});