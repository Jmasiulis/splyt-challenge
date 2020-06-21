import React, { useEffect } from 'react';
import {
  connect, MapStateToProps, MapDispatchToProps, RootStateOrAny,
} from 'react-redux';
import GoogleApiWrapper from './components/DriversMap';
import Slider from '../../components/Slider';
import WelcomeText from './components/WelcomeText';
import ErrorText from './components/ErrorText';

import { getTaxiLocations } from '../../actions/TaxiMap';
import { DriversProps } from './types';

interface MappedStateProps {
  driverLocations: DriversProps[];
  isError: boolean;
}

interface DispatchProps {
  getLocations: (taxiCount: number | number[]) => void;
}

type AllProps = DispatchProps & MappedStateProps;

function TaxiMapContainer({
  isError, getLocations, driverLocations,
}: AllProps): React.ReactElement {
  useEffect(() => {
    if (driverLocations.length === 0) {
      getLocations(10);
    }
  });
  return (
    <>
      <WelcomeText />
      <Slider min={1} max={50} defaultValue={10} onValueChange={getLocations} />
      {isError && <ErrorText />}
      {driverLocations && <GoogleApiWrapper driverLocations={driverLocations} />}
    </>
  );
}

const mapStateToProps: MapStateToProps<
  MappedStateProps,
  {}
> = ({ taxiMapReducer }: RootStateOrAny) => ({
  driverLocations: taxiMapReducer.driverLocations,
  isError: taxiMapReducer.isError,
});

const mapDispatchToProps: MapDispatchToProps<
  DispatchProps,
  {}
> = (dispatch) => ({
  getLocations: async (taxiCount) => dispatch(await getTaxiLocations({ taxiCount })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaxiMapContainer) as
  React.ComponentType<{}>;
