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

  const getTabIndex = () => {
    if (index === 0 && focus === '') {
      return 0;
    }

    if (focus === index && focus !== '') {
      return 0;
    }

    return -1;
  };

  const tabIndex = getTabIndex();

  useEffect(() => {
    if (focus === index) {
      ref.current.focus();
    }
  }, [focus, index]);

  const focusHandler = useCallback((reset) => {
    console.log(reset);
    setFocus(reset ? '' : index);
  }, [index, setFocus]);

  const onSelectKeyDown = ({ key }) => {
    if (key === 'Enter') {
      onSelectHandler();
    } else if (key === 'ArrowRight') {
      onDrillDownHandler();
    }
  };
  const onSelectHandler = () => {
    setSelected(guid);
  };

  const onDrillDownHandler = () => {
    focusHandler(true);
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
      tabIndex={tabIndex}
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
