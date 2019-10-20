import React, { Component } from 'react';
import styles from './App.module.css';
import Reader from '../Reader/Reader';
import publications from '../Reader/publications.json';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Reader
          items={publications}
          initialPageNumber={1}
          isPrevButtonActive={true}
          isNextButtonActive={true}
        />
      </div>
    );
  }
}

export default App;
