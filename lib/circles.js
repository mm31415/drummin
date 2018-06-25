export const circleValues = (note) => {
  const radius = 14;
  const circleObj = { x: 0, y: 0, r: radius, fill: "lightgrey", stroke: "black", note: note, letter: "", textColor: "black" };
  switch(note.split(" ")[0]) {
    case "Ride":
      circleObj.y = 37.5;
      circleObj.letter = "K";
      break;
    case "Crash":
      circleObj.y = 37.5 + 35 * 1;
      circleObj.letter = "J";
      break;
    case "HiHat":
      circleObj.y = 37.5 + 35 * 2;
      circleObj.letter = "H";
      break;
    case "Snare":
      circleObj.y = 37.5 + 35 * 3;
      circleObj.letter = "F";
      break;
    case "Tom1":
      circleObj.y = 37.5 + 35 * 4;
      circleObj.letter = "D";
      break;
    case "Tom2":
      circleObj.y = 37.5 + 35 * 5;
      circleObj.letter = "S";
      break;
    case "Tom3":
      circleObj.y = 37.5 + 35 * 6;
      circleObj.letter = "A";
      break;
    case "Bass":
      circleObj.y = 37.5 + 35 * 7;
      circleObj.letter = "Spc";
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
    case "Eighth1&":
      circleObj.x = -55 - 25;
      break;
    case "Eighth2&":
      circleObj.x = -55 - 25 * 3;
      break;
    case "Eighth3&":
      circleObj.x = -55 - 25 * 5;
      break;
    case "Eighth4&":
      circleObj.x = -55 - 25 * 7;
      break;

  }

  return circleObj;
};
