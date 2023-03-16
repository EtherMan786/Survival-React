import FooterCard from "../../Components/FooterCard/FooterCard";

import "./FooterContainer.css"

const FooterContainer = (props) =>{
    // console.log(props.footerCollection);
    var data = props.footerCollection.data;
    // console.log(data);
    return <>
        <div className="footerContainerContent">
            <div className="footerMainContent">
                <FooterCard data={data} />
            </div>
        </div>
    </>
}
export default FooterContainer;