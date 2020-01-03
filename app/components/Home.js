// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import Search from './search/Search';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    console.log(this.props);
    return (
      <div className={styles.container} data-tid="container">
        <Search />
      </div>
    );
  }
}
