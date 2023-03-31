import { prefix } from "../../constants";
import Row from "../Row";
import useFocus from "../../useFocus";

const List = ({
  entries,
  data,
  ...rest
}) => {
  const [focus, setFocus] = useFocus(entries.length);
  return (
    <div
      className={`${prefix}__list`}
      role="treegrid"
      aria-label="add select label"
    >
      {entries.map((guid, index) => {
        const entry = data[guid];
        return (
          <Row
            key={guid}
            setFocus={setFocus}
            index={index}
            focus={focus === index}
            setSize={entries.length}
            {...entry}
            {...rest}
          />
        )
      })}
    </div>
  );
};

export default List;
