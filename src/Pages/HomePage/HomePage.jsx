import Header from "../../Containers/Header";
import BannerContainer from "../../Containers/BannerContainer/BannerContainer";
import PopularContainer from "../../Containers/PopularContainer";
import SurviveContainer from "../../Containers/SurviveContainer";
import SurviveModeContainer from "../../Containers/SurviveModeContainer";
import CampingContainer from "../../Containers/CampingContainer/CampingContainer";
import FooterContainer from "../../Containers/FooterContainer/FooterContainer";

import Images from "../../Assets/Images";

const HomePage = () => {

    const challenges = {
        title: "Popular challenges",
        'cards': {
            'card01': {
                'img': Images.card01,
                'skills': "KEY SKILLS",
                'header': "Friction-Based Fire Making",
                'description': "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
                'more': Images.btn_more,
            },
            'card02': {
                'img': Images.card02,
                'skills': "KEY SKILLS",
                'header': "Make your own shelter",
                'description': "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
                'more': Images.btn_more,
            },
            'card03': {
                'img': Images.card03,
                'skills': "KEY SKILLS",
                'header': "Prepare a meal in the forest",
                'description': "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
                'more': Images.btn_more,
            },
        },
    }
    const Mission = {
        data: {
            "img": Images.img_shoes,
            "heading": 'Mission',
            "subHeading": 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor.',
            "description": 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            'more': Images.btn_more,
        }
    }
    const Chance = {
        data: {
            "img1": Images.completedChallenges,
            "img2": Images.thirteen,
            "img3": Images.youHave,
            "img4": Images.btn_more,
            "img5": Images.yourResult,
        }
    }
    const shareResult = {
        data: {
            "img1": Images.person,
            "rectangle": Images.rectangle,
            "heading": "SHARE YOUR RESULTS ON SOCIAL MEDIA",
            "description": "Lorem ipsum dolor sit amet, consetetur diam nonumy tempor.",
            "more": "SEE RESULTS FROM YOUR FRIENDS",
        }
    }
    const advice = {
        data: {
            "img1": Images.advice
        }
    }
    const adventure = {
        data: {
            "adventureImg": Images.adventure,
            "pagination": Images.pagination,
            "surviveMode": Images.survival_mode,
            "loremText": Images.Lorem_ipsum_text,
            "nextButton": Images.btn_next_ACTIVE,
            "prevButton": Images.btn_next_passive,
            "more": "MORE",
        }
    }
    const camping = {
        data :[
        {
            "backgroungImg": Images.forest_house,
            "icon": Images.ico_youtube,
            "date": Images.ShelterMaking,
            "text": Images.lorem_white
        },
        {
            "backgroungImg": Images.tea,
            "icon": Images.pictures,
            "date": Images.ShelterMaking,
            "text": Images.lorem_white
        },
        // {
        //     "backgroungImg": Images.gallery,
        //     "text": Images.lorem_black,
        //     "more": "MORE",
        // }
        ]
    }
    const footer = {
        data : [
            {
                "footerImg":Images.footerBackground,
                "adventureBlack":Images.AdventureBlack,
                "challengeContent":Images.challenges,
                "advices":Images.advices,
                "footergallery":Images.footergallery,
                "social":Images.social,
            }
        ]
    }
    
    return (
        <div>
            <Header />
            <BannerContainer />
            <PopularContainer dataCollection={challenges} MissionCollection={Mission} />
            <SurviveContainer ChanceCollection={Chance} ShareResultCollection={shareResult} />
            <SurviveModeContainer adviceCollection={advice} adventureCollection={adventure} />
            <CampingContainer campingCollection={camping} />
            <FooterContainer footerCollection={footer}/>
        </div>
    );
}

export default HomePage;