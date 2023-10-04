
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
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCbzvRLLbTMEOxv1E5fFBQ4N2cfJW-PSg6MeEtLJ&s" />
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

    )
}
const styleCard = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <h3>Meghana foods</h3>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g5txnz35wlrgbskk3r8y" alt="food image" />
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="serach">Search</div>
            <div className="res-container"><RestaurantCard /></div>

        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)