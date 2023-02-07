/**
 * Startup screen
 */

import React, { FC } from "react";
import { View } from "react-native";

import { RootStackNavProps } from "navigation/@types";
import { Text } from "react-native-elements";
import { useThemeContext } from "themes";
import { getAppVersionName } from "utils/core";

import useStyles from "./startup.style";

interface IStartupProps extends RootStackNavProps<"Startup"> {}

const Startup: FC<IStartupProps> = () => {
    const { theme } = useThemeContext();
    const styles = useStyles(theme);

    const versionName = getAppVersionName();

    return (
        <View style={styles.rootContainer}>
            <View style={styles.subContainerWrapper}>
                <View style={styles.titleWrapper}>
                    <View>
                        <Text h1 style={styles.titleText}>
                            React Native Starter
                        </Text>
                    </View>
                </View>
                <View style={styles.versionNumberWrapper}>
                    <Text style={styles.versionText}>{versionName}</Text>
                </View>
            </View>
        </View>
    );
};

export default Startup;
