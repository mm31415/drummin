export const circleValues = (note) => {
  const radius = 14;
  const circleObj = { x: 0, y: 0, r: radius, fill: "lightgrey", stroke: "black" };
  switch(note.split(" ")[0]) {
    case "Ride":
      circleObj.y = 37.5;
      break;
    case "Crash":
      circleObj.y = 37.5 + 35 * 1;
      break;
    case "HiHat":
      circleObj.y = 37.5 + 35 * 2;
      break;
    case "Snare":
      circleObj.y = 37.5 + 35 * 3;
      break;
    case "Tom1":
      circleObj.y = 37.5 + 35 * 4;
      break;
    case "Tom2":
      circleObj.y = 37.5 + 35 * 5;
      break;
    case "Tom3":
      circleObj.y = 37.5 + 35 * 6;
      break;
    case "Bass":
      circleObj.y = 37.5 + 35 * 7;
      break;
  }

  switch(note.split(" ")[1]) {
    case "Quarter1":
      circleObj.x = -55;
      break;
    case "Quarter2":
      circleObj.x = -55 - 50;
      break;
    case "Quarter3":
      circleObj.x = -55 - 50 * 2;
      break;
    case "Quarter4":
      circleObj.x = -55 - 50 * 3;
      break;
  }

  return circleObj;
};
