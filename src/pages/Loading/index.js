import React, { Component } from "react";
import { Spin } from "antd";
const style = {
  textAlign: "center"
};
class Loading extends Component {
  render() {
    return (
      <div style={style}>
        <Spin tip="Loading..."></Spin>
      </div>
    );
  }
}

export default Loading;
