
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
const AppLayout = () => {
    return (
        <div className="App">
            <Header />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)