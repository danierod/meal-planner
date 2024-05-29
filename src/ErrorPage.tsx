import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}`;
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold mb-4">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-400">
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
