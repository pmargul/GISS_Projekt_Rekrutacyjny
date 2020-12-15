import { getPaginationData } from "../../../Services/Calculations";
import PageItem from "./PageItem";

function Pagination(props) {
  const { selectedPage, selectPage } = props;
  const elements = getPaginationData(props.length, selectedPage);
  return (
    <div className="col">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link btn-outline"
            onClick={() => {
              const prevIndex = selectedPage - 1;
              if (elements.find((page) => page === prevIndex))
                selectPage(prevIndex);
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {elements.map((page) => {
          return (
            <PageItem
              selected={selectedPage === page}
              key={page}
              value={page}
              onClick={() => selectPage(page)}
            />
          );
        })}
        <li className="page-item">
          <button
            className="page-link btn-outline"
            onClick={() => {
              const prevIndex = selectedPage + 1;
              if (elements.find((page) => page === prevIndex))
                selectPage(prevIndex);
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Pagination;
