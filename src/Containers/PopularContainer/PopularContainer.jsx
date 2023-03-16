import PopularChallengeCard from "../../Components/PopularChallenge/PopularChallengeCard";
import MissionCard from "../../Components/MissionCard";
import "./PopularContainer.css"
const PopularContainer = (props) => {
    // console.log(props.dataCollection)
    // console.log(dataCollection.title);
    // console.log(dataCollection);
    return (<>
    <div className="popularChallengeContent">
        <div className="leftContent">
            <div className="popularHeading">
                {props.dataCollection.title}
            </div>
            {
                Object.keys(props.dataCollection.cards).map((item, i) => {
                // console.log(item);
                const cardData = props.dataCollection.cards[item];
                // console.log(cardData)
               return <>
               <PopularChallengeCard {...cardData} />
               </> 
            })}
        </div>
        <div className="rightContent">
        {
                Object.keys(props.MissionCollection).map((item, i) => {
                // console.log(item);
                const MissioncardData = props.MissionCollection.data;
                // console.log(MissioncardData)
               return <>
               <MissionCard {...MissioncardData} />
               </> 
            })}
        </div>
    </div>
        </>
    )
}
export default PopularContainer;