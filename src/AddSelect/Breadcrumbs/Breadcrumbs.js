import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Breadcrumbs = ({
  items,
  crumbHandler,
}) => {
  return (
    <ul className="crumb">
      {items.map((item, idx) => (
        <Breadcrumb
          key={item.guid}
          active={idx !== items.length - 1}
          onClick={crumbHandler}
          idx={idx}
          guid={item.guid}
        >
          {item.label}
        </Breadcrumb>
      )
      )}
    </ul>
  )
}
export default Breadcrumbs;
