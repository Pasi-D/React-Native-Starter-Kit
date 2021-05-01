module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                alias: {
                    navigation: "./src/components/navigation",
                    themes: "./src/assets/theme",
                },
                extensions: [
                    ".ios.js",
                    ".android.js",
                    ".js",
                    ".jsx",
                    ".ios.ts",
                    ".android.ts",
                    ".ts",
                    ".tsx",
                    ".json",
                ],
            },
        ],
    ],
};
