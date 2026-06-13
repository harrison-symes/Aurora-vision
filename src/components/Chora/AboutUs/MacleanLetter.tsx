import cn from "classnames"
import { useDispatch, useSelector } from "react-redux";
import { clickMacleanLetter } from "../../../reducers/chora.reducers";
import { getMacleanLetters } from "../../../selectors/chora.selectors";

interface IProps {
    letter: string;
    code?: string;
}

const MacleanLetter = (props: IProps) => {
    const dispatch = useDispatch()
    const macleanLetters = useSelector(getMacleanLetters)

    const key = (props.code ?? props.letter) as keyof ReturnType<typeof getMacleanLetters>

    const onClick = () => {
        dispatch(clickMacleanLetter(key))
    }

    return (
        <span className={cn("mac-letter", {
            "clicked": macleanLetters[key] === true
        })} onClick={onClick}>{props.letter}</span>
    )
}

export default MacleanLetter