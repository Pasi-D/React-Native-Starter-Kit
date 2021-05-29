import "react-native-gesture-handler";
import React, { FC } from "react";

import AuthLayout from "navigation/layouts/AuthLayout";
import { ThemeProvider } from "react-native-elements";
import { RootSiblingParent } from "react-native-root-siblings";
import theme from "themes";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <RootSiblingParent>
                <AuthLayout />
            </RootSiblingParent>
        </ThemeProvider>
    );
};

export default App;
