import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "./actions/actions";
class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.name}</p>
              <p>
                <b>Price: KSh. {item.price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity || 1}</b>
              </p>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
