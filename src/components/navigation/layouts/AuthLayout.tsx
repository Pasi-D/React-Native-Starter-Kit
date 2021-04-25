import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "navigation/routes";

interface IAuthLayoutProps {}

const AuthLayout: FC<IAuthLayoutProps> = () => {
    return (
        <NavigationContainer>
            <RootStackNavigator />
        </NavigationContainer>
    );
};

export default AuthLayout;
