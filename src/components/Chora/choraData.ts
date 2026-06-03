import momentum from "../../assets/images/chora/momentum.png";
import coherence from "../../assets/images/chora/coherence.png";
import god_complex from "../../assets/images/chora/god_complex.png";
import second_genesis from "../../assets/images/chora/second_genesis.png";
import octopod from "../../assets/images/chora/octopod.png";

export interface ChoraData {
    name: ChoraWorlds;
    status: string;
    description: string;
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
        description: "",
        image: momentum
    },
    [ChoraWorlds.Coherence]: {
        name: ChoraWorlds.Coherence,
        status: "",
        description: "",
        image: coherence
    },
    [ChoraWorlds.GodComplex]: {
        name: ChoraWorlds.GodComplex,
        status: "",
        description: "",
        image: god_complex
    },
    [ChoraWorlds.Octopod]: {
        name: ChoraWorlds.Octopod,
        status: "",
        description: "",
        image: second_genesis
    },
    [ChoraWorlds.SecondGenesis]: {
        name: ChoraWorlds.SecondGenesis,
        status: "",
        description: "",
        image: octopod
    },
}