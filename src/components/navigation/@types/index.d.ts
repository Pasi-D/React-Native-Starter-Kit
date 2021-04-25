/**
 * Navigation related types
 */

import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackNavParamList = {
    Startup: undefined;
};

export type RootStackNavProps<T extends keyof RootStackNavParamList> = {
    navigation: StackNavigationProp<RootStackNavParamList, T>;
};
