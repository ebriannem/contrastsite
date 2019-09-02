import React from "react";
import classNames from 'classnames';

const buttonStyle = {
  textAlign: "left",
  borderRadius: "10px",
  borderStyle: "solid",
  borderWidth: "2px",
  padding: "5px",
  margin: "5px",
};
export class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      mode: props.mode,
      em: props.em ||"1em"
    };
    this.buttonStyle = { ...buttonStyle, width: props.width };
  }

  onHoverStart = () => {
    this.setState({
      hovering: true
    });
  };

  onHoverEnd = () => {
    this.setState({
      hovering: false
    });
  };

  render() {
    return (
        <div
            className={classNames("ListItem", this.state.mode())}
            style={{
              ...this.buttonStyle,
            }}
            onMouseEnter={this.onHoverStart}
            onMouseLeave={this.onHoverEnd}
        >
          <h4 style={{fontSize: this.state.em, padding:0, margin:0}}>{this.state.title}</h4>
        </div>
    );
  }
}