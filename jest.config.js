module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  'coverageReporters': [
    'lcov',
    'text',
    'text-summary'],
    'collectCoverage': true,
    'collectCoverageFrom': [
      'src/**/*.{ts,tsx}',
      '!src/types/**',
      '!src/lib/views/**',
      '!**/node_modules/**',
      '!**/build/**',
      '!**/coverage/**'],
      'coverageThreshold': {
        'global': {
          'branches': 80,
          'functions': 80,
          'lines': 80,
          'statements': 80,
        },
      },
      testEnvironment: 'node',
      testRegex: '/__tests__/.*\\.(test|spec)?\\.(ts|tsx)$',
      transform: {'^.+\\.ts?$': 'ts-jest'},
    };
