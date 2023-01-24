import { View, ActivityIndicator } from "react-native";
import colors from "../../styles/colors";
import { styles } from "./styles";

export const Loading = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator color={colors.common.light} size="large" />
		</View>
	);
};
