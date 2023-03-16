import SurviveCard from "../../Components/SurviveCard";
import ShareResultCard from "../../Components/ShareResultCard";

import "./SurviveContainer.css"

const SurviveContainer = (props) => {

    // console.log(props.ChanceCollection);
    return (<>
        <div className="SurviveContainerContent">
            <div className="leftContent">
                {
                    Object.keys(props.ChanceCollection).map((item, i) => {
                        // console.log(item);
                        const SurvivecardData = props.ChanceCollection.data;
                        // console.log(SurvivecardData);
                        return <>
                            <SurviveCard {...SurvivecardData} />
                        </>
                    })}
            </div>
            <div className="rightContent">
                {
                    Object.keys(props.ShareResultCollection).map((item, i) => {
                        // console.log(item);
                        const ShareResultData = props.ShareResultCollection.data;
                        // console.log(ShareResultData)
                        return <>
                            <ShareResultCard {...ShareResultData} />
                        </>
                    })}
            </div>
        </div>
    </>
    )
}
export default SurviveContainer;