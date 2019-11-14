import React, { Fragment, PureComponent } from "react";
import { Progress } from 'antd';
import { Link } from "react-router-dom";
import "./style.scss";
class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <h1>欢迎来到demo</h1>
        <div className="container">
          <Link to="/todolist">去todolist</Link>
        </div>
        <Progress percent={100} />
      </Fragment>
    );
  }
}

export default Home;
