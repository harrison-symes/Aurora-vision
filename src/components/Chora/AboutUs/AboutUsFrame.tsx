import { useState } from "react";
import cn from "classnames"
import { useDispatch, useSelector } from "react-redux";
import { clickChoraCircle } from "../../../reducers/chora.reducers";
import { getAreMacleanLettersClicked } from "../../../selectors/chora.selectors";

import maclean from "../../../assets/images/chora/placeholder.webp"
import maclean_2 from "../../../assets/images/chora/maclean_2.webp"
import maclean_3 from "../../../assets/images/chora/maclean_3.webp"
import maclean_4 from "../../../assets/images/chora/maclean_4.webp"
import maclean_5 from "../../../assets/images/chora/maclean_5.webp"
import maclean_6 from "../../../assets/images/chora/maclean_6.webp"
import maclean_7 from "../../../assets/images/chora/maclean_7.webp"

interface IProps {
    name: string | React.ReactNode;
    alt: string;
    image: string;
    roles: string[];
    idx: number;
}

const Circle = () => {
    const [isCircleActive, setIsCircleActive] = useState(false)
    const dispatch = useDispatch()

    const onClick = () => {
        if (!isCircleActive) {
            dispatch(clickChoraCircle())
            setIsCircleActive(true)
        }
    }

    return (
        <span className={cn("about-us-chora__circle", {
            "active": isCircleActive
        })} onClick={onClick}>⭘</span>
    )
}

const getMacleanImage = (idx: number) => {
    switch(idx) {
        case 1:
            return maclean;
        case 2:
            return maclean_2;
        case 3:
            return maclean_3;
        case 4:
            return maclean_4;
        case 5:
            return maclean_5;
        case 6:
            return maclean_6;
        case 7:
            return maclean_7;
        default:
            return maclean;
    }
}

const AboutUsFrame = (props: IProps) => {
    const areMacleanLettersClicked = useSelector(getAreMacleanLettersClicked)

    const image = areMacleanLettersClicked ? getMacleanImage(props.idx) : props.image

    return (
        <div className="about-us-chora__frame">
            <h2 className="about-us-chora__name">{props.name}</h2>
            <img src={image} className="about-us-chora__image" alt={props.alt} />
            {
                props.roles.map(role => (
                    <h3 className="about-us-chora__role"><Circle /> {role}</h3>
                ))
            }
        </div>
    )
}

export default AboutUsFrame