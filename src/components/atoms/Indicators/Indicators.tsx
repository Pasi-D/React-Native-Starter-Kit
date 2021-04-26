/**
 * Loading spinner component
 */

import React, { FC } from "react";
import { ActivityIndicator, View } from "react-native";
import useStyles from "./Indicators.style";

import { useThemeContext } from "assets/theme";

interface IProgressIndicatorProps {}

const ProgressIndicator: FC<IProgressIndicatorProps> = () => {
    const { theme } = useThemeContext();
    const styles = useStyles(theme);

    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator color="#FFFFFF" size="large" />
        </View>
    );
};

export default ProgressIndicator;
