import CampingCard from "../../Components/CampingCard/CampingCard";

import Images from "../../Assets/Images";

import "./CampingContainer.css"

const CampingContainer = (props) => {
    // console.log(props);
    var data = props.campingCollection.data;
    return <>
        <div className="campingContainerContent">
            <div className="surviveleftContent">
                <CampingCard data={data} />
            </div>
            <div className="surviverightContent">
                <div className="gallery">
                    <img src={Images.gallery} alt="gallery" />
                </div>   
                <div className="lorem_black">
                    <img src={Images.lorem_black} alt="lorem_black" />
                </div>
                <div className="moress">
                    More
                </div>
            </div>
        </div>
    </>
    
}
export default CampingContainer;