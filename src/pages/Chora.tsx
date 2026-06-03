import ChoraBanner from "../components/Chora/ChoraBanner";
import ChoraInfoPanel from "../components/Chora/ChoraInfoPanel/ChoraInfoPanel";
import ChoraMap from "../components/Chora/ChoraMap";
import TextBlockWithImage from "../components/TextBlockWithImage/TextBlockWithImage";

const Chora = () => {
    return (
        <div>
            <ChoraBanner />
            <ChoraMap />
            <ChoraInfoPanel />
            <TextBlockWithImage
                imageUrl=""
                paragraphs={[
                    <p><b>Chōra - An AuroraVision Anthology</b> is an ambitious speculative short film made up of five unique storyworlds, each exploring a different flavour of speculative sci fi.</p>,
                    "Across surreal afterlife journeys, post-collapse mythology, faith-driven science fiction, cyberpunk systems of control, and the strange connective tissue of Chōra, this project is designed as both a film and a creative showcase/portfolio for the AuroraVision team.",
                    <p>At its centre is <b>Chōra</b>, a mysterious space between realities. A membrane between universes. A place where fragments of different worlds, systems, beliefs, and timelines seem to overlap. Each story stands on its own, with its own tone, style, and visual language, but together they form one connected anthology film.</p>,
                    <p>This project is about building story worlds. <br />
                        Not just one, but a constellation of them.</p>
                ]}
                title="The Project"
            />
            <TextBlockWithImage
                imageUrl=""
                bgColour="grey"
                isReverse
                paragraphs={[
                    <p>We are raising money to help bring the next stage of this anthology to life. The first two vignettes, <b>Momentum</b> & <b>Second Genesis</b>, have already been shot using the resources, gear, and volunteers we could put together ourselves. Now, we want to take the project further and give each piece the level of craft, care, and ambition they deserve.</p>,
                    "This campaign will help us support our cast and crew, build interesting sets, create unique costumes and props, access shooting locations, further develop compelling VFX and animation, and continue building inclusive creative pipelines for emerging filmmakers in Te Whanganui-a-Tara.",
                    "We believe in ambitious, independent genre filmmaking.",
                    "We believe in the creative community around us.",
                    "And we believe this project can become a platform for the next wave of unique, artist driven filmmaking in Te Whanganui-a-Tara~!"
                ]}
                title="The Fundraiser"
            />
            <TextBlockWithImage
                imageUrl=""
                paragraphs={[
                    "The AuroraVision Anthology is one short film made up of five distinct storyworlds, with each vignette into they storyworlds highlighting and pushing different aspects of the skillsets within the AuroraVision collective & our wider collaborative filmaking community in Te Whanganui-a-Tara.",
                    "Each world stands alone, but they are all connected by Chōra, the liminal space between realities."
                ]}
                title="The Film"
            />
        </div>
    )
}

export default Chora;