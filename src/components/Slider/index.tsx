import React, { useState } from 'react';
import MaterialSlider from '@material-ui/core/Slider';

import StyledWrapper from './styles';

interface SliderProps {
  min: number;
  max: number;
  defaultValue: number;
  onValueChange: (value: number | number[]) => void;
}

export default function Slider({
  min, max, defaultValue, onValueChange,
}: SliderProps): React.ReactElement {
  const [value, setValue] = useState(defaultValue);

  return (
    <StyledWrapper>
      <MaterialSlider
        value={value}
        defaultValue={defaultValue}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={min}
        max={max}
        valueLabelDisplay="auto"
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        onChange={(e, newValue): void => setValue(newValue)}
        onChangeCommitted={(e, newValue): void => onValueChange(newValue)}
      />
      <span>
        Selected number of drivers:
        {' '}
        {value}
      </span>
    </StyledWrapper>
  );
}
