import React, { Fragment, PureComponent } from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom";
import { parseTime } from "../../utils";
import "./style.scss";
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: parseTime(new Date())
    };
  }
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState(() => ({
        time: parseTime(new Date())
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  render() {
    const { time } = this.state;
    return (
      <Fragment>
        <h1>欢迎您的来到</h1>
        <h3 className="ac">{time}</h3>
        <div className="container">
          <Link to="/todolist">去todolist</Link>
        </div>
        <Progress percent={100} />
      </Fragment>
    );
  }
}

export default Home;
