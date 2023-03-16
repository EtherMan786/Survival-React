import "./Banner.css";
import "../../../src/Assets/Css/slick.css"

import $ from 'jquery';
import 'slick-carousel/slick/slick';
import Images from "../../Assets/Images";
import arrow from "../../Assets/Images/arrow.png"
import arrowblack from "../../Assets/Images/arrowBlack.svg"

const Banner = () => {
    $(document).ready(function(){
        $('.slider').slick();
        $(".slick-prev").html(`<img src=${arrow} alt='abcd' />`);
        $(".slick-next").html(`<img src=${arrowblack} alt='abcd' />`);
      });
    return <>
        <div className="mainContent">
            <div className="leftContent">
                <div className="surviveImg">
                    <img src={Images.surviveImg} alt="surviveImg" />
                </div>
                <div className="socialIcon">
                    <img src={Images.socialIcon} alt="socialIcon" />
                </div>
            </div>
            <div className="rightContent">
                <div class="slider-container">
                    <div class="slider">
                        <div className="bannerImg">
                            <img src={Images.bannerImg} alt="bannerImg" />
                        </div>
                        <div className="bannerImg">
                            <img src={Images.bannerImg} alt="bannerImg" />
                        </div>
                        <div className="bannerImg">
                            <img src={Images.bannerImg} alt="bannerImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Banner;