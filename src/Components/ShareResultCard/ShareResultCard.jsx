import "./ShareResultCard.css"
const ShareResultCard = ({ img1, rectangle, heading, description, more}) => {
    return <>
        <div className="shareResultContent">
            <div className="person-img">
                <img src={img1} alt="person-img" />
            </div>
            <div className="rectangle">
                <img src={rectangle} alt="rectangle" />
            </div>
            <div className="heading">
                <div className="inner-heading">
                    {heading}
                </div>
            </div>
            <div className="description">
                {description}
            </div>
            <div className="morez">
                {more}
            </div>
        </div>
    </>
}
export default ShareResultCard;