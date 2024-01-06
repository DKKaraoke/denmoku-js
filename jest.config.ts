import type { Config } from "jest";

const config: Config = {
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: "tests",
    testRegex: ".*\\.spec\\.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "../coverage",
    testEnvironment: "node",
    moduleNameMapper: {
        "^~/(.*)": "<rootDir>/../src/$1",
    },
    reporters: [
        "default",
    ],
    verbose: true,
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json",
        },
    },
    globalSetup: "<rootDir>/setup.ts",
};

export default config;