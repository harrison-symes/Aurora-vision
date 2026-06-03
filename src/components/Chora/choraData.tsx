import momentum from "../../assets/images/chora/momentum.png";
import coherence from "../../assets/images/chora/coherence.png";
import god_complex from "../../assets/images/chora/god_complex.png";
import second_genesis from "../../assets/images/chora/second_genesis.png";
import octopod from "../../assets/images/chora/octopod.png";

export interface ChoraData {
    name: ChoraWorlds;
    status: string;
    description: string | React.ReactNode;
    image: string;
}

export enum ChoraWorlds {
    Momentum = "Momentum",
    Coherence = "Coherence",
    SecondGenesis = "Second Genesis",
    Octopod = "Octopod",
    GodComplex = "God Complex"
}

export const mapWorldToData: Record<ChoraWorlds, ChoraData> = {
    [ChoraWorlds.Momentum]: {
        name: ChoraWorlds.Momentum,
        status: "Post Production",
        description: (
            <div>
                <p>A man falls down a flight of stairs and is transported into a surreal, shifting realm of pain, memory, and identity.</p>
                <p>Momentum is a visual and physical journey through the body and mind, using movement, music, green screen, VFX, and dreamlike imagery to explore what pain feels like from the inside.</p>
            </div>
        ),
        image: momentum
    },
    [ChoraWorlds.Coherence]: {
        name: ChoraWorlds.Coherence,
        status: "Developing Script",
        description: (
            <span>
                <p>
                    In Coherence, we follow two characters who exist within Chōra itself; The Observer and the Chorus Orb. They move through the fragments of these worlds together. 
                </p>
                <p>
                    The Observer searches for meaning, patterns, and systems. The Chorus Orb offers something stranger: consensus, surrender, and the possibility of “true understanding”
                </p>
            </span>
        ),
        image: coherence
    },
    [ChoraWorlds.GodComplex]: {
        name: ChoraWorlds.GodComplex,
        status: "Pre Prodction",
        description: (
            <span>
                <p>Far in the future, a group of techno-religious pilgrims are stranded on an alien world, awaiting divine intervention.</p>
                <p>Their faith is built around a vast artificial intelligence known as Father, a silent system they believe guides their holy missions. But as supplies run low and belief begins to fracture, the line between miracle, machine, and indifference starts to collapse.</p>
            </span>
        ),
        image: god_complex
    },
    [ChoraWorlds.Octopod]: {
        name: ChoraWorlds.Octopod,
        status: "Developing Script",
        description: (
            <span>
                <p>In a future where all power has been centralised to those who own the tools for automation, a man struggles to keep the plates of his life spinning.</p>
                <p>No longer able to afford the Artificial Intelligence to operate his 8 machine workers, he must take control of each of these machines, one at a time.</p>
            </span>
        ),
        image: octopod
    },
    [ChoraWorlds.SecondGenesis]: {
        name: ChoraWorlds.SecondGenesis,
        status: "Pre Production",
        description: (
            <span>
                <p>Set in a post-collapse Aotearoa, Second Genesis follows a community of people who come to worship a robot as a god.</p>
                <p>Old technology has become myth. Broken systems have become ritual. Offerings of techno-trash are brought to the machine, which slowly begins using them to build something new.</p>
            </span>
        ),
        image: second_genesis
    },
}