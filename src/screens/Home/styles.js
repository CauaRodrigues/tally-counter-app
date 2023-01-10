import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
	container: {
		minHeight: "100%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	box: {
		width: "100%",
		height: 180,
		marginBottom: 60,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "column",
	},
	tallyCounter: {
		width: "80%",
		height: 110,
		justifyContent: "space-evenly",
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: colors.secondary,
		borderRadius: 60,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 8,
	},
	circleTally: {
		width: 110,
		height: 110,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.bgDark,
		borderRadius: 60,
	},
	count: {
		color: colors.primary,
		fontFamily: fonts.types.light,
		fontSize: fonts.sizes.large,
		textAlign: "center",
	},
});
