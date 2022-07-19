/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['example', 'wrapper.tsx'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  }
}
