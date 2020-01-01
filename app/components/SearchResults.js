// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

type Props = {};

export default class SearchResults extends Component<Props> {
  props: Props;

  getSearchResults = (searchTerm: string) => {
    console.log(searchTerm);
  };

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Co0unter</Link>
      </div>
    );
  }
}
