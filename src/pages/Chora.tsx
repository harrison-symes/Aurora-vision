import { Helmet } from "react-helmet-async";
import ChoraBanner from "../components/Chora/ChoraBanner";
import ChoraInfoPanel from "../components/Chora/ChoraInfoPanel/ChoraInfoPanel";
import ChoraMap from "../components/Chora/ChoraMap/ChoraMap";
import FundraiseBanner from "../components/Chora/FundraiseBanner/FundraiseBanner";
import WeWillShare from "../components/Chora/WeWillShare/WeWillShare";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import AboutUsChora from "../components/Chora/AboutUs/AboutUsChora";
import YoutubeBlock from "../components/YoutubeBlock/YoutubeBlock";
import BTSCarousel from "../components/Chora/BehindTheScenes/BTSCarousel";

import project_icon from "../assets/images/chora/icons/project_icon.png"
import fundraiser_icon from "../assets/images/chora/icons/fundraiser_icon.png"
import impact_icon from "../assets/images/chora/icons/impact_icon.png"
import SplitTextPanel from "../components/SplitTextPanel/SplitTextPanel";

const Chora = () => {
    return (
        <div>
            <Helmet>
                <title>Chōra | Auroravision</title>
                <meta
                    name="description"
                    content="Chōra is an anthology short film exploring five distinct sci-fi storyworlds."
                />
                <link rel="canonical" href="https://www.auroravision.nz/chora" />
            </Helmet>
            
            <ChoraBanner />
            <ChoraMap />
            <ChoraInfoPanel />
            <YoutubeBlock
                paragraphs={[
                    <p><b>Chōra - An AuroraVision Anthology</b> is an ambitious speculative short film made up of five unique storyworlds, each exploring a different flavour of <span className="nowrap">speculative sci fi.</span></p>,
                    <p>Across a surreal afterlife journey, a post-collapse mythology, future faiths, cyberpunk systems of control, and the strange connective tissue of Chōra, this project is designed as both a film and a creative showcase for <span className="nowrap">the AuroraVision team.</span></p>,
                    <p>At its centre is <b>Chōra</b>, a mysterious space between realities. A membrane between universes. A place where fragments of different worlds, systems, beliefs, and timelines seem to overlap. Each story stands on its own, with its own tone, style, and visual language, but together they form one connected anthology film.</p>,
                    <p>This project is about building story worlds. <br />
                        Not just one, but a constellation of them.</p>
                ]}
                videoId="csSuSydxKvM"
                variant="splitWithTitle"
                title="THE PROJECT"
                titleIcon={project_icon}
                isReverse
                heightRatio={9 / 16}
            />
            <FundraiseBanner />
            <SplitTextPanel 
                leftContent={{
                    paragraphs: [
                        <>We are raising money to help bring the next stage of this anthology to life. The first two vignettes, <b>Momentum</b> & <b>Second Genesis</b>, have already been shot using the resources, gear, and volunteers we could put together ourselves. Now, we want to take the project further and give each piece the level of craft, care, and ambition they deserve.</>,
                        "This campaign will help us support our cast and crew, build interesting sets, create unique costumes and props, access shooting locations, further develop compelling VFX and animation, and continue building inclusive creative pipelines for emerging filmmakers in Te Whanganui-a-Tara.",
                        "We believe in ambitious, independent genre filmmaking.",
                        "We believe in the creative community around us.",
                        "And we believe this project can become a platform for the next wave of unique, artist driven filmmaking in Te Whanganui-a-Tara~!"
                    ],
                    title: "THE FUNDRAISER",
                    titleIcon: fundraiser_icon,
                }}
                rightContent={{
                    paragraphs: [
                        <>
                            Backing this campaign means supporting more than one short film. <br />
                            You are helping us build a slate of stories.
                        </>,
                        <>
                            You are helping emerging filmmakers gain experience on ambitious projects. <br />
                            You are helping us create practical opportunities for emerging artists, performers, designers, VFX artists, and crew in Te Whanganui-a-Tara.
                        </>,
                        <>You are helping us develop a sustainable creative pipeline for AuroraVision and the wider indie film community around us.</>,
                        <>Most importantly, you are helping us prove that we do not need to wait for permission from funding bodies to make the kind of work we believe in!</>
                    ],
                    title: "THE IMPACT",
                    titleIcon: impact_icon
                }}
            />
            <BTSCarousel />
            <WeWillShare />
            <AboutUsChora />
            <FundraiseBanner />
        </div>
    )
}

export default Chora;