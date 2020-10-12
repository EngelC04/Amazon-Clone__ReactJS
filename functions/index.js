const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Ha8jJIT4loXJY9DuzGWQLA7Qpq3wntXyiS4zARpQgtexfD7MTGFElvVEg37JyTZSwjshI8tvSA1ymPU6WmmRPKu00966z99xE"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved boom!!! for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // submits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-8f2d3/us-central1/api.
