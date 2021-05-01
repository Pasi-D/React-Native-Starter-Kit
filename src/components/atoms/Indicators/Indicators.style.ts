import { StyleSheet } from "react-native";
import { Theme } from "themes";

const styles = (theme: Theme) =>
    StyleSheet.create({
        spinnerContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            color: theme.colors?.primary,
        },
    });

export default styles;
