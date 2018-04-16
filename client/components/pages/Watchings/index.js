// @flow
import * as React from 'react';
import BolagsListan from '../../organisms/BolagsListan';

const Watchings = () => (
  <React.Fragment>
    <BolagsListan renderOnlyWatched />
  </React.Fragment>
);

export default Watchings;
