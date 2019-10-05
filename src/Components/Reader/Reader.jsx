import React, { Component } from "react";
import Controls from "./Controls";
import Counter from "./Counter";
import Publication from "./Publication";
import styles from "./Reader.module.css";
import PropTypes from "prop-types";

class Reader extends Component {
  static propTypes = {
    items: PropTypes.array,
    initialPageNumber: PropTypes.number.isRequired
  };

  state = {
    activePageNumber: this.props.initialPageNumber
  };

  handlePageNumber = e => {
    const buttonName = e.target.name;
    const { activePageNumber } = this.state;
    const { items } = this.props;

    if (
      (activePageNumber === 1 && buttonName === "back") ||
      (activePageNumber === items.length && buttonName === "forward")
    ) {
      return;
    }

    buttonName === "forward"
      ? this.setState(prevState => {
          return { activePageNumber: prevState.activePageNumber + 1 };
        })
      : this.setState(prevState => {
          return { activePageNumber: prevState.activePageNumber - 1 };
        });
  };

  render() {
    const { activePageNumber } = this.state;
    const { items } = this.props;
    const article = items[activePageNumber - 1];

    return (
      <div className={styles.reader}>
        <Controls handlePageNumber={this.handlePageNumber} />
        <Counter
          activePageNumber={activePageNumber}
          lastPageNumber={items.length}
        />
        <Publication publication={article} />
      </div>
    );
  }
}

export default Reader;
