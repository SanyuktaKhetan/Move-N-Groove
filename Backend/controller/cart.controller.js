import Cart from "../model/cart.model.js";

export const getCart = async(req, res) => {
  try {
    const { email, name,image,price } = req.body;
    const newData = new Cart({
        name:course.name,
        image:course.image,
        price:course.price
    });
    //creating instance of the Cart model
    const newCart = new Cart({
      email:email,
      Course_d:[{newData}]
    });
    //saving cart to database
    await newCart.save();
    res.status(201).json({
      message: "Cart created successfully"
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};