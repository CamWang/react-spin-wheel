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
  onResult?: (result?:SpinWheelItem | string) => void,
  onFinishSpin?: (result?:SpinWheelItem | string) => void,
  onReset?: () => void,
  spinContainerStyle?: React.CSSProperties,
  spinWheelStyle?: React.CSSProperties,
  spinButtonStyle?: React.CSSProperties,
  resetButtonStyle?: React.CSSProperties,
  spinItemStyle?: React.CSSProperties,
  spinFontStyle?: React.CSSProperties
}