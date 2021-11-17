module.exports = {
    env: {
        node: false,
        es2021: true
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        project: "./tsconfig.json"
    },
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "object-shorthand": "off",
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ],
        "prettier/prettier": 2,
        "no-param-reassign": [2, { props: false }]
    }
};
