import { Appearance } from "react-native"
export const isDark = () => Appearance.getColorScheme();

export const abbrev_name = (str1) => {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0].charAt(0) + "" + split_names[1].charAt(0));
    }
    return split_names[0].charAt(0);
};