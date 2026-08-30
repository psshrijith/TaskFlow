module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  transformIgnorePatterns: [
    "/node_modules/(?!(react-intl|@formatjs|intl-messageformat)/)",
  ],

  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/test/styleMock.js",
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
};
