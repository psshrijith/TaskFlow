module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  transformIgnorePatterns: [
    "/node_modules/(?!(react-intl|@formatjs|intl-messageformat)/)",
  ],

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
};