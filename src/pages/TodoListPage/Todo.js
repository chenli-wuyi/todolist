import React, { Fragment, PureComponent } from "react";
import { Button, Checkbox } from "antd";
class Todo extends PureComponent {
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
    const { toDoList } = this.props;
    return (
      <Fragment>
        <section>
          <div className="titile flex">
            <h2>正在进行</h2>
            <div className="num">{toDoList.length}</div>
          </div>
          <ul>
            {toDoList.map((item, index) => (
              <li key={index}>
                <Checkbox
                  onChange={() => this.props.handleCheckBox(index)}
                ></Checkbox>
                <p>{item}</p>
                <Button
                  size="small"
                  type="primary"
                  shape="circle"
                  icon="delete"
                  onClick={() => this.props.handleDel(index, "toDoList")}
                />
              </li>
            ))}
          </ul>
        </section>
      </Fragment>
    );
  }
}

export default Todo;
