module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },

  moduleFileExtensions: ["ts", "tsx", "js"],

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
};