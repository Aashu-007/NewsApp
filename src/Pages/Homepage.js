import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardCategory from "../components/CardCategory";
import Category from "../components/Category";

const Homepage = () => {
	return (
		<>
			<Container disableGutters maxWidth="100%" sx={{ py: 3, px: 6 }}>
				<Box
					component="main"
					sx={{ flexGrow: 1, justifyContent: "center" }}
				>
					<Grid container spacing={2}>
						{Category.map((data, index) => {
							return (
								<>
									<Grid key={index} item xs={12} md={4} sm={6} lg={3}>
										<CardCategory
											key={index}
											urlToImage={data.urlToImage}
											title={data.title}
											description={data.description}
											url={data.url}
											category={data.category}
											maxWidth={260}
											minWidth={260}
											maxHeight={350}
										/>
									</Grid>
								</>
							);
						})}
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Homepage;
