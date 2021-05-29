/**
 * Root/Startup related navigational stack
 */

import React, { FC } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackNavParamList } from "navigation/@types";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

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
