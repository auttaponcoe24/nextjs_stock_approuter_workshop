"use client";

import {
	Alert,
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import * as Icons from "@mui/icons-material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { add, signIn, userSelector } from "@/src/store/slices/userSlice";
import { useAppDispatch } from "@/src/store/store";

interface User {
	username: string;
	password: string;
}

type Props = {};

export default function Login({}: Props) {
	const router = useRouter();
	const initialValue: User = { username: "admin", password: "" };

	const formValidateSchema = Yup.object().shape({
		username: Yup.string().required("Username is require").trim(),
		password: Yup.string().required("Password is require").trim(),
	});

	// const reducer = useSelector((state: any) => state.userReducer);
	const reducer = useSelector(userSelector);
	const dispatch = useAppDispatch();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		defaultValues: initialValue,
		resolver: yupResolver(formValidateSchema),
	});

	const showForm = () => {
		return (
			<form
				onSubmit={handleSubmit(async (value: User) => {
					const result = await dispatch(signIn(value));
					if (signIn.fulfilled.match(result)) {
						router.push(`/stock`);
					} else if (signIn.rejected.match(result)) {
						// alert("Login failed");
					}
				})}
			>
				{/* Username */}
				<Controller
					name="username"
					control={control}
					render={({ field }) => (
						<TextField
							// onChange={(e) => setUser({ ...user, username: e.target.value })}
							{...field}
							error={(errors.username?.message ?? "") != ""}
							helperText={errors.username?.message?.toString()}
							variant="outlined"
							margin="normal"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Icons.Email />
										{/* <Icons.Drafts /> */}
									</InputAdornment>
								),
							}}
							label="Username"
							autoComplete="email"
							autoFocus
						/>
					)}
				/>

				{/* Password */}
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<TextField
							// onChange={(e) => setUser({ ...user, password: e.target.value })}
							{...field}
							error={(errors.password?.message ?? "") != ""}
							helperText={errors.password?.message?.toString()}
							type="password"
							variant="outlined"
							margin="normal"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Icons.Password />
									</InputAdornment>
								),
							}}
							label="Password"
							autoComplete="password"
							autoFocus
						/>
					)}
				/>

				{reducer.status == "failed" && (
					<Alert severity="error">Login failed.</Alert>
				)}

				<Button
					className="mt-8"
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					// disabled={reducer.status == "fetching"}
				>
					Login
				</Button>

				<Button
					className="mt-4"
					onClick={() => {
						dispatch(add());
						router.push("/register");
					}}
					type="button"
					fullWidth
					variant="outlined"
				>
					Register
				</Button>
			</form>
		);
	};

	return (
		<Box className="flex justify-center items-center">
			<Card className="max-w-[345px] mt-[100px]">
				<CardMedia
					sx={{ height: 200 }}
					image="/static/img/next_login.jpg"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Login ({reducer.count})
					</Typography>
					{showForm()}
				</CardContent>
			</Card>
			<style jsx global>
				{`
					body {
						min-height: 100vh;
						position: relative;
						margin: 0;
						background-size: cover;
						background-image: url("/static/img/bg4.jpg");
						text-align: center;
					}
				`}
			</style>
		</Box>
	);
}
