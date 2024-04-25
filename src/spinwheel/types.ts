import React from "react";

export type Color = string;
export type ColorArray = Color[];

// each item should have a unique name
export type SpinWheelItem = {
  name: string
}
export type SpinWheelProps = {
  itemColors?: ColorArray,
  borderColor?: Color,
  items?: SpinWheelItem[] | string[],
  spinActionName?: string,
  resetActionName?: string,
  size?: number,
  spinTime?: number,
  onResult?: (result:SpinWheelItem | string) => null,
  onFinishSpin?: (result:SpinWheelItem | string) => null,
  onReset?: () => null,
  spinContainerStyle?: React.CSSProperties,
  spinWheelStyle?: React.CSSProperties,
  spinButtonStyle?: React.CSSProperties,
  resetButtonStyle?: React.CSSProperties,
  spinItemStyle?: React.CSSProperties,
  spinFontStyle?: React.CSSProperties
}