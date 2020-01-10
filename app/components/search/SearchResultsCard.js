// @flow
import * as React from 'react';
import styles from './SearchResults.css';

type Props = {
  dataUrl: string,
  dataName: string
};

type ReactObjRef<ElementType: React.ElementType> = {
  current: null | React.ElementRef<ElementType>
};

export default class SearchResultsCard extends React.Component<Props> {
  reference: ReactObjRef<'img'>;

  constructor(props: Props) {
    super(props);
    this.reference = React.createRef();
  }

  componentDidMount() {
    // $FlowFixMe
    this.reference.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // $FlowFixMe
    console.log(this.reference.current.clientHeight);
  };

  render() {
    const { dataUrl, dataName } = this.props;
    return (
      <img
        ref={this.reference}
        className={styles.posterImg}
        src={dataUrl}
        alt={dataName}
      />
    );
  }
}
