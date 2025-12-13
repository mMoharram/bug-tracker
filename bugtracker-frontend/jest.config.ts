import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: ".",
      outputName: "test-results.xml",
      classNameTemplate: "{classname} - {title}",
      titleTemplate: "{classname} - {title}",
      ancestorSeparator: " › ",
      usePathForSuiteName: true
    }]
  ],
};

export default createJestConfig(config);