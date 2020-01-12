// @flow
import * as React from 'react';
import styles from './SearchResultsCard.css';

type Props = {
  dataUrl: string,
  dataName: string
};

type State = { span: number };

type ReactObjRef<ElementType: React.ElementType> = {
  current: null | React.ElementRef<ElementType>
};

export default class SearchResultsCard extends React.Component<Props, State> {
  reference: ReactObjRef<'img'>;

  constructor(props: Props) {
    super(props);
    this.reference = React.createRef();
    this.state = { span: 0 };
  }

  componentDidMount() {
    // $FlowFixMe
    this.reference.current.addEventListener('load', this.setSpans);
  }

  setSpans = async () => {
    // $FlowFixMe
    const height = this.reference.current.clientHeight;

    const spans = height / 10 + 1;

    await this.setState(prevState => ({
      ...prevState,
      span: spans
    }));

    // console.log(this.state.span);
  };

  render() {
    const { dataUrl, dataName } = this.props;
    const { span } = this.state;

    console.log(span);
    return (
      <div
        className={styles.posterItemWrapper}
        style={{
          gridRowEnd: `span ${span}`,
          border: '4px solid red'
        }}
      >
        <img
          ref={this.reference}
          className={styles.posterImg}
          src={dataUrl}
          alt={dataName}
        />
      </div>
    );
  }
}
