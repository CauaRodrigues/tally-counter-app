import React, { useContext, useEffect, useState } from "react";
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
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
	const { theme } = useContext(ThemeContext);

	const [count, setCount] = useState(0);
	const [target, setTarget] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const [textColorCount, setTextColorCount] = useState(
		theme === "dark" ? colors.darkMode.yellow : colors.lightMode.yellow
	);
	const [borderColorCircle, setBorderColorCircle] = useState(undefined);

	const handlerCount = (change) => {
		if (change === "reset") {
			setCount(0);
		} else {
			change === "less"
				? setCount((prevState) => (prevState ? prevState - 1 : prevState))
				: setCount((prevState) => prevState + 1);
		}
	};

	useEffect(() => {
		if (target) {
			if (count > target) {
				setTextColorCount(colors.common.red);
				setBorderColorCircle(colors.common.red);
			} else if (count == target) {
				setTextColorCount(colors.common.blue);
				setBorderColorCircle(colors.common.blue);
			} else {
				setTextColorCount(
					theme === "dark" ? colors.darkMode.yellow : colors.lightMode.yellow
				);
				setBorderColorCircle(undefined);
			}
		} else {
			setTextColorCount(
				theme === "dark" ? colors.darkMode.yellow : colors.lightMode.yellow
			);
			setBorderColorCircle(undefined);
		}
	}, [count, target, theme]);

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View style={styles.tallyCounter(theme)}>
					<Pressable onPress={() => handlerCount("less")}>
						<AntDesign
							name="minus"
							size={40}
							color={
								theme === "dark"
									? colors.darkMode.yellow
									: colors.lightMode.yellow
							}
						/>
					</Pressable>

					<Pressable
						style={styles.circleTally(borderColorCircle, theme)}
						onPress={() => handlerCount("plus")}
					>
						<View style={styles.contentCircleTally}>
							<Text style={styles.count(textColorCount)}>{count}</Text>
							<Text style={styles.target(target)}>/{target}</Text>
						</View>
					</Pressable>

					<Pressable onPress={() => handlerCount("plus")}>
						<AntDesign
							name="plus"
							size={40}
							color={
								theme === "dark"
									? colors.darkMode.yellow
									: colors.lightMode.yellow
							}
						/>
					</Pressable>
				</View>

				{count ? (
					<Pressable onPress={() => handlerCount("reset")}>
						<MaterialIcons
							name="replay"
							size={40}
							color={
								theme === "dark"
									? colors.darkMode.yellow
									: colors.lightMode.yellow
							}
						/>
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
						<View style={styles.modal(theme)}>
							<Text style={styles.titleModal(theme)}>Definir Meta</Text>
							<TextInput
								autoFocus={true}
								cursorColor={
									theme === "dark"
										? colors.darkMode.main
										: colors.lightMode.yellow
								}
								keyboardType="numeric"
								style={styles.inputTarget(theme)}
								value={target}
								defaultValue={target}
								onChangeText={setTarget}
								placeholder="Insira um valor"
								placeholderTextColor={colors.common.gray}
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
				<Text style={styles.btnTextTarget(target, theme)}>Definir Meta</Text>
			</Pressable>
		</View>
	);
};

export default Home;
