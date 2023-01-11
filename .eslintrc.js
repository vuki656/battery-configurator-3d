module.exports = {
    extends: [
        require.resolve("@rimac-technology/style-guide/eslint/core"),
        require.resolve("@rimac-technology/style-guide/eslint/next"),
        require.resolve("@rimac-technology/style-guide/eslint/react"),
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    ignorePatterns: [
        "next.config.js",
        ".eslintrc.js",
    ],
    rules: {
        'react/no-unknown-property': 'off'
    }
}
