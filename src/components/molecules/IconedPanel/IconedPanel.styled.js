// @ts-nocheck
import styled from 'styled-components';
import t from 'prop-types';

import constants from 'styled/constants';

const defaultWidth = '15rem';
const defaultHeight = '15rem';
const defaultBordered = false;
const defaultCentered = false;
const defaultBackground = constants.MD_COLOR_LIGHT_BLUE;

const renderBorder = (bordered = defaultBordered) => (bordered ? `3px solid ${constants.MD_COLOR_BLUE_GRAY_900}` : 'none');
const renderBorderRadius = (bordered = defaultBordered) => (bordered ? '3px' : 'none');
const renderAlignItems = centered => (centered ? 'center' : 'none');
const renderJustifyContent = centered => (centered ? 'center' : 'none');

const StyledPanel = styled.div`
  width: ${({ width = defaultWidth }) => width};
  height: ${({ height = defaultHeight }) => height};
  border: ${({ bordered = defaultBordered }) => renderBorder(bordered)}}
  border-radius: ${({ bordered = defaultBordered }) => renderBorderRadius(bordered)}}

  display: flex;
  align-items: ${({ centered = defaultCentered }) => renderAlignItems(centered)}}
  justify-content: ${({ centered = defaultCentered }) => renderJustifyContent(centered)}}

  font-family: ${constants.FONT_FAMILY};
  
  background: ${({ background = defaultBackground }) => background};
`;

StyledPanel.propTypes = {
  width: t.string,
  height: t.string,
  bordered: t.bool,
  centered: t.bool,
};

export default StyledPanel;
