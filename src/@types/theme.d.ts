import { FullTheme, ButtonProps } from "react-native-elements";
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
