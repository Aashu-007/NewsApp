import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";


const CardCategory = ({
	urlToImage,
	title,
	description,
	url,
	category,
	maxWidth,
	minWidth,
	minHeight,
	maxHeight,
	descH,
	mT,
}) => {
	const location = useLocation();

	return (
		<>
			<Card
				sx={{
					m:2,
					maxWidth: { maxWidth },
					minWidth: {minWidth},
					maxHeight: { maxHeight },
					minHeight:{minHeight},
					borderRadius: 2,
				}}
				raised
			>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="news"
						height="180"
						image={urlToImage}
					/>
					<CardContent sx={{ height: descH }}>
						<Typography
							gutterBottom
							variant="body1"
							component="div"
							sx={{textAlign: 'justify'}}
						>
							{title ? title.substr(0, 100) : ""}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ wordWrap: "break-word", textAlign: 'justify'}}
						>
							{description ? description : ""}
						</Typography>
					</CardContent>
					<CardActions sx={{ float: "right", mr: 1 }}>
						{location.pathname === "/" ? (
							<Button
								sx={{ mt: mT }}
								size="small"
								onClick={() => window.scroll(0, 0)}
							>
								<Link
									to={`/category?name=${category}`}
									style={{
										textDecoration: "inherit",
										color: "inherit",
									}}
								>
									View
								</Link>
							</Button>
						) : (
							<Button sx={{ mt: mT }} size="small">
								<a
									href={url}
									style={{
										textDecoration: "inherit",
										color: "inherit",
									}}
									target="_blank"
									rel="noreferrer"
								>
									Read More
								</a>
							</Button>
						)}
					</CardActions>
				</CardActionArea>
			</Card>
		</>
	);
};

export default CardCategory;
