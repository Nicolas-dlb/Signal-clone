import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitle: "Login",
		});
	}, [navigation]);

	const register = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				authUser.user.updateProfile({
					displayName: name,
					photoURL:
						imageUrl ||
						"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<KeyboardAvoidingView bahavior="padding" style={styles.container}>
			<StatusBar style="light" />
			<Text h5 style={{ marginBottom: 50, fontSize: 21 }}>
				Create a Signal account
			</Text>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Full Name"
					autofocus
					type="text"
					value={name}
					onChangeText={(text) => setName(text)}
				/>
				<Input
					placeholder="Email"
					autofocus
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					autofocus
					type="password"
					value={password}
					secureTextEntry
					onChangeText={(text) => setPassword(text)}
				/>
				<Input
					placeholder="Profile Picture URL (optional)"
					autofocus
					type="text"
					value={imageUrl}
					onChangeText={(text) => setImageUrl(text)}
					onSubmitEditing={register}
				/>
			</View>
			<Button
				style={styles.button}
				raised
				title="Register"
				onPress={register}
			/>
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		paddingTop: 60,
		backgroundColor: "white",
	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop: 10,
	},
});
