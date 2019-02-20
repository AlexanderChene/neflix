import React from "react";
import { Component, Fragment } from "react";
import { connect } from "react-redux";
//total app
class App extends Component {
  handleClick = (index, name) => {
    this.props.handleClick(index, name);
  };
  render() {
    return (
      <Fragment>
        <h4>My List</h4>
        <MovieShowCase
          list={this.props.myList}
          name={"Remove"}
          handleClick={this.props.handleClick}
        />
        <h4>My recommendations</h4>
        <MovieShowCase
          list={this.props.recoList}
          name={"Add"}
          handleClick={this.props.handleClick}
        />
        <hr />
        <TitleList list={this.props.myList} />

      </Fragment>
    );
  }
}

//mylist component
class MovieShowCase extends Component {
  state = {
    hide: null
  };

  handleMouseOver = id => {
    this.setState({
      hide: id
    });
  };

  handleMouseOut = () => {
    this.setState({
      hide: null
    });
  };
  render() {
    let show_list = this.props.list.length ? (this.props.list.map((elem, index) => {
      return (
        <div
          key={index}
          className="poster"
          onMouseOver={() => this.handleMouseOver(elem.id)}
          onMouseOut={this.handleMouseOut}
        >

          <img src={elem.img} alt="movie" />
          <br />
          <button
            onClick={() => this.props.handleClick(index, this.props.name)}
            className={this.state.hide === elem.id ? "show" : "hide"}
          >
            {this.props.name}
          </button>
        </div>
      );


    })) : (
        <div>The list is now empty...</div>
      )

    return <div className="box">{show_list}</div>;
  }
}

class TitleList extends Component {
  render() {
    let title_list = this.props.list.map((elem, index) => {
      return <li key={index}>{elem.title}</li>
    })
    return (
      <Fragment>
        <h4>My Movie Titles</h4>
          <ul>{title_list}</ul>
        
      </Fragment>)
  }
}

const mapStateToProps = state => {
  return {
    myList: state.mylist,
    recoList: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (index, name) => {
      dispatch({ type: name, index: index });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
