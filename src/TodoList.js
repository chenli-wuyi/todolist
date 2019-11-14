import React, { Fragment, PureComponent } from "react";
import { Row, Col, Input, Button, Checkbox, message } from "antd";
import "./TodoList.scss";
class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    // this.textInput = React.createRef(); // 两种方式绑定ref ：回调或者createRef()
    this.textInput = null;
    this.state = {
      inputValue: "hello",
      toDoList: ["吃饭", "睡觉", "打豆豆"],
      yetList: ["吃饭1", "睡觉2", "打豆豆3"]
    };
  }
  // 改变值
  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  };
  // 点击添加
  handleClick = () => {
    // console.log(this.textInput.current.state.value);
    // console.log(this.textInput.state.value);
    let value = this.textInput.state.value;
    if (value) {
      // this.setState({
      //   toDoList: [...this.state.toDoList, value]
      // });
      this.setState(state => ({
        toDoList: [...state.toDoList, value],
        inputValue: ""
      }));
    } else {
      message.info("请输入值后提交");
    }
  };
  // 删除
  handleDel = (index, type = "yetList") => {
    const newList = this.state[type];
    newList.splice(index, 1);
    this.setState(() => ({
      [type]: [...newList]
    }));
  };
  // 选择
  handleCheckBox = index => {
    const newList = this.state.toDoList;
    let newValue = newList.splice(index, 1);
    this.setState(() => ({
      toDoList: [...newList],
      yetList: [...this.state.yetList, ...newValue]
    }));
  };
  render() {
    const { inputValue, toDoList, yetList } = this.state;
    return (
      <Fragment>
        <header>
          <Row className="header-flex">
            <Col span={4}>
              <Input
                value={inputValue}
                ref={e => (this.textInput = e)}
                placeholder="添加ToDo"
                allowClear={true}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
            </Col>
            <Col span={2}>
              <Button onClick={this.handleClick} type="primary">
                提交
              </Button>
            </Col>
          </Row>
        </header>
        <section>
          <div className="titile flex">
            <h2>正在进行</h2>
            <div className="num">{toDoList.length}</div>
          </div>
          <ul>
            {toDoList.map((item, index) => (
              <li key={index}>
                <Checkbox
                  onChange={() => this.handleCheckBox(index)}
                ></Checkbox>
                <p>{item}</p>
                <Button
                  size="small"
                  type="primary"
                  shape="circle"
                  icon="delete"
                  onClick={() => this.handleDel(index, "toDoList")}
                />
              </li>
            ))}
          </ul>
          <div className="titile flex">
            <h2>已经完成</h2>
            <div className="num">{yetList.length}</div>
          </div>
          <ul>
            {yetList.map((item, index) => (
              <li key={index} className="success">
                <Checkbox checked disabled></Checkbox>
                <p>{item}</p>
                <Button
                  size="small"
                  type="primary"
                  shape="circle"
                  icon="delete"
                  onClick={() => this.handleDel(index)}
                />
              </li>
            ))}
          </ul>
        </section>
      </Fragment>
    );
  }
}

export default TodoList;
