import React, { Component } from "react";

export class stars extends Component {
  getStyleStar = (id) => {
    const rate = this.props.edit ? this.props.varRate : this.props.rate;
    const rateList = Array(rate)
      .fill(0)
      .map((e, i) => rate - i);
    return {
      paddingLeft: "40px",
      color: rateList.includes(id) ? "yellow" : "gray",
    };
  };
  changeRating = (id) => {
    this.props.onChange(Number(id));
  };
  render() {
    return (
      <div style={starsStyle}>
        <i
          style={this.getStyleStar(1)}
          className="fas fa-star favori-btn"
          onClick={(e) => this.changeRating(e.target.id)}
          id="1"
        ></i>
        <i
          style={this.getStyleStar(2)}
          className="fas fa-star favori-btn"
          onClick={(e) => this.changeRating(e.target.id)}
          id="2"
        ></i>
        <i
          style={this.getStyleStar(3)}
          className="fas fa-star favori-btn"
          onClick={(e) => this.changeRating(e.target.id)}
          id="3"
        ></i>
        <i
          style={this.getStyleStar(4)}
          className="fas fa-star favori-btn"
          onClick={(e) => this.changeRating(e.target.id)}
          id="4"
        ></i>
        <i
          style={this.getStyleStar(5)}
          className="fas fa-star favori-btn"
          onClick={(e) => this.changeRating(e.target.id)}
          id="5"
        ></i>
      </div>
    );
  }
}
const starsStyle = {
  fontSize: "50px",
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
  color: "gray",
};

export default stars;
