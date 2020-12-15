import { useSelector } from "react-redux";
import Translations from "../Settings/Translations";

function ConnectionProblemInfo() {
  const lang = useSelector((state) => state.system.language);

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">
          {Translations.connectionError[lang]}
        </h1>
        <p className="lead text-muted">
          {Translations.connectionProblemInfo[lang]}
        </p>
      </div>
    </section>
  );
}

export default ConnectionProblemInfo;
