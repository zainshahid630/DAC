import React, {useState} from "react";
import { useNavigate } from "react-router";
import { NavBar } from "./navBar.tsx";
export const Welcome = (props) => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const goToservices
  = () => {
    navigate("/services");
  };

  const goTocontact = () => {
    navigate("/contact");
  };

  

  


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
			<div  style={{
					height: 4338,
					alignSelf: "stretch",
					display: "flex",
					flexDirection: "column",
					background: "#FFFFFF",
				}}>
		<NavBar />
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/2wzsq18e_expires_30_days.png"} 
					style={{
						height: 646,
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
						paddingTop: 77,
						marginBottom: 93,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginBottom: 65,
						}}>
						<span 
							style={{
								color: "#2947A9",
								fontSize: 60,
								fontWeight: "bold",
							}} >
							{"What We Offer"}
						</span>
					</div>
					<div 
						style={{
							display: "flex",
							alignItems: "center",
							marginLeft: 216,
						}}>
						<button 
							style={{
								flexShrink: 0,
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #E0E2EA`,
								paddingTop: 20,
								paddingBottom: 20,
								marginRight: 66,
								gap: 18,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/33itn8t9_expires_30_days.png"} 
								style={{
									borderRadius: 4,
									width: 40,
									height: 40,
									marginLeft: 20,
									objectFit: "fill",
								}}
							/>
							<span 
								style={{
									color: "#3D445B",
									fontSize: 20,
									fontWeight: "bold",
									marginLeft: 20,
								}} >
								{"Strategic Capital"}
							</span>
							<span 
								style={{
									color: "#848EAD",
									fontSize: 16,
									marginLeft: 20,
									width: 233,
								}} >
								{"Immediate funding to support brewery expansion, new product lines, or operational upgrades."}
							</span>
						</button>
						<div 
							style={{
								flexShrink: 0,
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #E0E2EA`,
								paddingTop: 20,
								paddingBottom: 40,
								marginRight: 78,
								gap: 18,
							}}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/yc6ppbvc_expires_30_days.png"} 
								style={{
									borderRadius: 4,
									width: 40,
									height: 40,
									marginLeft: 20,
									objectFit: "fill",
								}}
							/>
							<span 
								style={{
									color: "#3D445B",
									fontSize: 20,
									fontWeight: "bold",
									marginLeft: 20,
								}} >
								{"Operational Support"}
							</span>
							<span 
								style={{
									color: "#848EAD",
									fontSize: 16,
									marginLeft: 20,
									marginRight: 20,
									width: 246,
								}} >
								{"Guidance from a team with a proven track record in beverage and retail"}
							</span>
						</div>
						<div 
							style={{
								flexShrink: 0,
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #E0E2EA`,
								paddingTop: 20,
								paddingBottom: 40,
								gap: 18,
							}}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/mic8wm59_expires_30_days.png"} 
								style={{
									borderRadius: 4,
									width: 40,
									height: 40,
									marginLeft: 20,
									objectFit: "fill",
								}}
							/>
							<span 
								style={{
									color: "#3D445B",
									fontSize: 20,
									fontWeight: "bold",
									marginLeft: 20,
								}} >
								{"Distribution Enablement"}
							</span>
							<span 
								style={{
									color: "#848EAD",
									fontSize: 16,
									marginLeft: 20,
									width: 223,
								}} >
								{"Access to established wholesale and retail distribution networks across"}
							</span>
						</div>
					</div>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						background: "#EFEFEF",
						paddingTop: 53,
						paddingBottom: 126,
					}}>
					<span 
						style={{
							color: "#2947A9",
							fontSize: 60,
							fontWeight: "bold",
							marginBottom: 24,
							marginLeft: 112,
							width: 328,
						}} >
						{"Acquisition\nCriteria"}
					</span>
					<span 
						style={{
							color: "#282D3D",
							fontSize: 24,
							marginBottom: 97,
							marginLeft: 112,
						}} >
						{"We’re currently seeking Ontario-based craft breweries that meet the following profile:"}
					</span>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							marginLeft: 248,
							marginRight: 248,
							gap: 24,
						}}>
						<div 
							style={{
								flexShrink: 0,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/evoecjwa_expires_30_days.png"} 
								style={{
									width: 15,
									height: 15,
									marginBottom: 41,
									objectFit: "fill",
								}}
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/rcpuhrlz_expires_30_days.png"} 
								style={{
									width: 15,
									height: 15,
									marginBottom: 42,
									objectFit: "fill",
								}}
							/>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/d31v7cj6_expires_30_days.png"} 
								style={{
									width: 15,
									height: 15,
									objectFit: "fill",
								}}
							/>
						</div>
						<span 
							style={{
								color: "#282D3D",
								fontSize: 24,
								width: 902,
							}} >
							{"Production capacity under 400,000 hectolitres/year  Fully operational and brewing-ready facilities  Ambition to grow with the support of strategic capital and industry expertise"}
						</span>
					</div>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						alignItems: "flex-start",
						background: "#FFFFFF",
						paddingTop: 31,
						paddingBottom: 144,
						paddingLeft: 95,
						paddingRight: 95,
					}}>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginRight: 49,
						}}>
						<div 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								marginBottom: 59,
							}}>
							<div 
								style={{
									alignSelf: "stretch",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-end",
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/g8djp9cf_expires_30_days.png"} 
									style={{
										width: 84,
										height: 84,
										objectFit: "fill",
									}}
								/>
							</div>
							<div 
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									background: "#FFFFFF",
									borderRadius: 4,
									border: `1px solid #FFFFFF`,
									paddingTop: 30,
									paddingBottom: 30,
									gap: 2,
									boxShadow: "0px 4px 6px #1118270D",
								}}>
								<span 
									style={{
										color: "#282D3D",
										fontSize: 72,
										fontWeight: "bold",
										marginLeft: 30,
									}} >
									{"01"}
								</span>
								<div 
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginLeft: 46,
										marginRight: 46,
										gap: 12,
									}}>
									<div 
										style={{
											width: 7,
											height: 28,
											background: "#F9995D",
										}}>
									</div>
									<span 
										style={{
											color: "#657199",
											fontSize: 24,
										}} >
										{"Initial Inquiry"}
									</span>
								</div>
							</div>
						</div>
						<div 
							style={{
								alignSelf: "stretch",
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								marginBottom: 2,
							}}>
							<div 
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									position: "relative",
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/777h6rjo_expires_30_days.png"} 
									style={{
										width: 168,
										height: 168,
										objectFit: "fill",
									}}
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/r88nwg34_expires_30_days.png"} 
									style={{
										position: "absolute",
										bottom: -75,
										right: -44,
										width: 93,
										height: 93,
										objectFit: "fill",
									}}
								/>
							</div>
						</div>
						<div 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "#FFFFFF",
								borderRadius: 4,
								border: `1px solid #FFFFFF`,
								paddingTop: 30,
								paddingBottom: 30,
								marginLeft: 66,
								gap: 2,
								boxShadow: "0px 4px 6px #1118270D",
							}}>
							<span 
								style={{
									color: "#282D3D",
									fontSize: 72,
									fontWeight: "bold",
									marginLeft: 30,
								}} >
								{"03"}
							</span>
							<div 
								style={{
									display: "flex",
									alignItems: "flex-start",
									marginLeft: 46,
									gap: 12,
								}}>
								<div 
									style={{
										width: 7,
										height: 56,
										background: "#F9995D",
									}}>
								</div>
								<span 
									style={{
										color: "#657199",
										fontSize: 24,
										width: 180,
									}} >
									{"Due Diligence & Negotiations"}
								</span>
							</div>
						</div>
					</div>
					<div 
						style={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							marginTop: 42,
							marginRight: 12,
							gap: 61,
						}}>
						<div 
							style={{
								alignSelf: "stretch",
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								marginLeft: 11,
								marginRight: 11,
							}}>
							<div 
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									marginLeft: 19,
									position: "relative",
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/l5bo0mmf_expires_30_days.png"} 
									style={{
										width: 177,
										height: 177,
										objectFit: "fill",
									}}
								/>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/dcjkbiwp_expires_30_days.png"} 
									style={{
										position: "absolute",
										bottom: -24,
										left: -52,
										width: 79,
										height: 79,
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
									background: "#FFFFFF",
									borderRadius: 4,
									border: `1px solid #FFFFFF`,
									paddingTop: 30,
									paddingBottom: 30,
									gap: 2,
									boxShadow: "0px 4px 6px #1118270D",
								}}>
								<span 
									style={{
										color: "#282D3D",
										fontSize: 72,
										fontWeight: "bold",
										marginLeft: 30,
									}} >
									{"02"}
								</span>
								<div 
									style={{
										display: "flex",
										alignItems: "flex-start",
										paddingLeft: 16,
										paddingRight: 16,
										marginLeft: 30,
										gap: 12,
									}}>
									<div 
										style={{
											width: 7,
											height: 56,
											background: "#F9995D",
										}}>
									</div>
									<span 
										style={{
											color: "#657199",
											fontSize: 24,
											width: 186,
										}} >
										{"Evaluation & LOI Issuance"}
									</span>
								</div>
							</div>
						</div>
						<div 
							style={{
								alignSelf: "stretch",
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
							}}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/sf9sslpd_expires_30_days.png"} 
								style={{
									width: 177,
									height: 177,
									marginLeft: 30,
									objectFit: "fill",
								}}
							/>
							<div 
								style={{
									alignSelf: "stretch",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-end",
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/xto02uih_expires_30_days.png"} 
									style={{
										width: 97,
										height: 97,
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
									background: "#FFFFFF",
									borderRadius: 4,
									border: `1px solid #FFFFFF`,
									paddingTop: 30,
									paddingBottom: 30,
									gap: 2,
									boxShadow: "0px 4px 6px #1118270D",
								}}>
								<span 
									style={{
										color: "#282D3D",
										fontSize: 72,
										fontWeight: "bold",
										marginLeft: 30,
									}} >
									{"04"}
								</span>
								<div 
									style={{
										alignSelf: "stretch",
										display: "flex",
										alignItems: "flex-start",
										paddingLeft: 16,
										paddingRight: 16,
										marginLeft: 30,
										marginRight: 30,
										gap: 12,
									}}>
									<div 
										style={{
											width: 7,
											height: 56,
											background: "#F9995D",
										}}>
									</div>
									<span 
										style={{
											color: "#657199",
											fontSize: 24,
											flex: 1,
										}} >
										{"Final Agreement & Funding"}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginTop: 141,
						}}>
						<span 
							style={{
								color: "#2947A9",
								fontSize: 60,
								fontWeight: "bold",
								marginBottom: 40,
								width: 229,
							}} >
							{"Our \nProcess"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 20,
								marginBottom: 51,
								width: 379,
							}} >
							{"Our streamlined acquisition process allows us to move quickly—from initial interest to funding in as little as 30 to 90 days post-LOI."}
						</span>
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
								paddingLeft: 39,
								paddingRight: 39,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#FFFFFF",
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
						gap: 12,
						backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/ssh03lb6_expires_30_days.png)',
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/hdf8vma5_expires_30_days.png"} 
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
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/ikawjif9_expires_30_days.png"} 
							style={{
								width: 40,
								height: 40,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/1xvwforg_expires_30_days.png"} 
							style={{
								width: 40,
								height: 40,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/n73prckk_expires_30_days.png"} 
							style={{
								width: 40,
								height: 40,
								objectFit: "fill",
							}}
						/>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/hJXeSpXRqz/0fnswg0t_expires_30_days.png"} 
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