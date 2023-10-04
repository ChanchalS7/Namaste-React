/**
*Header
-logo
-nav items
*Body
-Search
-RestaurantContainer
-RestaurantCard
*Footer
-Copyright
-Links
-Address
-Contacts
 */

import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCbzvRLLbTMEOxv1E5fFBQ4N2cfJW-PSg6MeEtLJ&s"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const styleCard = {
    backgroundColor: "#f0f0f0",
};
// const RestaurantCard = () => {
//     return (
//         <div className="res-card" style={styleCard}>
//             <h3>Meghana foods</h3>
//             <img
//                 className="res-logo"
//                 src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g5txnz35wlrgbskk3r8y"
//                 alt="food image"
//             />
//             <h4>North Indian</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 Min</h4>
//         </div>
//     );
// };
// const Body = () => {
//     return (
//         <div className="body">
//             <div className="serach">Search</div>
//             <div className="res-container">
//                 <RestaurantCard />
//                 <RestaurantCard />
//             </div>
//         </div>
//     );
// };
const RestaurantCard = (props) => {
    const { resName, cuisine } = props;
    // const {resData}=props
    console.log(props)
    return (
        <div className="res-card" style={styleCard}>
            <h3>{resName}</h3>
            <img
                className="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g5txnz35wlrgbskk3r8y"
                alt="food image"
            />
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 Min</h4>
            {/* <h4>{resData.data.name}</h4> 
                <h4>{resData.data.cuisine}</h4>
                <h4>{resData.data.avgRatings}</h4>
            */}
        </div>
    );
};
const resObj = []
const Body = () => {
    return (
        <div className="body">
            <div className="serach">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Guru Kripa" cuisine="Indian food" />
                <RestaurantCard resName="KFC" cuisine="Western food" />
                {/* <RestaurantCard resData={resObj} /> */}
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
