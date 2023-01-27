import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 70,
		paddingHorizontal: 16,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.backgroundColor,
	},
	titleApp: function (colorScheme) {
		return {
			flex: 1,
			textAlign: "center",
			color:
				colorScheme === "dark"
					? colors.darkMode.yellow
					: colors.lightMode.secondary,
			fontSize: fonts.sizes.title,
			fontFamily: fonts.types.bold,
		};
	},
});
