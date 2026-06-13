import { useDispatch, useSelector } from "react-redux"
import { getAreAllCirclesClicked, getIsWorldEESolved, getWorldEEStepsFound } from "../../../selectors/chora.selectors"

import star from "../../../assets/images/chora/chora_star.png"
import pink_star from "../../../assets/images/chora/chora_star_pink.png"
import { selectChoraWorld } from "../../../reducers/chora.reducers"
import { ChoraWorlds } from "../choraData"

import cn from "classnames"

const starText = [
    "A fragment of something... fleeting? A memory? Could there be more...",
    "A thought drums through your mind... Calm... Directive... Move.",
    "You feel as though you are being watched. Strange. The sensation is indiscernibly both a higher power, as well as your own ego.",
    "Your pockets are empty, but the weight of that could almost pull you to your knees.",
    "Not all those who wander are lost."
]

const EEStars = () => {
    const dispatch = useDispatch()
    const steps = useSelector(getWorldEEStepsFound)
    const isSolved = useSelector(getIsWorldEESolved)
    const circlesClicked = useSelector(getAreAllCirclesClicked)

    if ((steps === 0 && !isSolved) && !circlesClicked) {
        return null
    }

    const onClickBlue = () => {
        if (isSolved) {
            dispatch(selectChoraWorld(ChoraWorlds.EE_WANDERER))
        }
    }

    const onClickPink = () => {
        dispatch(selectChoraWorld(ChoraWorlds.EE_COSMOS))
    }

    return (
        <div className={cn("chora-map__ee-stars", {
            "solved": isSolved
        })}>
            {new Array(steps).fill(0).map((_, idx) => (
                <img className="chora-map__ee-star" onClick={onClickBlue} src={star} title={starText[idx] ?? ""} />
            ))}
            {
                circlesClicked && (
                    <img className="chora-map__ee-star pink" onClick={onClickPink} src={pink_star} />
                )
            }
        </div>
    )
}

export default EEStars