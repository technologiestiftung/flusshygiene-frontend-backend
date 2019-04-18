export enum ApiURLS {
  getBathingspots = 'bathingspots',
}

export const WaterqualityStateText = {
  1: 'Zum Baden geeignet',
  2: 'Zum Baden geeignet',
  11: 'Zum Baden geeignet',
  12: 'Zum Baden geeignet',
  3: 'Vom Baden wird abgeraten',
  4: 'Vom Baden wird abgeraten',
  13: 'Vom Baden wird abgeraten',
  14: 'Vom Baden wird abgeraten',
  10: 'Vom Baden wird abgeraten',
  9: 'Keine Angabe',
  5: 'Badeverbot',
  6: 'Badeverbot',
  15: 'Badeverbot',
  16: 'Badeverbot',
};

export enum RouteNames {
  bathingspot = 'badestellen',
  index = '',
  info = 'info',
  questionnaire = 'standortbewertung',
}

export enum RouteParams {
  bathingspotId = ':spotId([0-9]+)',
  questionId = ':qId([0-9]+)',
}
