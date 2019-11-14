import React, { Fragment, PureComponent } from "react";
import { Button, Checkbox } from "antd";
class Yet extends PureComponent {
  render() {
    const { yetList } = this.props;
    return (
      <Fragment>
        <section>
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
                  onClick={() => this.props.handleDel(index)}
                />
              </li>
            ))}
          </ul>
        </section>
      </Fragment>
    );
  }
}

export default Yet;
