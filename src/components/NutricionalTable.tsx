import { FC } from "react";
import { Ingredient } from "../types/ingredient.type";
import clsx from "clsx";

type NutricionalTableProps = {
  ingredient: Ingredient;
  className?: string;
};

const NutricionalTable: FC<NutricionalTableProps> = ({
  ingredient,
  className,
}) => {
  return (
    <section
      className={clsx(
        "w-fit max-w-sm min-w-72 border-black border-solid border-2 py-2 px-4",
        className
      )}
    >
      <div className="py-2 border-b-8 border-b-black">
        <h1 className="text-lg font-bold">{ingredient.name}</h1>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr>
            <th colSpan={3}>
              <p className="">
                <span className="font-bold">Measurement</span>{" "}
                <span>{`${ingredient.measurement.value} ${ingredient.measurement.unit.symbol}`}</span>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-4 border-b-black">
            <th colSpan={2}>
              <p className="text-sm">
                <span className="font-bold">Calories</span>
              </p>
            </th>
            <td className="text-right">
              <span>
                {
                  ingredient.proximates.find((p) => p.name === "energy")
                    ?.quantity
                }
              </span>{" "}
              <span>
                {
                  ingredient.proximates.find((p) => p.name === "energy")?.unit
                    .symbol
                }
              </span>
            </td>
          </tr>

          <tr className="">
            <th colSpan={3}>
              <p className="text-sm">
                <span className="font-bold">Proximates</span>
              </p>
            </th>
          </tr>
          {ingredient.proximates.map((proximate) => {
            if (proximate.name === "energy") return;

            return (
              <tr>
                <td className="w-6"></td>
                <td>
                  <span className="font-bold">{proximate.name}</span>{" "}
                </td>
                <td className="text-right">
                  <span className="font-bold">{proximate.quantity}</span>{" "}
                  <span>{proximate.unit.symbol}</span>
                </td>
              </tr>
            );
          })}

          <tr className="">
            <th colSpan={3}>
              <p className="text-sm">
                <span className="font-bold">Minerals</span>
              </p>
            </th>
          </tr>
          {ingredient.minerals.map((mineral) => {
            return (
              <tr>
                <td className="w-6"></td>
                <td>
                  <span className="font-bold">{mineral.name}</span>{" "}
                </td>
                <td className="text-right">
                  <span className="font-bold">{mineral.quantity}</span>{" "}
                  <span>{mineral.unit.symbol}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default NutricionalTable;
