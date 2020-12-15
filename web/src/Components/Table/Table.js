import moment from "moment";
import Translations from "../../Settings/Translations";
import { useSelector } from "react-redux";

function Table(props) {
  const lang = useSelector(state => state.system.language)
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr className="table-header">
            {props.columns.map((col) => {
              return (
                <th scope="col" className="text-center" key={col.key}>
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((el, index) => {
            return (
              <tr
                className={props.selectedRow === el._id ? "table-row-selected" : null}
                key={index}
                onClick={() => {
                  if (el._id === props.selectedRow) props.selectRow(null);
                  else props.selectRow(el._id);
                }}
              >
                {props.columns.map((col) => {
                  let value = "";
                  if (col.boolean) {
                    value = el[col.key] ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={true}
                        onChange={(e) => e.preventDefault()}
                      />
                    ) : (
                      ""
                    );
                  } else if(col.select){
                    const option = col.select.find(opt=>opt.id===el[col.key]);     
                    value = option? option.label : ""
                  } else if (col.datetime) {
                    value = moment(new Date(el[col.key])).format(
                      "YYYY-MM-DD"
                    );
                    if (!el[col.key]) {
                      value = "";
                    }
                  } else {
                    value = el[col.key] ? el[col.key] : "";
                  }

                  return (
                    <td key={index + "-" + col.key} className="text-center">
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody> 
      </table>
      {props.data.length === 0 ? (
          <div style={{ textAlign: "center",fontWeight: 'bold' }}>{Translations.dataLackInfo[lang]}</div>
        ) : null}
    </div>
  );
}
export default Table;
