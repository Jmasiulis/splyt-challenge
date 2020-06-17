import React from 'react';

import StyledErrorText from './styles';

export default function ErrorText(): React.ReactElement {
  return (
    <StyledErrorText>
      Error has occurred while fetching the data!
    </StyledErrorText>
  );
}
