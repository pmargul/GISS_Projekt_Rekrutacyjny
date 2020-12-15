import { useSelector } from "react-redux";
import Translations from "../../Settings/Translations";

function SearchBar(props) {
  const lang = useSelector(state => state.system.language)
  return (
    <div className="col-3">
      <input
        style={{ float: props.floatLeft? "left":"right"}}
        value={props.inputValue}
        onChange={(e) => props.onValueChange(e.target.value)}
        placeholder={`${Translations.search[lang]}...`}
        className="form-control"
      />
    </div>
  );
}

export default SearchBar;
