/**
 * Root/Startup related navigational stack
 */

import React, { FC } from "react";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackNavParamList } from "navigation/@types";

const RootStack = createStackNavigator<RootStackNavParamList>();

export const RootStackNavigator: FC = () => {
    return (
        <RootStack.Navigator initialRouteName="Startup">
            <RootStack.Screen
                name="Startup"
                component={ReloadInstructions}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
};
