import { useContext } from "react";
import { FullTheme, ButtonProps, ThemeContext } from "react-native-elements";
import { ThemeProps } from "react-native-elements/dist/config/ThemeProvider";
import { Colors } from "react-native-elements/dist/config/colors";
import { RecursivePartial } from "utils/core";

interface IExtendedThemeButtonProps extends Partial<ButtonProps> {
    titleAppearances?: {
        titleColors?: {
            primary: string;
        };
        fontFamily?: string;
    };
}

interface IExtendedThemeColorProps extends RecursivePartial<Colors> {
    readonly darkBg: string;
}

export interface Theme extends Partial<FullTheme> {
    Button?: IExtendedThemeButtonProps;
    colors?: IExtendedThemeColorProps;
}

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

export default theme;
