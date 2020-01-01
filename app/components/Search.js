import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Search.css';
import * as SearchActions from '../actions/search';

type Props = {
  setSearchParam: (payload: string) => void
};

class SearchResults extends Component<Props> {
  props: Props;

  getSearchResults = (searchTerm: string) => {
    console.log(searchTerm);
  };

  handleSearchChange = (
    event: SyntheticEvent<HTMLButtonElement>,
    setSearchParam: {}
  ) => {
    console.log(this.props);
    setSearchParam(event.currentTarget.value);
  };

  render() {
    const { setSearchParam } = this.props;
    console.log(this.props);
    return (
      <div className={styles.container} data-tid="container">
        <form onSubmit={this.getSearchResults}>
          <label htmlFor="searchAnime">
            <input
              type="text"
              id="searhAnime"
              onChange={e => this.handleSearchChange(e, setSearchParam)}
              placeholder="...search"
            />
          </label>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
