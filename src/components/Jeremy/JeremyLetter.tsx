import { useDispatch, useSelector } from "react-redux";
import {
  getAreAllJeremyLettersClicked,
  getAreAllJerrysFound,
  getJeremyLettersClicked,
} from "../../selectors/jeremy.selectors";
import { clickJeremyLetter } from "../../actions/jeremy.actions";
import cn from "classnames";
import { TJeremyLetter } from "../../reducers/jeremy.reducers";

interface IProps {
  letterString: string;
  letterCode: TJeremyLetter;
}

const JeremyLetter = (props: IProps) => {
  const clickedLetters = useSelector(getJeremyLettersClicked);
  const areAllJerrysFound = useSelector(getAreAllJerrysFound);

  const dispatch = useDispatch();
  const onClick = () => {
    if (areAllJerrysFound) {
      dispatch(clickJeremyLetter(props.letterCode));
    }
  };

  return (
    <span
      className={cn({
        "jeremy-letter": areAllJerrysFound,
        "jeremy-letter--clicked": clickedLetters[props.letterCode] === true,
      })}
      onClick={onClick}
    >
      {props.letterString}
    </span>
  );
};

export default JeremyLetter;
