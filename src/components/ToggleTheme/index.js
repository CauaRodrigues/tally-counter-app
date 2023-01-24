import { useContext } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemeContext } from "../../context/ThemeContext.js";
import colors from "../../styles/colors.js";

const ToggleTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
	};

	return (
		<Pressable onPress={toggleTheme}>
			{theme === "dark" ? (
				<Ionicons
					name="ios-moon"
					size={26}
					color={
						theme === "dark" ? colors.darkMode.yellow : colors.lightMode.yellow
					}
				/>
			) : (
				<Ionicons
					name="ios-sunny"
					size={26}
					color={
						theme === "dark" ? colors.darkMode.yellow : colors.lightMode.yellow
					}
				/>
			)}
		</Pressable>
	);
};

export default ToggleTheme;
