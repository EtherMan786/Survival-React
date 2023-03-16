import "./MissionCard.css"
const MissionCard = ({img,heading,subHeading,description,more}) =>{
    // console.log(img);
    return<>
        <div className="Missioncontent">
            <div className="shoesImg">
                <img src={img} alt="shoesImg" />
            </div>
            <div className="bottomContent">
                <div className="heading">{heading}</div>
                <div className="subHeading"> {subHeading}</div>
                <div className="description">{description}</div>
                <div className="more-btn">
                    <img src={more} alt="more-btn" />
                </div>
            </div>
        </div>
    </>

}
export default MissionCard;