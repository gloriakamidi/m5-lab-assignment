import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
//import cologne from "products/cologne.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Shop to React",
      items: [
        {
          id: 0,
          name: "Unisex Cologne"
          
        },
        {
          id: 1,
          name: "Apple iWatch",
          image: " "

        },
        {
          id: 2,
          name: "Unique Mug",
          image: "",
        },
        {
          id: 3,
          name: "Mens Wallet",
          image: "",
        },
      ],
    };
  }

 renderItems(items) {
    return (
      <div>
        {items.map((item) => (
          <ListGroupItem>
            <div key={item.id}>
              <p>{item.name}</p>
              <span>{item.image}</span>
              <span id='qty'></span>
              <span> quantity </span>
            </div>
          </ListGroupItem>
        ))}
      </div>
    );
  }

  render() {
    let imgGallery=[
      {src:'./products/cologne.jpg'}
    ]
    return(
      imgGallery.map((index)=> <img src)
    )
  }

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem tag="a">
            <h1>
              <span>{this.state.title}</span>-<span>0 items</span>
            </h1>

            {this.renderItems(this.state.items)}
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }

}

export default App;


