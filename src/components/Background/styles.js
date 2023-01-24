import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
	background: function (colorScheme) {
		return {
			flex: 1,
			flexDirection: "column",
			justifyContent: "flex-start",
			backgroundColor:
				colorScheme === "dark" ? colors.darkMode.main : colors.lightMode.main,
		};
	},
	main: {
		flex: 1,
	},
});
