module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/apps/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
      global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100
      }
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  roots: ['<rootDir>/packages', '<rootDir>/apps'],
};