import React from 'react'

const FlexView = ({
  flexHeight,
  row,
  column,
  flex,
  wrap,
  xEnd,
  xCenter,
  yEnd,
  yCenter,
  center,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  width,
  height,
  fitWidth,
  fitHeight,
  pdlr,
  scroll,
  xScroll,
  yScroll,
  bgColor,
  color,
  element,
  tag,
  style,
  children,
  ...props,
}) => {

  const FlexStyle = {
    overflowX: `${xScroll && 'scroll'}`,
    overflowY: `${(scroll || yScroll) && 'scroll'}`,
    display: 'flex',
    flex: `${(ten && 10) || (nine && 9) || (eight && 8) || (seven && 7) || (six && 6) || (five && 5) || (four && 4) || (three && 3) || (two && 2) || (one && 1) || flex || ''}`,
    width: `${width}`,
    height: `${flexHeight ? '100vh' : (height)}`,
    padding: ``,
    paddingLeft: `${pdlr && '8px'}`,
    paddingRight: `${pdlr && '8px'}`,
    flexFlow: `${column ? 'column' : 'row'} ${wrap ? 'wrap' : 'nowrap'}`,
    justifyContent: `${(column && yEnd && 'flex-end') || (column && yCenter && 'center') || (!column && xEnd && 'flex-end') || (!column && xCenter && 'center') || (center && 'center')}`,
    alignItems: `${(column && xEnd && 'flex-end') || (column && xCenter && 'center') || (!column && yEnd && 'flex-end') || (!column && yCenter && 'center') || (center && 'center')}`,
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    ...style
  }

  return React.createElement(element || tag || 'div', { style: FlexStyle, ...props }, children)

}

export default FlexView
