import React from 'react';

import StyledWelcomeText from './styles';

export default function WelcomeText(): React.ReactElement {
  return (
    <StyledWelcomeText>
      Welcome! Please select how many nearby drivers you want to see.
    </StyledWelcomeText>
  );
}
