import { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { styles } from "./styles";

const Header = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<View style={styles.header}>
			<Text style={styles.titleApp(theme)}>Tally Counter</Text>
		</View>
	);
};

export default Header;
