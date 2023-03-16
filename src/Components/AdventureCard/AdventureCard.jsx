import "./AdventureCard.css"

const AdventureCard = ({ adventureImg, pagination, surviveMode, loremText, nextButton, prevButton, more }) => {
    return <>
        <div className="AdventureCardContainer">
            <div className="adventureImg">
                <img src={adventureImg} alt="adventureImg" />
            </div>
            <div className="pagination">
                <img src={pagination} alt="pagination" />
            </div>
            <div className="surviveModeContent">
                <div className="surviveMode">
                    <img src={surviveMode} alt="surviveMode" />
                </div>
                <div className="loremText">
                    <img src={loremText} alt="loremText" />
                </div>
                <div className="more">
                    {more}
                </div>
            </div>
            <div className="nextPrevButton">
                <div className="nextButton">
                    <img src={nextButton} alt="nextButton" />
                </div>
                <div className="prevButton">
                    <img src={prevButton} alt="prevButton" />
                </div>
            </div>

        </div>
    </>
}
export default AdventureCard;