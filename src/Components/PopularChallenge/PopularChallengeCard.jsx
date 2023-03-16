import "./PopularChallengeCard.css"

const PopularChallengeCard = ({img,skills,header,description,more}) => {
    // console.log(more)
    // console.log(cards)
    return<>
        <div className="card"> 
            <div className="cardImg">
                <img src={img} alt="cardImg" />
            </div>
            <div className="cardContent">
                <div className="skills">
                    {skills}
                </div>
                <div className="header">
                    {header}
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="mores">
                    <img src={more} alt="more_btn" />
                </div>
            </div>
        </div>
    </>
    
}
export default PopularChallengeCard;