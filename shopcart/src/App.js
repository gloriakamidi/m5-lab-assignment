import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
// import cologne from "../products/cologne.jpg";
// import watch from "../products/iwatch.jpg";




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Shop to React",
      items: [
        {
          id: 0,
          name: "Unisex Cologne",
          image: "products/cologne.jpg",
        },
        {
          id: 1,
          name: "Apple iWatch",
          image: "products/iwatch.jpg",
        },
        {
          id: 2,
          name: "Unique Mug",
          image: "products/mug.jpg",
        },
        {
          id: 3,
          name: "Mens Wallet",
          image: "products/wallet.jpg",
        },
      ],
    };
  }

 renderItems(items) {
    return (
      <div>
        {items.map((item) => (
          <ListGroupItem className="align-self-center py-2 w-50">
            <div key={item.id}>
              <p>{item.name}</p>
              <span>{item.image}</span>
              <span id="qty" className='box'>0</span>
              <span className='qtity'> quantity </span>
            </div>
          </ListGroupItem>
        ))}
      </div>
    );
  }

  // render() {
  //   let imgGallery=[
  //     {src:'./products/cologne.jpg'}
  //   ]
  //   return(
  //     imgGallery.map((index)=> <img src)
  //   )
  // }

  render() {
    return (
      <div>
          <ListGroup>
            <h1>
              <ListGroupItem
                tag="a"
                className="align-self-center py-2 w-50 bg-info text-dark"
              >
                <span>{this.state.title}</span>
                <span className="cart">
                  < faShoppingCart />
                  0 items
                  </span>
              </ListGroupItem>
            </h1>

            {this.renderItems(this.state.items)}
          </ListGroup>
      </div>
    );
  }

}

export default App;

