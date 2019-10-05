import React, { Component, Fragment } from "react";
import styles from "./Controls.module.css";
import PropTypes from "prop-types";

class Controls extends Component {
  static propTypes = {
    handlePageNumber: PropTypes.func.isRequired
  };

  render() {
    const { handlePageNumber } = this.props;

    return (
      <Fragment>
        <section className={styles.controls}>
          <button
            type="button"
            className={styles.button}
            name="back"
            onClick={handlePageNumber}
          >
            Назад
          </button>
          <button
            type="button"
            className={styles.button}
            name="forward"
            onClick={handlePageNumber}
          >
            Вперед
          </button>
        </section>
      </Fragment>
    );
  }
}

export default Controls;
