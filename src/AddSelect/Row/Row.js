import cx from 'classnames';
import { prefix } from "../../constants"
import {
  BiRadioCircle,
  BiRadioCircleMarked,
  BiChevronRight,
} from 'react-icons/bi';

const Row = ({
  guid,
  name,
  selected,
  setSelected,
  parentId,
  children,
  parentHandler,
}) => {
  const onSelectKeyDown = ({ key }) => {
    if (key === 'Enter') {
      onSelectHandler();
    }
  };
  const onSelectHandler = () => {
    setSelected(guid);
  };

  const onDrillDownHandler = (e) => {
    e.stopPropagation();
    parentHandler(guid, name);
  };

  const isSelected = selected === guid;
  return (
    <div
      className={cx(`${prefix}__row`, {
        [`${prefix}__row--selected`]: isSelected,
      })}
      onClick={onSelectHandler}
      onKeyDown={onSelectKeyDown}
      tabIndex={0}
    >
      <div className={`${prefix}__input-group`}>
        {isSelected ? (
          <BiRadioCircleMarked size="2rem" onClick={onSelectHandler} />
        ) : (
          <BiRadioCircle size="2rem" onClick={onSelectHandler} />
        )}
        <p> {name}</p>
      </div>
      {
        children && children.length > 0 && (
          <button
            onClick={onDrillDownHandler}
            className={`${prefix}__row-button`}
          >
            <BiChevronRight size="2rem" />
          </button>
        )
      }
    </div >
  );
};

export default Row;
