import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
	container: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		width: "100%",
		height: 180,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "column",
	},
	tallyCounter: {
		width: "85%",
		height: 120,
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
		width: 120,
		height: 120,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: colors.bgDark,
		borderRadius: 60,
	},
	contentCircleTally: {
		alignItems: "flex-end",
		justifyContent: "center",
		flexDirection: "row",
	},
	count: {
		color: colors.primary,
		fontFamily: fonts.types.light,
		fontSize: fonts.sizes.large,
	},
	target: function () {
		return {
			display: "none",
			color: colors.gray,
			marginBottom: 10,
			fontFamily: fonts.types.regular,
			fontSize: fonts.sizes.subtitle,
		};
	},

	centeredModal: {
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modal: {
		width: "80%",
		padding: 12,
		position: "relative",
		backgroundColor: colors.bgDarkBox,
	},
});
