import { db } from "../server/db";

export default function handler(req, res) {
    if (req.method === "GET") {
        try{
            const cartItems = db.cart.get()
            res.status(200).json({cart: cartItems});
        } catch (error) {
            res.status(500).json({error: "Failed to retrieve cart items"});
        }
    } else if (req.method === "POST") {
        const alreadyInCart = db.cart.getById(req.body.id);
        if (!alreadyInCart) {
                db.cart.add(req.body);
                res.status(201).json({message: "Item added to cart"});
            } else {
                db.cart.updateById(req.body.id, alreadyInCart.quantity + 1);
                res.status(201).json({message: "Item quantity updated"});
            }
    }else{
        res.status(400).json({error: "Invalid request method"});
    }}