function scuberGreetingForFeet(numFeet) {
  if (numFeet <= 400) {
    return 'This one is on me!';
  } else if (numFeet > 400 && numFeet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (numFeet > 2000 && numFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
