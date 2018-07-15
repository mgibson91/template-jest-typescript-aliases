module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "test/.*spec.ts$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/$1",
    "^dir-1/(.*)$": "<rootDir>/dir-a/dir-b-1/$1",
    "^dir-2/(.*)$": "<rootDir>/dir-a/dir-b-2/$1",
    "^lib/(.*)$": "<rootDir>/dir-a/lib/$1"
  }
};
