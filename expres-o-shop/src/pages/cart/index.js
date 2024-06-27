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
        <main>
            <div id= "body" style ={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
                }}>
                <img src='https://github.com/dancey-apple/imageLibrary/blob/main/express-0-coffee.png?raw=true'style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "200px",
                }}></img>
                <div  style={{
                    color: "#e02880",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    }}>
                    <h1>CART</h1>
                </div>
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
                    <div key={item.id} style={{
                        display: "flex",
                        color: "#e02880",
                        justifyContent: "space-between",
                        textAlign: "center",
                        flexDirection: "column",
                        border: "1px solid cyan",
                        borderRadius: "15px",
                        margin: "10px",
                        padding: "5px",
                        width: "300px",
                    }}>
                    <h3>{item.id}</h3>
                    <p>{item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)} style={{
                        backgroundColor: "#e02880",
                        color: "#131728",
                        padding: "5px",
                        borderRadius: "15px",
                        border: "none",
                        cursor: "pointer",
                    }}>Remove</button>
                    </div>
                    );
                })}
                </div>
            </div>
        </main>
    )
}