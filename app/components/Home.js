// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Search from './Search';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    console.log(this.props);
    return (
      <div className={styles.container} data-tid="container">
        <Search />
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Co0unter</Link>
      </div>
    );
  }
}
