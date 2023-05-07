import { Link, useRouteError } from "react-router-dom";
import "./error.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error">
      <h1>Oops ✋🏻</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="btn-back" to="/">
        Voltar
      </Link>
    </div>
  );
};

export default ErrorPage;
