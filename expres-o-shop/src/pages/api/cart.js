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
        try{
            db.cart.add(req.body);
            res.status(200).json({message: "Item added to cart"});
        } catch (error) {
            res.status(500).json({error: "Failed to add item to cart"});
        }
    }else{
        res.status(400).json({error: "Invalid request method"});
    }}