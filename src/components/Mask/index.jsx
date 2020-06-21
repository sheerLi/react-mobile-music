import React, { Component } from 'react';

import styles from './index.less';

class Mask extends Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
    this.scrollTop = window.pageYOffset;
  }

  componentDidMount() {
    const { setBodyStyle } = this.props;

    if (setBodyStyle) {
      document.body.setAttribute(
        'style',
        `position:fixed; top: ${-this.scrollTop}px;left:0;right:0;`
      );
    }
  }

  componentWillUnmount() {
    const { setBodyStyle } = this.props;

    if (setBodyStyle) {
      document.body.setAttribute('style', '');
      window.scrollTo(0, this.scrollTop);
    }
  }

  handleClick = e => {
    const { onClick } = this.props;

    if (e.target !== this.node.current || typeof onClick !== 'function') {
      return;
    }

    onClick();
  };

  render() {
    const { children } = this.props;

    return (
      <div ref={this.node} className={styles.container} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

Mask.defaultProps = {
  setBodyStyle: true,
};

export default Mask;
