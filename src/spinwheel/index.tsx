import "./style.css";
import { useState } from "react";
import { ColorArray, SpinWheelProps } from "./types";

function createColorGenerator(colorArray?: ColorArray) {
  const colors: ColorArray = colorArray?.length
    ? colorArray
    : ["#ff0f7b", "#ff930f", "#45caff", "red", "blue"];
  let currentIndex = 0;

  return function () {
    const color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    return color;
  };
}

const demoOptionData = [
  {
    name: "happy",
  },
  {
    name: "fortunate",
  },
  {
    name: "blessed",
  },
  {
    name: "gifted",
  },
  {
    name: "promising",
  },
  {
    name: "favored",
  },
  {
    name: "good",
  },
];

export const SpinWheel = ({
  itemColors = [],
  borderColor = "#666",
  items = demoOptionData,
  spinActionName = "spin",
  resetActionName = "reset",
  size = 400,
  spinTime = 3000,
  onResult,
  onFinishSpin,
  onReset,
  spinContainerStyle,
  spinWheelStyle,
  spinButtonStyle,
  resetButtonStyle,
  spinFontStyle,
  spinItemStyle,
}: SpinWheelProps) => {
  const getColor = createColorGenerator(itemColors);

  const [initState, setInitState] = useState(true);
  const [randIndex, setRandIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(true);
  const sidePercent =
    ((size - Math.tan((45 - 360 / items.length / 2) * (Math.PI / 180)) * size) /
      size) *
    100;
  return (
    <>
      <div
        className="spin-container"
        style={{
          width: size,
          height: size,
          boxShadow: `0 0 15px #333 inset, 0 0 15px ${borderColor}`,
          ...spinContainerStyle,
        }}
      >
        {initState ? (
          <button
            title="Spin"
            className="spin-button"
            style={{ ...spinButtonStyle }}
            onClick={() => {
              const randItemIndex = Math.floor(Math.random() * items.length);
              onResult?.(items[randItemIndex]);
              setIsFinished(false);
              setTimeout(() => {
                onFinishSpin?.(items[randItemIndex]);
                setIsFinished(true);
              }, spinTime);
              setInitState(false);
              setRandIndex(randItemIndex);
            }}
          >
            {spinActionName}
          </button>
        ) : (
          <button
            title="Reset"
            className="spin-button"
            style={{ ...resetButtonStyle }}
            onClick={() => {
              onReset?.();
              setInitState(true);
              setRandIndex(0);
            }}
            disabled={!isFinished}
          >
            {resetActionName}
          </button>
        )}
        <div
          className="spin-wheel"
          style={{
            border: `solid 5px ${borderColor}`,
            transform: initState
              ? "rotate(0deg)"
              : `rotate(-${720 + randIndex * (360 / items.length)}deg)`,
            transition: !initState
              ? `transform ${Math.floor(spinTime / 1000)}s ease`
              : "none",
            ...spinWheelStyle,
          }}
        >
          {items.map((item, index) => (
            <div
              key={typeof item === "string" ? item : item.name}
              className="option"
              style={{
                backgroundColor: getColor(),
                transform: `rotate(${(360 / items.length) * index + 45}deg)`,
                clipPath: `polygon(0 0, ${sidePercent}% 0, 100% 100%, 0 ${sidePercent}%)`,
                ...spinItemStyle,
              }}
            >
              <span
                style={{
                  ...spinFontStyle,
                }}
              >
                {typeof item === "string" ? item : item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
