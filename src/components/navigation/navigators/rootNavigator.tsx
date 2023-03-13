/**
 * Root/Startup related navigational stack
 */

import React, { FC } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackNavParamList } from "navigation/@types";
import { StartupScreen } from "screens";

const RootStack = createStackNavigator<RootStackNavParamList>();

export const RootStackNavigator: FC = () => {
    return (
        <RootStack.Navigator initialRouteName="Startup">
            <RootStack.Screen
                name="Startup"
                component={StartupScreen}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
};
