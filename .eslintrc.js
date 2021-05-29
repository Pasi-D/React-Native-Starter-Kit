module.exports = {
    root: true,
    extends: "@react-native-community",
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    rules: {
        quotes: [1, "double", { avoidEscape: true, allowTemplateLiterals: true }],
        "no-unused-vars": 1,
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { vars: "all", args: "after-used" },
        ],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal"],
                pathGroups: [
                    {
                        pattern: "react+(|-native)",
                        group: "external",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react", "react-native"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};
