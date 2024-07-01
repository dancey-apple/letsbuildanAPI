import { useState,useEffect } from "react";

export default function Home() {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/menu")
      const data = await res.json();
      setMenu(data.menu);
    }
    loadData();
  }, [])

function addToCart(id) {
  const item = menu.find(item => item.id === id);

  if (item) {
    fetch(`/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: id, quantity: 1, name: menu[id].name, price: menu[id].price, image: menu[id].image})
    });
  }
}

if (menu.length === 0) return (<h1>Loading...</h1>);

  return (
    <main >
      <div id= "body" style ={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
      }}>
        <img src='https://github.com/dancey-apple/imageLibrary/blob/main/express-0-coffee.png?raw=true'style={{
          display: "flex",
          justifyContent: "center",
          width: "250px",
          margin: "25px 0 0 0",
        }}></img>
        <div  style={{
          color: "#e02880",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <h1>Welcome to Express-O Coffee!</h1>
          <h4>Check out our Selection!</h4>
        </div>
        <div style={{
          display: "flex", 
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap", 
          padding: "10px"
          }}>  
          {menu.map(item => {
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
                <img src={item.image} style={{
                  width: "100%",
                  borderRadius: "15px",
                }}></img>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button onClick={() => addToCart(item.id)} style={{
                  backgroundColor: "#e02880",
                  color: "#131728",
                  padding: "5px",
                  borderRadius: "15px",
                  border: "none",
                  cursor: "pointer",
                }}>Add To Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
)}