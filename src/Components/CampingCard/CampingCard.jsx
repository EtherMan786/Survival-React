import "./CampingCard.css"
const CampingCard = ({ data }) => {
    return <>
        {
            data.map((item, i) => {
                // console.log(item);
                // const campingCardData = props.campingCollection;
                // console.log(campingCardData);
                return <>
                    <div className="background">

                        <img className="backgroundImg" src={item.backgroungImg} alt="backgroungImg" />

                        <div className="date">
                            <img src={item.date} alt="date" />
                        </div>

                        <div className="icon">
                            <img src={item.icon} alt="icon" />
                        </div>
                        
                        <div className="text">
                            <img src={item.text} alt="text" />
                        </div>

                    </div>
                </>
            })
        }
    </>
}
export default CampingCard;