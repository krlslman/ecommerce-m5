// //? This api folder is only for backend, serves as a entire backend of our app.
// //? So inside of out Next project, we dont need a node or express server thanks to this.

import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    // console.log("cartItems3 :", req.body.cartItems);
    // console.log("***POST altı:",req.body[0].image);
    console.log("***POST altı:", req.body);
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1MnLhFJp35FXxf4DtPrGdT9c" },
          // { shipping_rate: 'shr_1Mni1PJp35FXxf4DtVsV4bZ8' },
        ],

        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              `https://cdn.sanity.io/images/${process.env.STRIPE_PROJECT_ID}/production/`
            )
            .replace("-webp", ".webp")
            .replace("-jpg", ".jpg")
            .replace("-jpeg", ".jpeg");
          // console.log("IMAGE : ", newImage);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      // res.redirect(303, session.url);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
      // console.log("***Catch :");
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
  // console.log("***FINAL : ");
}