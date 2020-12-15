import SystemLogo from "./SystemLogo";
import { useSelector, useDispatch } from "react-redux";
import Translations from "../../Settings/Translations";
import { updateLanguageSetup } from "../../Redux/Actions";

function Header() {
  const lang = useSelector(state => state.system.language)
  const dispatch = useDispatch();
  return (
    <div className="navbar header">
      <div className="container d-flex justify-content-between">
        <div className="navbar-brand d-flex align-items-center">
          <SystemLogo />
          <h3 className="text-header strong">
            {Translations.title[lang]}
          </h3>
        </div>
        <div className="navbar-brand d-flex align-items-center right-margin-off">
          <div className="col" style={{marginRight: 20}}>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className={`btn btn-${
                lang.localeCompare("pl-PL") === 0 ? "primary" : "secondary"
              } btn-outline`} onClick={()=>{
                dispatch(updateLanguageSetup("pl-PL"));
              }}>PL</button>
              <button type="button" className={`btn btn-${
                lang.localeCompare("pl-PL") !== 0 ? "primary" : "secondary"
              } btn-outline`} onClick={()=>{
                dispatch(updateLanguageSetup("en-GB"));
              }}>EN</button>
            </div>
          </div>
            <div className="col">
              <div className="jumbotron text-end">
                <div className="col">
                  <div className="row justify-content-end">
                    <label className="text-header">{"Paweł Margul"}</label>
                  </div>
                </div>
              </div>
              <div className="jumbotron text-end">
                  <div className="row justify-content-end">
                    <label className="text-header">
                      {"margulpawel@gmail.com"}
                    </label>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
