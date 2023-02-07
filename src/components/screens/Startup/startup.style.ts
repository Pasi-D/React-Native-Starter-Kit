import { StyleSheet } from "react-native";

import { normalize } from "react-native-elements";
import { ms } from "react-native-size-matters";
import { Theme } from "themes";

const styles = (theme: Theme) =>
    StyleSheet.create({
        subContainerWrapper: {
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
        },
        rootContainer: {
            flex: 1,
            backgroundColor: theme.colors?.startupBGPrimary,
        },
        titleText: {
            color: theme.Button?.titleAppearances?.titleColors?.primary,
            textAlign: "center",
        },
        titleWrapper: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        versionNumberWrapper: {
            alignSelf: "flex-end",
            paddingBottom: ms(5),
            paddingRight: ms(5),
        },
        versionText: {
            color: theme.Button?.titleAppearances?.titleColors?.primary,
            fontSize: normalize(12),
        },
    });

export default styles;
