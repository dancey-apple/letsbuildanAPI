import { useRouter, userRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
    const router = useRouter();
    
    const goToCart = () => {
        router.push("/api/cart");
    }

    const goToHome = () => {
        router.push("/");
    };

    return (
        <nav className="NavBar" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "#e02880",
            color: "white",
            }}>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToCart}>Cart</button>
        </nav>
    );
}

export default NavBar;