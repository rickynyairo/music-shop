import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  getCart,
  getCartId,
  getAlbums,
  getSongs
} from "./actions/actions";

class Home extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };
  componentDidMount = async () => {
    const { getCartId, getAlbums, getSongs } = this.props;
    await getCartId();
    await getAlbums();
    await getSongs();
  };
  render() {
    let itemList = this.props.songs.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.name}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    songs: state.songs,
    albums: state.albums
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: async id => {
      dispatch(await addToCart(id));
    },
    getCartId: async () => dispatch(await getCartId()),
    getSongs: async () => dispatch(await getSongs()),
    getAlbums: async () => dispatch(await getAlbums()),
    getCart: async id => dispatch(await getCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
