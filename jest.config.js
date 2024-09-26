module.exports = {
    preset: 'ts-jest',  
    testEnvironment: 'jsdom',  
    transform: {
      '^.+\\.tsx?$': 'ts-jest', 
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', 
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], 
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json', 
        isolatedModules: true,  
      },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],  
  };
  