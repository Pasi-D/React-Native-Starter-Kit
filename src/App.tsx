import "react-native-gesture-handler";
import React, { FC } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { ThemeProvider } from "react-native-elements";

import AuthLayout from "navigation/layouts/AuthLayout";
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
