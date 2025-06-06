/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',         // tells Jest to use ts-jest to handle TS files
  testEnvironment: 'node',   // sets test environment for Node.js
  testMatch: ['**/src/tests/**/*.test.ts'], // pattern for test files
};
