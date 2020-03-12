module.exports = {
  preset: 'ts-jest',
  globals: {
    __DEV__: true,
    __TEST__: true,
    __VERSION__: require('./package.json').version,
    __BROWSER__: false,
    __BUNDLER__: true,
    __RUNTIME_COMPILE__: true,
    __GLOBAL__: false,
    __NODE_JS__: true,
    __FEATURE_OPTIONS__: true,
    __FEATURE_SUSPENSE__: true
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text', 'json-summary'],
  collectCoverageFrom: [
    'packages/*/src/**/*.ts',
    '!packages/runtime-test/src/utils/**',
    '!packages/template-explorer/**',
    '!packages/size-check/**',
    '!packages/shared/**'
  ],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@vue/shared(.*?)$': '<rootDir>/packages/shared/src'
  },
  rootDir: __dirname,
  testMatch: ['<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)'],
  testPathIgnorePatterns: process.env.SKIP_E2E
    ? // ignore example tests on netlify builds since they don't contribute
      // to coverage and can cause netlify builds to fail
      ['/node_modules/', '/packages/shared/__tests__', '/examples/__tests__']
    : ['/node_modules/', '/packages/shared/__tests__'],
  setupFiles: ['<rootDir>/tests/jest.setup.ts'],
  silent: true
}
