import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>
        Oops! Seems like there is an error with your search result! We would
        recommend you to check your URL and we Apologise for any incovenience
        caused
      </h1>
      <h3>
        Error {err.status}: Page {err.statusText}
      </h3>
    </div>
  );
};
export default Error;
