import cx from 'classnames';

const Breadcrumb = ({
  children,
  idx,
  active,
  onClick,
  guid,
}) => {
  const onClickHandler = () => {
    onClick(idx, guid);
  };

  const onKeyHandler = ({ key }) => {
    if (key === 'Enter') {
      onClickHandler(idx, guid);
    }
  };

  const props = {
    onClick: onClickHandler,
    onKeyDown: onKeyHandler,
    className: cx('crumb-item', {
      'crumb-item--active': active,
    }),
    children,
    ...(active && { tabIndex: 0 }),
  };
  return <li {...props} />
}

export default Breadcrumb;
