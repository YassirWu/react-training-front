import styled from 'styled-components';

import constants from 'styled/constants';

const defaultWidth = '15rem';
const defaultHeight = '15rem';

const StyledPanel = styled.div`
  width: ${({ width = defaultWidth }) => width};
  height: ${({ height = defaultHeight }) => height};

  font-family: ${constants.FONT_FAMILY};

  background-color: ${constants.MD_COLOR_LIGHT_BLUE};
`;

export default StyledPanel;
