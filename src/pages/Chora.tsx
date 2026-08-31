import { Helmet } from "react-helmet-async";
import ChoraBanner from "../components/Chora/ChoraBanner";
import ChoraInfoPanel from "../components/Chora/ChoraInfoPanel/ChoraInfoPanel";
import ChoraMap from "../components/Chora/ChoraMap/ChoraMap";
import FundraiseBanner from "../components/Chora/FundraiseBanner/FundraiseBanner";
import WeWillShare from "../components/Chora/WeWillShare/WeWillShare";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";
import AboutUsChora from "../components/Chora/AboutUs/AboutUsChora";
import YoutubeBlock from "../components/YoutubeBlock/YoutubeBlock";
import MomentumBTS from "../components/Chora/BehindTheScenes/MomentumBTS";

import project_icon from "../assets/images/chora/icons/project_icon.webp"
import fundraiser_icon from "../assets/images/chora/icons/fundraiser_icon.webp"
import impact_icon from "../assets/images/chora/icons/impact_icon.webp"
import SplitTextPanel from "../components/SplitTextPanel/SplitTextPanel";
import SecondGenesisStoryboard from "../components/Chora/BehindTheScenes/SecondGenesisStoryboard";

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
                videoId="GWWsemqV6hg"
                variant="splitWithTitle"
                title="THE PROJECT"
                titleIcon={project_icon}
                isReverse
            />
            <FundraiseBanner />
            <SplitTextPanel 
                leftContent={{
                    paragraphs: [
                        <>The AuroraVision Anthology is being produced independently by a passionate team working with limited resources, borrowed gear, personal equipment, favours, and a huge amount of volunteer labour. </>,
                        <>We have already started. <b>Momentum</b> and <b>Second Genesis</b> have been shot, and development is underway on the next pieces of the anthology. Our internal budget forecast gives us a clear baseline for the core production needs, but this campaign is designed to give the project proper breathing room beyond the bare minimum.</>,
                        <>We are raising <b>$10,000</b> to help us complete the next stage of the anthology and support the practical costs of making five unique storyworlds within one film.</>
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
            <SecondGenesisStoryboard />
            <WeWillShare />
            <AboutUsChora />
            <MomentumBTS />
            <FundraiseBanner />
        </div>
    )
}

export default Chora;