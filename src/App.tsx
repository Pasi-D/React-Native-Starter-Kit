import "react-native-gesture-handler";
import React, { FC } from "react";
import { RootSiblingParent } from "react-native-root-siblings";

import AuthLayout from "navigation/layouts/AuthLayout";

const App: FC = () => {
    return (
        <RootSiblingParent>
            <AuthLayout />
        </RootSiblingParent>
    );
};

export default App;
