// @flow
import React, { Component } from 'react';
import styles from './SearchResults.css';
import SearchResultsCard from './SearchResultsCard';

type Props = {
  list: []
};

export default class SearchResults extends Component<Props> {
  props: Props;

  getSearchResults = (searchTerm: string) => {
    console.log(searchTerm);
  };

  stripChars = (string: string, animeId: number) => {
    let cleaned = string.replace(/[^a-zA-Z0-9 -]/g, '');
    cleaned = cleaned.replace(/\s/g, '-').toLowerCase();
    cleaned = cleaned.replace(/(-*)-/gi, '-');
    const style = `https://www.animefreak.tv/meta/anime/${animeId}/${cleaned}.jpg`;
    return style;
  };

  showData = () => {
    const { list } = this.props;
    if (list.length !== 0) {
      return list.map((data, index) => (
        <div key={data.anime_id} className={styles.posterItemWrapper}>
          <SearchResultsCard
            dataUrl={this.stripChars(data.name, data.anime_id)}
            dataName={data.name}
          />
          {data.anime_id}
          {index}
        </div>
      ));
    }
  };

  render() {
    console.log(this.props);
    return <div className={styles.container}>{this.showData()}</div>;
  }
}
