import SurviveModecard from "../../Components/SurviveModecard";
import AdventureCard from "../../Components/AdventureCard/AdventureCard";

import "./SurviveModeContainer.css"

const SurviveModeContainer = (props) =>{
    // console.log(props.adviceCollection);
    // console.log(props.adventureCollection);
    return (<>
        <div className="SurviveModeContainerContent">
            <div className="leftContent">
                {
                    Object.keys(props.adviceCollection).map((item, i) => {
                        // console.log(item);
                        const SurviveModecardData = props.adviceCollection.data;
                        // console.log(SurviveModecardData);
                        return <>
                            <SurviveModecard {...SurviveModecardData} />
                        </>
                    })}
            </div>
            <div className="rightContent">
                {
                    Object.keys(props.adventureCollection).map((item, i) => {
                        // console.log(item);
                        const adventureCollectiontData = props.adventureCollection.data;
                        // console.log(adventureCollectiontData);
                        return <>
                            <AdventureCard {...adventureCollectiontData} />
                        </>
                    })}
            </div>
        </div>
    </>
    )
}
export default SurviveModeContainer;