import React, { Component } from "react";

export class stars extends Component {
  getStyleStar = (id) => {
    const rate = this.props.rate;
    const rateList = this.getArray(rate);
    return {
      color: this.props.edit
        ? "gray"
        : rateList.includes(id)
        ? "yellow"
        : "gray",
    };
  };
  getArray = (n) => {
    return Array(n)
      .fill(0)
      .map((e, i) => n - i)
      .reverse();
  };
  render() {
    return (
      <div className="stars">
        {this.getArray(this.props.sizeOfStars).map((el) => {
          return (
            <i
              className="star"
              style={this.getStyleStar(el)}
              className="fas fa-star favori-btn"
              onClick={(e) => this.props.onChange(e.target.id)}
              id={el}
              key={el}
            />
          );
        })}
      </div>
    );
  }
}

export default stars;
