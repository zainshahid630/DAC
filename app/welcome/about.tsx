import React, {useState} from "react";
import { NavBar } from "./navBar";

export const About = () => {

	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div 
			style={{
				display: "flex",
				flexDirection: "column",
				background: "#FFFFFF",
			}}>
			<div 
				style={{
					height: 2719,
					alignSelf: "stretch",
					display: "flex",
					flexDirection: "column",
					background: "#FFFFFF",
				}}>
			<NavBar />
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/h8iycr9f_expires_30_days.png"} 
					style={{
						height: 426,
						alignSelf: "stretch",
						objectFit: "fill",
					}}
				/>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						background: "#FFFFFF",
						paddingTop: 81,
						paddingBottom: 81,
						marginLeft: 1,
						marginRight: 1,
						position: "relative",
					}}>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/6zayarvt_expires_30_days.png"} 
						style={{
							width: 902,
							height: 669,
							marginLeft: 80,
							objectFit: "fill",
						}}
					/>
					<div 
						style={{
							position: "absolute",
							bottom: 92,
							right: 79,
							width: 488,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#2947A9",
							borderRadius: 2,
							boxShadow: "0px 8px 8px #11182708",
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 24,
								fontWeight: "bold",
								marginTop: 70,
								marginBottom: 6,
								marginLeft: 40,
							}} >
							{"Purpose-Built Capital for Growth"}
						</span>
						<div 
							style={{
								height: 1,
								alignSelf: "stretch",
								background: "#FFFFFF",
								marginBottom: 48,
								marginLeft: 41,
								marginRight: 41,
							}}>
						</div>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 20,
								marginBottom: 27,
								marginLeft: 40,
								marginRight: 40,
							}} >
							{"Brewery Acquisition Corp. (BAC) is focused exclusively on acquiring equity in Ontario-based craft breweries.\n\nOur team brings deep experience in capital deployment, operational scaling, and retail expansion—backed by over $200M raised and 50+ retail locations developed in the past year."}
						</span>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "#FFFFFF",
								borderRadius: 6,
								border: `2px solid #2947A9`,
								paddingTop: 16,
								paddingBottom: 16,
								paddingLeft: 20,
								paddingRight: 20,
								marginBottom: 60,
								marginLeft: 40,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#2947A9",
									fontSize: 18,
									fontWeight: "bold",
								}} >
								{"Contact Us"}
							</span>
						</button>
					</div>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						alignItems: "center",
						paddingTop: 100,
						paddingBottom: 100,
						paddingLeft: 112,
						paddingRight: 112,
						marginLeft: 1,
						marginRight: 1,
						gap: 12,
						backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/2ln7v4fd_expires_30_days.png)',
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}>
					<div 
						style={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: 30,
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 36,
								fontWeight: "bold",
							}} >
							{"Free consultation with exceptional quality"}
						</span>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 24,
							}} >
							{"Just one email away: partner@bacorp.ca"}
						</span>
					</div>
					<button 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "none",
							borderRadius: 2,
							border: `2px solid #FFFFFF`,
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 20,
							paddingRight: 20,
							textAlign: "left",
						}}
						onClick={()=>alert("Pressed!")}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 18,
								fontWeight: "bold",
							}} >
							{"Get your consultation"}
						</span>
					</button>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						background: "#F6F8F7",
						paddingTop: 60,
						paddingBottom: 60,
						marginLeft: 1,
						marginRight: 1,
					}}>
					<span 
						style={{
							color: "#282D3D",
							fontSize: 36,
							fontWeight: "bold",
							marginBottom: 20,
							marginLeft: 347,
							marginRight: 347,
						}} >
						{"Interested in partnering or learning more?"}
					</span>
					<span 
						style={{
							color: "#282D3D",
							fontSize: 20,
							textAlign: "center",
							marginBottom: 38,
							marginLeft: 451,
							marginRight: 451,
						}} >
						{"Please fill out the form below or contact us directly at partner@bacorp.ca"}
					</span>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "flex-start",
							marginBottom: 20,
							marginLeft: 424,
							marginRight: 424,
							gap: 32,
						}}>
						<input
							placeholder={"Your Name*"}
							value={input1}
							onChange={(event)=>onChangeInput1(event.target.value)}
							style={{
								color: "#A3AAC1",
								fontSize: 18,
								flex: 1,
								alignSelf: "stretch",
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #E0E2EA`,
								paddingTop: 10,
								paddingBottom: 10,
								paddingLeft: 8,
								paddingRight: 16,
							}}
						/>
						<input
							placeholder={"Email*"}
							value={input2}
							onChange={(event)=>onChangeInput2(event.target.value)}
							style={{
								color: "#A3AAC1",
								fontSize: 18,
								flex: 1,
								alignSelf: "stretch",
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #E0E2EA`,
								paddingTop: 10,
								paddingBottom: 10,
								paddingLeft: 8,
								paddingRight: 16,
							}}
						/>
					</div>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "flex-start",
							marginBottom: 20,
							marginLeft: 424,
							marginRight: 424,
							gap: 32,
						}}>
						<button 
							style={{
								flex: 1,
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #E0E2EA`,
								paddingTop: 10,
								paddingBottom: 10,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#A3AAC1",
									fontSize: 18,
									marginLeft: 8,
								}} >
								{"Reason for Contacting*"}
							</span>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/aeug037e_expires_30_days.png"} 
								style={{
									borderRadius: 4,
									width: 20,
									height: 20,
									marginRight: 8,
									objectFit: "fill",
								}}
							/>
						</button>
						<input
							placeholder={"Phone"}
							value={input3}
							onChange={(event)=>onChangeInput3(event.target.value)}
							style={{
								color: "#A3AAC1",
								fontSize: 18,
								flex: 1,
								alignSelf: "stretch",
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #E0E2EA`,
								paddingTop: 10,
								paddingBottom: 10,
								paddingLeft: 8,
								paddingRight: 16,
							}}
						/>
					</div>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#FFFFFF",
							borderRadius: 4,
							border: `1px solid #E0E2EA`,
							paddingTop: 10,
							paddingBottom: 104,
							marginBottom: 8,
							marginLeft: 424,
							marginRight: 424,
						}}>
						<span 
							style={{
								color: "#A3AAC1",
								fontSize: 18,
								marginLeft: 8,
							}} >
							{"Message"}
						</span>
					</div>
					<span 
						style={{
							color: "#C40303",
							fontSize: 16,
							marginBottom: 28,
							marginLeft: 424,
						}} >
						{"* indicates a required field"}
					</span>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "#2947A9",
								borderRadius: 2,
								border: "none",
								paddingTop: 16,
								paddingBottom: 16,
								paddingLeft: 103,
								paddingRight: 103,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#FFFFFF",
									fontSize: 18,
									fontWeight: "bold",
								}} >
								{"Submit"}
							</span>
						</button>
					</div>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						background: "#FFFFFF",
						paddingTop: 85,
						paddingBottom: 41,
						marginLeft: 1,
						marginRight: 1,
					}}>
					<div 
						style={{
							display: "flex",
							alignItems: "flex-start",
							marginBottom: 20,
							marginLeft: 112,
						}}>
						<div 
							style={{
								flexShrink: 0,
								display: "flex",
								alignItems: "center",
								paddingRight: 3,
								marginRight: 502,
								gap: 45,
							}}>
							<span 
								style={{
									color: "#2947A9",
									fontSize: 20,
									fontWeight: "bold",
								}} >
								{"Email:"}
							</span>
							<span 
								style={{
									color: "#000000",
									fontSize: 20,
								}} >
								{"partner@bacorp.ca"}
							</span>
						</div>
						<span 
							style={{
								color: "#2947A9",
								fontSize: 20,
								fontWeight: "bold",
							}} >
							{"Newsletter:"}
						</span>
					</div>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "flex-start",
							marginBottom: 2,
							marginLeft: 112,
							marginRight: 112,
						}}>
						<span 
							style={{
								color: "#2947A9",
								fontSize: 20,
								fontWeight: "bold",
								marginRight: 722,
							}} >
							{"Social:"}
						</span>
						<input
							placeholder={"Your email here"}
							value={input4}
							onChange={(event)=>onChangeInput4(event.target.value)}
							style={{
								color: "#A3AAC1",
								fontSize: 18,
								marginRight: 8,
								flexShrink: 0,
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #E0E2EA`,
								paddingTop: 10,
								paddingBottom: 10,
								paddingLeft: 8,
								paddingRight: 8,
							}}
						/>
						<button 
							style={{
								flexShrink: 0,
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "#F9995D",
								borderRadius: 4,
								border: "none",
								paddingTop: 10,
								paddingBottom: 10,
								paddingLeft: 23,
								paddingRight: 23,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#FFFFFF",
									fontSize: 18,
									fontWeight: "bold",
								}} >
								{"Subscribe"}
							</span>
						</button>
					</div>
					<div 
						style={{
							display: "flex",
							alignItems: "flex-start",
							marginBottom: 44,
							marginLeft: 112,
							gap: 20,
						}}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/hkrdrhd4_expires_30_days.png"} 
							style={{
								width: 40,
								height: 40,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/mweiwljf_expires_30_days.png"} 
							style={{
								width: 40,
								height: 40,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/ckekvds6_expires_30_days.png"} 
							style={{
								width: 40,
								height: 40,
								objectFit: "fill",
							}}
						/>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/e95s07tz_expires_30_days.png"} 
						style={{
							width: 123,
							height: 81,
							marginLeft: 113,
							objectFit: "fill",
						}}
					/>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						background: "#2947A9",
						paddingTop: 26,
						paddingBottom: 26,
						marginLeft: 1,
						marginRight: 1,
					}}>
					<span 
						style={{
							color: "#FFFFFF",
							fontSize: 16,
							marginLeft: 112,
						}} >
						{"BAC © 2025. All Rights Reserved"}
					</span>
				</div>
			</div>
		</div>
	)
}