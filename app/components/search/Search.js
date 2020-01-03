import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import Results from './SearchResults';
import styles from './Search.css';
import * as SearchActions from '../../actions/search';

type Props = {
  setSearchParam: (payload: string) => void,
  setReturnedSearchData: (payload: string) => void,
  data: []
};

class SearchResults extends Component<Props> {
  props: Props;

  constructor() {
    super();
    this.typingTimeout = 0;
  }

  getSearchResults = async (searchTerm: string) => {
    const request = await axios.get(
      `https://www.animefreak.tv/search/topSearch?q=${searchTerm}`
    );

    return request.data;
  };

  handleSearchChange = (
    event: SyntheticEvent<HTMLButtonElement>,
    setSearchParam: {},
    setReturnedSearchData: {}
  ) => {
    const persistedEvent = event.currentTarget.value;

    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }

    this.typingTimeout = setTimeout(
      async () => {
        setSearchParam(persistedEvent);
        const data = this.getSearchResults(
          persistedEvent,
          setReturnedSearchData
        );
        await data
          .then(res => {
            setReturnedSearchData(res.data);
            return res;
          })
          .catch(err => {
            console.log(err);
          });
      },
      1000,
      persistedEvent
    );
  };

  render() {
    // https://www.animefreak.tv/search/topSearch?q=dr.%20strange
    const { setSearchParam, setReturnedSearchData, data } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <form onSubmit={this.getSearchResults}>
          <label htmlFor="searchAnime">
            <input
              type="text"
              id="searhAnime"
              onChange={e =>
                this.handleSearchChange(
                  e,
                  setSearchParam,
                  setReturnedSearchData
                )
              }
              placeholder="...search"
            />
          </label>
        </form>
        <Results list={data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.searchName,
    data: state.searchData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
