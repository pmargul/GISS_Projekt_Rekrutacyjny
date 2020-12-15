const PageItem = (props) => {
  return (
    <li
      className={props.selected ? "page-item active" : "page-item"}
      onClick={() => props.onClick(props.value)}
    >
      <button className="page-link btn-outline">{props.value}</button>
    </li>
  );
};
export default PageItem;
