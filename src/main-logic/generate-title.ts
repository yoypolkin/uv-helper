export function generateTitle(uvIndex: number) {
  const uvIndexIs = 'Current UV index: ';
  let selectedState;

  const states = {
    noNeed: {
      index: uvIndex < 2,
      message: 'No need for sun protection',
    },
    recommended: {
      index: uvIndex >= 2 && uvIndex <= 5,
      message: 'It is highly recommended to use sunscreen',
    },
    urgent: {
      index: uvIndex > 5,
      message:
        'Sunscreen now is a must! Wear protective clothing, and seek shade!',
    },
  };

  if (states.noNeed.index) {
    selectedState = states.noNeed;
  } else if (states.recommended.index) {
    selectedState = states.recommended;
  } else {
    selectedState = states.urgent;
  }

  return `${uvIndexIs}${uvIndex}. ${selectedState.message}`;
}
