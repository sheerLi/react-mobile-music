import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Button } from '@/components';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Button>确认</Button>
      </div>
    );
  }
}

const mapState = state => ({ student: state.student });
const mapDispatch = dispatch => ({ dispatch });

export default connect(mapState, mapDispatch)(Home);
