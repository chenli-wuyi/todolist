import React, { Fragment, PureComponent } from "react";
import HandleInput from "./HandleInput";
import ComHeader from "../../components/Header";
import Todo from "./Todo";
import Yet from "./Yet";
import "./index.scss";
class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ["吃饭", "睡觉", "打豆豆"],
      yetList: ["吃饭1", "睡觉2", "打豆豆3"]
    };
  }
  // 点击添加
  handleClick = value => {
    this.setState(state => ({
      toDoList: [...state.toDoList, value]
    }));
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
    const { toDoList, yetList } = this.state;
    return (
      <Fragment>
          <ComHeader />
        <HandleInput onClick={this.handleClick} />
        <Todo
          toDoList={toDoList}
          handleDel={this.handleDel}
          handleCheckBox={this.handleCheckBox}
        />
        <Yet yetList={yetList} handleDel={this.handleDel} />
      </Fragment>
    );
  }
}

export default TodoList;
