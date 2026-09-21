import { useState } from "react";

function Menu() {
  const items = [
    {
      category: "Coffee",
      name: "Cappuccino",
      description: "Rich espresso with creamy milk foam",
      price: "$4",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
    },
    {
      category: "Coffee",
      name: "Latte",
      description: "Smooth coffee with steamed milk",
      price: "$5",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    },
    {
      category: "Coffee",
      name: "Espresso",
      description: "Strong and classic Italian coffee",
      price: "$3",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04",
    },
    {
      category: "Desserts",
      name: "Chocolate Cake",
      description: "Delicious chocolate dessert",
      price: "$6",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      category: "Baked",
      name: "Croissant",
      description: "Fresh baked buttery croissant",
      price: "$3",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    },
    {
      category: "Desserts",
      name: "Donut",
      description: "Sweet glazed donut",
      price: "$2.5",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    },
  ];

  const [category, setCategory] = useState("All");
  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div>
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Coffee" ? "active" : ""}
          onClick={() => setCategory("Coffee")}
        >
          Coffee
        </button>

        <button
          className={category === "Desserts" ? "active" : ""}
          onClick={() => setCategory("Desserts")}
        >
          Desserts
        </button>
        <button
          className={category === "Baked" ? "active" : ""}
          onClick={() => setCategory("Baked")}
        >
          Baked
        </button>
      </div>

      <div className="menu-container">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.name}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
