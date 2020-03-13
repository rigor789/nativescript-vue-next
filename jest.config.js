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
  collectCoverageFrom: ['packages/*/src/**/*.ts', '!packages/shared/**'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@nativescript-vue/(.*?)$': '<rootDir>/packages/$1/src',
    '^@vue/shared(.*?)$': '<rootDir>/packages/shared/src',
    './file-system-access': '<rootDir>/tests/ns-mocks/file-system-access',
    './mainthread-helper': '<rootDir>/tests/ns-mocks/mainthread-helper',
    './layout-helper':
      '@nativescript/core/utils/layout-helper/layout-helper-common'
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
