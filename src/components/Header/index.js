import { View, Text } from "react-native";
import { styles } from "./styles";

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.titleApp}>Tally Counter</Text>
		</View>
	);
};

export default Header;
