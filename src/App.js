import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const products = [
	{
		id: 1,
		name: "SAMSUNG Galaxy S23 Ultra",
		rating: 4.3,
		description:
			"Qualcomm Snapdragon 8 Gen 2 Processor | 12 GB RAM | 512 GB ROM |(6.8 inch) Quad HD+Display | 200MP+10MP+12MP+10MP |12MPFront Camera | 5000 mAh Lithium Ion Battery.",
		price: 250,
		image: require("./assets/images/product-1.0.png"),
	},
	{
		id: 2,
		name: "APPLE iPhone 14 Pro Max",
		rating: 5,
		description:
			"A16 Bionic Chip,6 Core Processor | 128 GB ROM |(6.7 inch) Super Retina XDR Display | 48MP+12MP+12M | 12MP Front Camera.",
		price: 300,
		image: require("./assets/images/product-2.png"),
	},
	{
		id: 3,
		name: "Noise Evolve 3 1.43",
		rating: 4.4,
		description:
			"AMOLED Always-On Dispay with Bluetooth Calling,Metallic Design Smartwatch(Blue Strap,Regular).",
		price: 110,
		image: require("./assets/images/product-3.png"),
	},
	{
		id: 4,
		name: "Fire-Boltt",
		rating: 3.9,
		description:
			"Ninja Calling Pro 1.69 inch Bluetooth Calling Smartwatch with AI Voice Assistant Smartwatch(Green Strap,Free Size).",
		price: 119,
		image: require("./assets/images/product-4.png"),
	},
	{
		id: 5,
		name: "IQOO Neo 6 5G",
		rating: 4.7,
		description:
			"8 GB RAM | 128 GB ROM |(6.62 inch) Display | 64MP+64MP+8MP+2MP | 16MP+16MP Dual Front Camera | 4700 mAh Battery",
		price: 200,
		image: require("./assets/images/product-5.png"),
	},
	{
		id: 6,
		name: "SONY",
		rating: 4.8,
		description:
			"SONY WH-CH520 with 50 Hrs Playtime,DSEE Upscale,Multipoint Connection/Dual Pairing Bluetooth Headset (Black,On the Ear)",
		price: 149,
		image: require("./assets/images/product-6.png"),
	},
	{
		id: 7,
		name: "Acer Aspire 7 ",
		rating: 4.9,
		description:
			"Core i5 12th Gen-(8 GB/512 GB SSD/ Windows 11 Home /4 GB Graphics/ NVIDA GeForceRTX 3050)A715-51G Gaming Laptop(15.6 inch,Charcoal Black).",
		price: 149,
		image: require("./assets/images/product-7.png"),
	},
	{
		id: 8,
		name: "APPLE iPad Pro (4th Gen)",
		rating: 4.9,
		description:
			"128 GB ROM |27.94 cm (11.0 inch) Full HD Display | 12 MP Primary Camera | 12 MP Front | iPadOS 16 | Battery: Lithium Polymer |Processor: Apple M2 chip.",
		price: 180,
		image: require("./assets/images/product-8.png"),
	},
	{
		id: 9,
		name: "Whirlpool 1.5 Ton 4 Star, Flexicool Inverter Split AC  ",
		rating: 3.9,
		description:
			"Brand :Whirlpool |Model :S3I3AD0 |Capacity :1.5 Tons|Annual Energy Consumption :854.16 Kilowatts|	Noise Level:43 dB |Installation Type:Split System |t Special Features:6th Sense|4 in 1 Convertible |Colour	:WHITE .",
		price: 95,
		image: require("./assets/images/product-9.png"),
	},
	{
		id: 10,
		name: "Sony Digital Vlog Camera ZV 1 ",
		rating: 4.5,
		description:
			"Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation) - Black.",
		price: 100,
		image: require("./assets/images/product-10.png"),
	},
	{
		id: 11,
		name: "OnePlus 11 5G  ",
		rating: 4.1,
		description:
			"(Eternal Green, 8GB RAM, 128GB Storage)|50MP+48MP+32MP|16MP Front (Selfie) Camera| 6.7 Inches; 120 Hz AMOLED QHD Display |Snapdragon 8 Gen 2 Mobile Platform|Snapdragon 8 Gen 2 Mobile Platform.",
		price: 80,
		image: require("./assets/images/product-11.png"),
	},
	{
		id: 12,
		name: "Echo Dot (3rd Gen), ",
		rating: 3.9,
		description:
			" Certified Refurbished, Black |Improved smart speaker with Alexa | Like new, backed with 1-year.",
		price: 50,
		image: require("./assets/images/product-12.png"),
	},
	{
		id: 13,
		name: "OPPO Enco Buds 2  ",
		rating: 4.8,
		description:
			"Bluetooth version: 5.2|Battery life: 28 hrs | Charging time: 1.5 hrs|10mm Dynamic Bass Boost Driver - Powerful & Rhythmic Bass|Enco Live Stereo Sound Effects | Dolby Atmos|AI Deep Noise Cancellation | 80ms Ultra Low Latency game mode.",
		price: 30,
		image: require("./assets/images/product-13.png"),
	},
	{
		id: 14,
		name: "BoAt Aavante Bar 2000 160 W Bluetooth Soundbar  ",
		rating: 4.0,
		description:
			"Power Output(RMS): 160 W|Power Source: AC Adapter |Wireless music streaming via Bluetooth |Multiple connectivity- usb,optic,aux,remote |3D stereo surround sound from two channel sources.",
		price: 35,
		image: require("./assets/images/product-14.png"),
	},
	{
		id: 15,
		name: "Godrej 564 L Frost Free Side by Side Refrigerator  ",
		rating: 3.5,
		description:
			"Storing fruits and veggies is now convenient, thanks to the Godrej 564 L Frost-free Side-by-side Refrigerator.",
		price: 80,
		image: require("./assets/images/product-15.png"),
	},
	{
		id: 16,
		name: "LG 8 kg Fully Automatic Front Load Washing Machine with In-built Heater Black ",
		rating: 3.9,
		description:
			"Fully Automatic Front Load Washing Machines have Great Wash Quality with very less running cost|1400 rpm : Higher the spin speed, lower the drying time|Number of wash programs - 10|5 Star Rating.",
		price: 109,
		image: require("./assets/images/product-16.png"),
	},
	{
		id: 17,
		name: "Symphony 31 L Room/Personal Air Cooler   ",
		rating: 3.6,
		description:
			"Tank Capacity: 31 L|37 ft Air Throw|Important Notes:1.Allow cross-ventilation in your room for an effective cooling experience.|2.The product is ready to use and it does not require any installation.",
		price: 119,
		image: require("./assets/images/product-17.png"),
	},
	{
		id: 18,
		name: "Sony PlayStation 4 (PS4) Slim 1 TB with FIFA 18   ",
		rating: 4.3,
		description:
			"Model Number|PS4/CUH-2108BB01/I |Sales Package:PS4 Console, Manual, Connecting cables, FIFA 18 Game Disc and 2 Controllers (1 Controller is present inside the box and 1 Controller is externally shrink-wrapped)|Console Type :Console.",
		price: 249,
		image: require("./assets/images/product-18.png"),
	},
	{
		id: 19,
		name: "Vu GloLED 139 cm (55 inch) Ultra HD (4K) LED Smart Google TV with DJ Subwoofer 104W  (55GloLED) ",
		rating: 4.7,
		description:
			"The Box:1 LED TV,Remote Control, Power Cord, User Manual|Color:Grey|Display Size:139 cm (55 inch)|Screen Type:LED|Resolution:Ultra HD (4K), 3840 x 2160|Series:GloLED.",
		price: 249,
		image: require("./assets/images/product-19.png"),
	},
	{
		id: 20,
		name: "Harry Potter: The Complete 8 Movies Collection 7 ",
		rating: 4.9,
		description:
			"Rowling J K |Highlights:Language: English|Binding: Mixed media product|Publisher: Arthur A. Levine Books|Genre: Juvenile Fiction.",
		price: 169,
		image: require("./assets/images/product-20.png"),
	},
	
];

function App() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<h3 className="logo">Shoopping-Cart</h3>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}SHOP
				</button>	
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
