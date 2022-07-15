import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apikey from "../config";
import CardCategory from "../components/CardCategory";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const CategoryPage = () => {
	const [loadmore, setLoadmore] = useState(20);
	const queryParams = new URLSearchParams(useLocation().search);
	const category = queryParams.get("name");
	const [totalResults, setTotalResults] = useState(0)

	const [datas, setDatas] = useState([]);
	let API_URL = null;

	if (
		category == "business" ||
		category == "entertainment" ||
		category == "general" ||
		category == "health" ||
		category == "science" ||
		category == "sports" ||
		category == "technology"
	) {
		API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${loadmore}`;
	} else {
		API_URL = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apikey}&pageSize=${loadmore}`;
	}
	console.log(API_URL);

	const getData = async () => {
		const response = await fetch(API_URL);
		const data = await response.json();
		setDatas(data.articles);
		// console.log(data.articles);
		// console.log(data.totalResults);
		setTotalResults(data.totalResults)
	};

	useEffect(() => {
		getData();
	}, [API_URL]);

	return (
		<>
			<Container disableGutters maxWidth="100%" sx={{ py: 3, px: 6 }}>
				<Box
					component="main"
					sx={{ flexGrow: 1, justifyContent: "center" }}
				>
					<Grid container spacing={1}>
						{datas.map((data, index) => {
							return (
								<>
									<Grid
										key={index}
										item
										xs={12}
										md={4}
										sm={6}
										lg={3}
									>
										<CardCategory
											key={index}
											urlToImage={
												data.urlToImage
													? data.urlToImage
													: "https://firebasestorage.googleapis.com/v0/b/mpis-mini-f6271.appspot.com/o/no-photo-available.png?alt=media&token=3985dfb2-6f64-493a-ba9d-1772499026aa"
											}
											title={data.title}
											description={
												data.description
													? data.description
															.substr(0, 170)
															.concat("...")
													: ""
											}
											url={data.url}
											category={data.category}
											maxWidth={280}
											maxHeight={450}
											descH={180}
											mT={2.5}
										/>
									</Grid>
								</>
							);
						})}
						{loadmore <= totalResults && (
							<>
								<Button
									sx={{ m: "auto", mt: 3 }}
									variant="contained"
									onClick={()=>setLoadmore(loadmore + 20)}
								>
									Load More
								</Button>
							</>
						)}
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default CategoryPage;
