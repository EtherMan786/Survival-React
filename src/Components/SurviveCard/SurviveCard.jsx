import "./SurviveCard.css"

const SurviveCard = ({ img1, img2, img3, img4, img5 }) => {
    // console.log(img1)
    return <>
        <div className="surviveLeft">
            <div className="img1">
                <img src={img1} alt="img1" />
            </div>
            <div className="thirteen">
                <img src={img2} alt="img2" />
            </div>
            <div className="img3">
                <img src={img3} alt="img3" />
            </div>
            <div className="img4">
                <img src={img4} alt="img4" />
            </div>
        </div>
        <div className="img5">
            <img src={img5} alt="img5" />
        </div>
    </>
}
export default SurviveCard;