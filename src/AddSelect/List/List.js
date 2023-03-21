import { prefix } from "../../constants";
import Row from "../Row";

const List = ({
  entries,
  data,
  ...rest
}) => (
  <div className={`${prefix}__list`}>
    {entries.map(guid => (
      <Row
        key={guid}
        {...data[guid]}
        {...rest}
      />
    ))}
  </div>
);

export default List;
