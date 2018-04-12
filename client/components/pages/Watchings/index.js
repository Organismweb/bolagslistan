// @flow
import * as React from 'react';
import BolagsListan from '../../organisms/BolagsListan';

const Watchings = () => (
  <React.Fragment>
    <BolagsListan renderOnlyWatched="true" />
  </React.Fragment>
);

export default Watchings;
