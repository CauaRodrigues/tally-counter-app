import { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import ToggleTheme from "../ToggleTheme";
import { styles } from "./styles";

const Header = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<View style={styles.header}>
			<Text style={styles.titleApp(theme)}>Tally Counter</Text>

			<ToggleTheme />
		</View>
	);
};

export default Header;
