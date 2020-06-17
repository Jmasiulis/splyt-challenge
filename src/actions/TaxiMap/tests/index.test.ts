import {
  getTaxiLocations,
} from '..';

describe('taxiMap', () => {
  it('should create action promise correctly', () => {
    const createdAction = getTaxiLocations({
      taxiCount: 10,
    });

    expect(createdAction).toMatchInlineSnapshot('Promise {}');
  });
});
