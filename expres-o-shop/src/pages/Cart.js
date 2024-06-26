import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLaoding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/cart")
            .then(respones => Response.json())
            .then(db => {
                if (db.cart) {
                    setCartItems(db.cart);
                } else {
                    setError(db.error || "Failed to retrieve cart items");
                }
                setLaoding(false);
            })
            .catch(error => {
                setError("Failed to retrieve cart items");
                setLaoding(false);
            });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1 style = {{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "#e02880",
            }}>Oops... Somthing went wrong: {error}</h1>;
    }

    return (
        <div>
            <h1 style = {{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#e02880",
                    }}>Cart</h1>
            {cartItems.length === 0 ? (
                <p style = {{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#e02880",
                    }}>Your cart is empty</p>
            ) : (
                <ul style = {{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#e02880",
                    }}>
                    {cartItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;