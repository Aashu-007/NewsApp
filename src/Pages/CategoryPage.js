import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardCategory from "../components/CardCategory";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import {motion} from 'framer-motion';

const CategoryPage = () => {
	const [loading, setLoading] = useState(false)
	const [loadmore, setLoadmore] = useState(9);
	const queryParams = new URLSearchParams(useLocation().search);
	const category = queryParams.get("name");
	const [totalResults, setTotalResults] = useState(0)

	const [datas, setDatas] = useState([]);

	let API_URL = `https://inshortsv2.vercel.app/news?type=${category}&limit=${loadmore}`;
	if(category === "all_news"){
		API_URL = `https://inshortsv2.vercel.app/news?type=${category}&limit=${loadmore+2}`;
	}

	const getArticles = async () =>{
		const response = await fetch(API_URL);
		const data = await response.json();
		console.log("inshorts : ",data.articles,data.total);
		setTotalResults(data.total)
		setDatas(data.articles)
	}

	useEffect(() => {
		setLoading(true);
		getArticles();
		setLoading(false);
	}, [API_URL,loading])


	return (
		<>
			<Container disableGutters maxWidth="100%" height="100vh" sx={{px:1,py:3}}>


				<Box
					component="main"
					sx={{ flexGrow: 1, justifyContent: "center", }}
				>
				{loading ? 
						(
							<Box sx={{display:"flex",justifyContent:"center",maxWidth:"500",mt:"25vh"}}>
								<CircularProgress color="success" />
							</Box>
						):
						(<>
					<Grid container spacing={5}>
						{datas.map((data, index) => {
							return (
								<>
									<Grid
										key={index}
										item
										xs={12}
										md={6}
										sm={6}
										lg={4}
									>
									<motion.div
										initial={{y: "-80px", opacity: 0}}
										animate={{y: 0,opacity: 1}}
									>
										<CardCategory
											key={index}
											urlToImage={
												data.image_url
													? data.image_url
													: "https://firebasestorage.googleapis.com/v0/b/mpis-mini-f6271.appspot.com/o/no-photo-available.png?alt=media&token=3985dfb2-6f64-493a-ba9d-1772499026aa"
											}
											title={data.title}
											description={
												data.description
													? data.description
													: ""
											}
											url={data.source_url}
											
											maxWidth={350}
											maxHeight={480}
											minWidth={270}
											minHeight={480}
											minDes
											descH={220}
											mT={2.5}
										/>
									</motion.div>
									</Grid>
								</>
							);
						})}{console.log("Body LD : ",loadmore)}
						{loadmore <= totalResults && (
							<div align="center" style={{margin:'auto'}}>
								<Button
									sx={{ mt: 3 }}
									variant="contained"
									onClick={()=>setLoadmore(loadmore + 9)}
								>
									Load More
								</Button>
							</div>
						)}
					</Grid>
					</>)}
				</Box>
			</Container>
		</>
	);
};

export default CategoryPage;
