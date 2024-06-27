import { useRouter, userRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
    const router = useRouter();
    
    const goToCart = () => {
        router.push("/cart");
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
            <button onClick={goToHome} style = {{
                backgroundColor: "#131728",
                color: "#e02880",
                border: "none",
                cursor: "pointer",
                borderRadius: "15px",
            }}>Home</button>
            <button onClick={goToCart} style = {{
                backgroundColor: "#131728",
                color: "#e02880",
                border: "none",
                cursor: "pointer",
                borderRadius: "15px",
            }}>Cart</button>
        </nav>
    );
}

export default NavBar;