import "./AboutUsChora.scss"

import harrison from "../../../assets/images/chora/harrison.webp"
import james from "../../../assets/images/chora/james.webp"
import weston from "../../../assets/images/chora/weston.webp"
import charlie from "../../../assets/images/chora/charlie.webp"
import esther from "../../../assets/images/chora/esther.webp"
import jeremy from "../../../assets/images/chora/jeremy.webp"
import jeremy_2 from "../../../assets/images/chora/jeremy_2.webp"
import manny from "../../../assets/images/chora/manny.webp"
import AboutUsFrame from "./AboutUsFrame"
import { useSelector } from "react-redux"
import { getAreAllJerrysFound } from "../../../selectors/jeremy.selectors"
import MacleanLetter from "./MacleanLetter"
import { getAreMacleanLettersClicked, getMacleanLetters } from "../../../selectors/chora.selectors"

const AboutUsChora = () => {
    const areAllJerrysFound = useSelector(getAreAllJerrysFound)
    const areMacleanLettersClicked = useSelector(getAreMacleanLettersClicked)
    const clickedMacleanLetters = useSelector(getMacleanLetters)
    const macleanStarted = clickedMacleanLetters.m === true
    
    return (
        <div className="about-us-chora">
            <h2 className="about-us-chora__title">
                {
                    areMacleanLettersClicked
                        ? (
                            <>
                                The many faces of{" "}
                                <span className="about-us-chora__title--pink">Maclean</span>
                            </>
                        ) : (
                            <>
                                The minds behind{" "}
                                <span className="about-us-chora__title--pink">Chōra</span>
                            </>
                        )
                }
            </h2>
            <div className="about-us-chora__inner">
                <AboutUsFrame
                    idx={1}
                    image={james}
                    name={<span>Ja<MacleanLetter letter="m" />es Tweddle</span>}
                    alt="James Tweddle"
                    roles={["Showrunner", "Director", "Writer"]}
                />
                <AboutUsFrame
                    idx={2}
                    image={weston}
                    name="Weston Symes"
                    alt="Weston Symes"
                    roles={["Head of VFX", "Writer"]}
                />
                <AboutUsFrame
                    idx={3}
                    image={esther}
                    name={macleanStarted ? <span>Esther Sush<MacleanLetter letter="a" />mes</span>: "Esther Sushames"}
                    alt="Esther Sushames"
                    roles={["Co-Producer"]}
                />
                <AboutUsFrame
                    idx={4}
                    image={manny}
                    name={macleanStarted ? <span>Manny <MacleanLetter letter="c" />aba<MacleanLetter letter="l"/>l<MacleanLetter letter="e"/>ro</span> : "Manny Caballero"}
                    alt="Manny Caballero"
                    roles={["Co-Producer"]}
                />
                <AboutUsFrame
                    idx={5}
                    image={areAllJerrysFound ? jeremy_2 : jeremy}
                    name="Jeremy Brow"
                    alt="Jeremy Brow"
                    roles={["Operations", "Writer"]}
                />
                <AboutUsFrame
                    idx={6}
                    image={charlie}
                    name={macleanStarted ? <span>Ch<MacleanLetter letter="a" code="a2" />rlie Jo<MacleanLetter letter="n"/>es</span> : "Charlie Jones"}
                    alt="Charlie Jones"
                    roles={["Head of Art", "Actor", "Writer"]}
                />
                <AboutUsFrame
                    idx={7}
                    image={harrison}
                    name="Harrison Symes"
                    alt="Harrison Symes"
                    roles={["Web Dev", "Writer"]}
                />
            </div>
        </div>
    )
}

export default AboutUsChora