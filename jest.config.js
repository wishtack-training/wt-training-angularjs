module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    setupFilesAfterEnv: [
        './jest-setup.ts'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
}
