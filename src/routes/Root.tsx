import { Link } from "react-router-dom";

function Root() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
      <Link to="/ingredients" className="text-2xl  hover:underline">
        Ingredients
      </Link>
      <Link to="/meals" className="text-2xl hover:underline">
        Meals
      </Link>
    </div>
  );
}

export default Root;
