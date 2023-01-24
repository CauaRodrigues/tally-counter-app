import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 70,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.backgroundColor,
	},
	titleApp: function (colorScheme) {
		return {
			textAlign: "center",
			color:
				colorScheme === "dark"
					? colors.darkMode.yellow
					: colors.lightMode.yellow,
			fontSize: fonts.sizes.title,
			fontFamily: fonts.types.bold,
		};
	},
});
