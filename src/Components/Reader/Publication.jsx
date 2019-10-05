import React, { Component, Fragment } from "react";
import styles from "./Publication.module.css";
import PropTypes from "prop-types";

class Publication extends Component {
  static propTypes = {
    publication: PropTypes.object
  };

  render() {
    const { title } = this.props.publication;
    const { text } = this.props.publication;

    return (
      <Fragment>
        <article className={styles.publication}>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      </Fragment>
    );
  }
}

export default Publication;
