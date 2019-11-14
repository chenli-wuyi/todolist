import React, { Fragment, PureComponent } from "react";
import { Row, Col, Input, Button, message } from "antd";
class HandleInput extends PureComponent {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.state = {
      inputValue: ""
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
    let value = this.textInput.state.value;
    if (value) {
      this.props.onClick(value);
      // 添加后清空
      this.setState(() => ({
        inputValue: ""
      }));
    } else {
      message.destroy();
      message.info("请输入值后提交");
    }
  };
  render() {
    const { inputValue } = this.state;
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
      </Fragment>
    );
  }
}

export default HandleInput;
