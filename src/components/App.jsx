import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GrouceryList from "./GrouceryList";
import Footer from "./Footer";

const grouceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
]

export default function App() {

  const [items, setItems] = useState(grouceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked } : item)));
  }

  function handleClear() {
    setItems([]);
  }
  
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem}/>
      <GrouceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClear} />
      <Footer items={items} />
    </div>  
  );
}









