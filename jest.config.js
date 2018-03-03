module.exports = {
    resetMocks: true,
    resetModules: true,
    collectCoverage: true,
    setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
    collectCoverageFrom: [
      'packages/**/*.js',
      '!packages/**/dist/**',
      '!**/node_modules/**',
      '!**/*.story.js'
    ],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    },
    coverageReporters: [
      'lcov',
      'html'
    ],
    coveragePathIgnorePatterns: [
      '<rootDir>node_modules/',
      '<rootDir>coverage/'
    ],
    testMatch: [
      '**/?(*.)(spec).js?(x)'
    ],
    testPathIgnorePatterns: [
      '<rootDir>node_modules/'
    ]
  }