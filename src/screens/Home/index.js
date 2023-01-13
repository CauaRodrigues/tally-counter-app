import React, { useEffect, useState } from "react";
import {
	Pressable,
	Text,
	View,
	Modal,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import colors from "../../styles/colors";

const Home = () => {
	const [count, setCount] = useState(0);
	const [target, setTarget] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const [textColorCount, setTextColorCount] = useState(colors.primary);
	const [borderColorCircle, setBorderColorCircle] = useState(undefined);

	const handlerCount = (change) => {
		if (change === "reset") {
			setCount(0);
		} else {
			change === "less"
				? setCount(count ? count - 1 : count)
				: setCount(count + 1);
		}
	};

	useEffect(() => {
		if (target) {
			if (count > target) {
				setTextColorCount(colors.red);
				setBorderColorCircle(colors.red);
			} else if (count == target) {
				setTextColorCount(colors.blue);
				setBorderColorCircle(colors.blue);
			} else {
				setTextColorCount(colors.primary);
				setBorderColorCircle(undefined);
			}
		} else {
			setTextColorCount(colors.primary);
			setBorderColorCircle(undefined);
		}
	}, [count, target]);

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View style={styles.tallyCounter}>
					<Pressable onPress={() => handlerCount("less")}>
						<AntDesign name="minus" size={40} color={colors.primary} />
					</Pressable>

					<Pressable
						style={styles.circleTally(borderColorCircle)}
						onPress={() => handlerCount("plus")}
					>
						<View style={styles.contentCircleTally}>
							<Text style={styles.count(textColorCount)}>{count}</Text>
							<Text style={styles.target(target)}>/{target}</Text>
						</View>
					</Pressable>

					<Pressable onPress={() => handlerCount("plus")}>
						<AntDesign name="plus" size={40} color={colors.primary} />
					</Pressable>
				</View>

				{count ? (
					<Pressable onPress={() => handlerCount("reset")}>
						<MaterialIcons name="replay" size={40} color={colors.primary} />
					</Pressable>
				) : null}
			</View>

			<Modal animationType="fade" transparent={true} visible={openModal}>
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
						setOpenModal(!openModal);
					}}
				>
					<View style={styles.centeredModal}>
						<View style={styles.modal}>
							<Text style={styles.titleModal}>Set Target</Text>
							<TextInput
								autoFocus={true}
								cursorColor={colors.primary}
								keyboardType="numeric"
								style={styles.inputTarget}
								value={target}
								defaultValue={target}
								onChangeText={setTarget}
								placeholder="Enter value"
								placeholderTextColor={colors.gray}
								onSubmitEditing={() => {
									Keyboard.dismiss();
									setOpenModal(!openModal);
								}}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<Pressable
				onPress={() => {
					target ? setTarget(0) : setOpenModal(!openModal);
				}}
			>
				<Text style={styles.btnTextTarget(target)}>Target</Text>
			</Pressable>
		</View>
	);
};

export default Home;
