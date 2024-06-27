import { useState,useEffect } from "react";

export default function Checkout() {
    
    const [cartItems, setCartItems] = useState({cart:[]});

    useEffect(() => {
        async function loadData() {
        const res = await fetch("/api/cart");
        const data = await res.json();
        setCartItems(data);
        }
        loadData();
    }, [])

    async function removeFromCart(id) {
        const res = await fetch(`/api/cart/${id}`, {method: "DELETE"});
    }

    return(
        <>
            <h1>Cart</h1>
            <h4>Here is our cart:</h4>
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "10px",
            }}
            >
            {cartItems.cart.map((item) => {
                return (
                <div key={item.id}
                    style={{}}
                >
                <h3>{item.id}</h3>
                <p>{item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                );
            })}
            </div>
        </>
    )
}