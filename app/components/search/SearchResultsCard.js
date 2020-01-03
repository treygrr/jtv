// @flow
import * as React from 'react';
import styles from './SearchResults.css';

type Props = {
  dataUrl: string,
  dataName: string
};

export default class SearchResultsCard extends React.Component<Props> {
  props: Props;

  render() {
    const { dataUrl, dataName } = this.props;

    return <img className={styles.posterImg} src={dataUrl} alt={dataName} />;
  }
}
