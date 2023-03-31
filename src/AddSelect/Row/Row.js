import { useEffect, useRef, useCallback } from 'react';
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
  children,
  parentHandler,
  focus,
  index,
  setFocus,
  parentId,
  breadcrumbLevel,
  setSize,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  const focusHandler = useCallback(() => {
    console.log(name);
    setFocus(index);
  }, [name, index, setFocus]);

  const onSelectKeyDown = ({ key }) => {
    if (key === 'Enter') {
      onSelectHandler();
    }
  };
  const onSelectHandler = () => {
    focusHandler();
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
      tabIndex={focus ? 0 : -1}
      ref={ref}
      role="row"
      aria-level={breadcrumbLevel}
      aria-setsize={setSize}
      aria-posinset={index + 1}
      aria-selected={isSelected}
    >
      <div
        className={`${prefix}__input-group`}
        role="gridcell"
      >
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
            tabIndex={-1}
            aria-hidden
          >
            <BiChevronRight size="2rem" />
          </button>
        )
      }
    </div >
  );
};

export default Row;
