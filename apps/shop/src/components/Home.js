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
  handleClick = album_id => {
    const { cart_id } = this.props;
    this.props.addToCart({ cart_id, album_id });
  };
  componentDidMount = async () => {
    const { getCartId, getAlbums, getSongs } = this.props;
    await getCartId();
    await getAlbums();
    await getSongs();
  };

  render() {
    let songList = this.props.songs.map(song => {
      return (
        <div className="card" key={song.song_id}>
          <div className="card-image">
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{song.name}</p>
            <p>
              <b>Price: {song.price}$</b>
            </p>
          </div>
        </div>
      );
    });
    let albumList = this.props.albums.map(album => {
      return (
        <div className="card" key={album.album_id}>
          <div className="card-image">
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(album.album_id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{album.title}</p>
            <p>
              <b>Price: {album.price}$</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Songs</h3>
        <div className="box">{songList}</div>
        <h3 className="center">Albums</h3>
        <div className="box">{albumList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    songs: state.songs,
    albums: state.albums,
    cart_id: state.cart_id
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
