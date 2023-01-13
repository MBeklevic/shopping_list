import React, { Component } from "react";
import ShoppingListForm from "./Components/ShoppingListForm";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons", id: uuidv4() },
        { name: "Bread", qty: "2 loaves", id: uuidv4() },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    let newItem = { ...item, id: uuidv4() };
    this.setState((st) => ({
      items: [...st.items, newItem],
    }));
  }

  render() {
    return (
      <div className="App">
        <h1> Shopping List</h1>
        <ShoppingListForm addItem={this.addItem} />
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id} id={item.id}>
              <span>{item.name}</span> : {item.qty}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
