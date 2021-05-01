import { useContext } from "react";
import { ThemeContext } from "react-native-elements";
import { ThemeProps } from "react-native-elements/dist/config/ThemeProvider";
import { Theme } from "../../@types/theme";

export const useThemeContext = () => useContext<ThemeProps<Theme>>(ThemeContext);

const theme: Theme = {
    Button: {
        raised: true,
        titleAppearances: {
            titleColors: {
                primary: "#FFF",
            },
            fontFamily: "Montserrat",
        },
    },
    colors: {
        darkBg: "#0F0F0F",
    },
};

export * from "../../@types/theme";

export default theme;
