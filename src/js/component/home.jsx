import React from "react";
import ReactDOM from "react-dom";
import JumboTron from "./jumbotron"
import CardDeck from "./carddeck";
import NavBar from "./navbar"


const Home = () => {
	return (
		<div>
			<NavBar />
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<JumboTron />
			</div>
			<div style={{ display: 'flex' }}>
				<CardDeck url="https://www.rollingstone.com/wp-content/uploads/2023/07/GettyImages-1561875450.jpeg?w=1024" alt="Card image cap" style={{ display: "flex", justifyContent: 'center', padding: '20px' }} />
				<CardDeck url="https://www.rollingstone.com/wp-content/uploads/2023/07/GettyImages-1561875450.jpeg?w=1024" alt="Card image cap" style={{ display: "flex", justifyContent: 'center', padding: '20px' }} />
				<CardDeck url="https://www.rollingstone.com/wp-content/uploads/2023/07/GettyImages-1561875450.jpeg?w=1024" alt="Card image cap" style={{ display: "flex", justifyContent: 'center', padding: '20px' }} />
				<CardDeck url="https://www.rollingstone.com/wp-content/uploads/2023/07/GettyImages-1561875450.jpeg?w=1024" alt="Card image cap" style={{ display: "flex", justifyContent: 'center', padding: '20px' }} />
			</div>
		</div>
	);
};

export default Home;