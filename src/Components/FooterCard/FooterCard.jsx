import "./FooterCard.css"

const FooterCard = ({ data }) => {
    console.log(data);
    return <>
        <div className="footer">

            <img className="footerImg" src={data[0].footerImg} alt="footerImg" />

            <div className="adventureBlack">
                <img src={data[0].adventureBlack} alt="adventureBlack" />
            </div>

            <div className="challengeContent">
                <img src={data[0].challengeContent} alt="challengeContent" />
            </div>

            <div className="advices">
                <img src={data[0].advices} alt="advices" />
            </div>

            <div className="footergallery">
                <img src={data[0].footergallery} alt="footergallery" />
            </div>

            <div className="social">
                <img src={data[0].social} alt="social" />
            </div>

        </div>
    </>
}
export default FooterCard;