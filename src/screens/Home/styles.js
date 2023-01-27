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
		justifyContent: "space-between",
		alignItems: "center",
		zIndex: 0,
		flexDirection: "column",
	},
	tallyCounter: function (colorScheme) {
		return {
			width: 300,
			height: 100,
			marginBottom: 30,
			justifyContent: "space-evenly",
			alignItems: "center",
			flexDirection: "row",
			backgroundColor:
				colorScheme === "dark"
					? colors.darkMode.darkness
					: colors.lightMode.lightness,
			borderRadius: 60,
			shadowColor: colors.common.black,
			shadowOffset: {
				width: 0,
				height: 0,
			},
			shadowOpacity: 0.27,
			shadowRadius: 4.65,
			elevation: 8,
		};
	},
	circleTally: function (outlineColor, colorScheme) {
		return {
			width: 100,
			height: 100,
			zIndex: 1000,
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "row",
			backgroundColor:
				colorScheme === "dark" ? colors.darkMode.main : colors.lightMode.main,
			borderRadius: 60,
			borderWidth: outlineColor ? 2 : 0,
			borderColor: outlineColor,
		};
	},
	contentCircleTally: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	count: function (colorText) {
		return {
			color: colorText,
			fontFamily: fonts.types.light,
			fontSize: fonts.sizes.large,
		};
	},
	target: function (hasTarget) {
		return {
			display: hasTarget ? "flex" : "none",
			color: colors.common.gray,
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
	modal: function (colorScheme) {
		return {
			width: "80%",
			height: 130,
			borderRadius: 12,
			padding: 16,
			position: "relative",
			backgroundColor:
				colorScheme === "dark"
					? colors.darkMode.modalDark
					: colors.lightMode.main,
			justifyContent: "space-between",
		};
	},
	titleModal: function (colorScheme) {
		return {
			fontSize: fonts.sizes.subtitle,
			color:
				colorScheme === "dark"
					? colors.darkMode.yellow
					: colors.lightMode.secondary,
			fontFamily: fonts.types.regular,
		};
	},
	inputTarget: function (colorScheme) {
		return {
			color: colorScheme === "dark" ? colors.common.light : colors.common.black,
			textAlignVertical: "top",
			marginBottom: 5,
			borderBottomWidth: 1,
			borderBottomColor:
				colorScheme === "dark"
					? colors.darkMode.yellow
					: colors.lightMode.secondary,
		};
	},
	btnTextTarget: function (hasTarget, colorScheme) {
		return {
			fontSize: fonts.sizes.text,
			fontFamily: fonts.types.regular,
			color: hasTarget
				? colors.common.light
				: colorScheme === "dark"
				? colors.darkMode.yellow
				: colors.lightMode.secondary,
			textDecorationLine: "underline",
			alignSelf: "flex-end",
			backgroundColor: hasTarget
				? colors.common.blue
				: colorScheme === "dark"
				? colors.darkMode.darkness
				: colors.lightMode.lightness,
			padding: 12,
			marginTop: 80,
			borderRadius: 30,
		};
	},
});
