import NavLinks from "../../Components/NavLinks"

import WebLogo from "../../Assets/Images/Group11.png"
import Profile from "../../Assets/Images/Profile.png"
import Search from "../../Assets/Images/ico_search.png"

import "./Header.css"
const Header = () => {
    const contact = {
        NavData: {
            fields: [
                "OUR COMPETITORS",
                "FOR PROFESSIONALS",
                "CONTACT"
            ],
            Lang:"ENG"
        },
    }
    return <>
        <div className="headerContent">
            <div>
                <img src={WebLogo} alt="logo" />
            </div>
            <div className="navlinks">
                <NavLinks links={contact.NavData.fields}/>
                <div className="line"></div>
                <div className="language">
                    <div>{contact.NavData.Lang}</div>
                </div>
                <div className="profile-search-icon">
                    <img className="profile-icon" src={Profile} alt="profile-icon" />
                    <button className="search-icon-btn">
                        <img className="search-icon" src={Search} alt="search-icon" />
                    </button>
                </div>
            </div>
        </div>
    </>
}
export default Header