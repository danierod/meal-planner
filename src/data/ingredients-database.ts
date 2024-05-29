import { Ingredient, UnitName, UnitSymbol } from "../types/ingredient.type";

const ingredientsDatabase: Ingredient[] = [
  {
    id: 1,
    name: "chicken, thigh, boneless, skinless, raw",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    group: "Poultry Products",
    subGroup: "Poultry",
    measurement: {
      unit: {
        name: UnitName.Gram,
        symbol: UnitSymbol.G,
      },
      value: 100,
    },
    proximates: [
      {
        name: "water",
        quantity: "72.9",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "energy",
        quantity: "149",
        unit: {
          name: UnitName.Kilocalorie,
          symbol: UnitSymbol.Kcal,
        },
      },
      {
        name: "nitrogen",
        quantity: "2.98",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "protein",
        quantity: "18.6",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "total lipid (fat)",
        quantity: "7.92",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "saturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "mono unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "poly unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "trans fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "cholesterol",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
      {
        name: "ash",
        quantity: "0.96",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "carbohydrates",
        quantity: "0",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "dietary fiber",
            quantity: "2",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "total sugars",
            quantity: "10",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "added sugars",
            quantity: "8",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
    ],
    minerals: [
      {
        name: "calcium",
        symbol: "Ca",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "iron",
        symbol: "Fe",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "magnesium",
        symbol: "Mg",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Phosphorus",
        symbol: "P",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "potassium",
        symbol: "K",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Sodium",
        symbol: "Na",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Zinc",
        symbol: "Zn",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Copper",
        symbol: "Cu",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Manganese",
        symbol: "Mn",
        quantity: "<0.0125",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
    ],
  },
  {
    id: 2,
    name: "chicken, breast, boneless, skinless, raw",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    group: "Poultry Products",
    subGroup: "Poultry",
    measurement: {
      unit: {
        name: UnitName.Gram,
        symbol: UnitSymbol.G,
      },
      value: 100,
    },
    proximates: [
      {
        name: "water",
        quantity: "72.9",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "energy",
        quantity: "149",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "nitrogen",
        quantity: "2.98",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "protein",
        quantity: "18.6",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "total lipid (fat)",
        quantity: "7.92",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "saturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "mono unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "poly unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "trans fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "cholesterol",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
      {
        name: "ash",
        quantity: "0.96",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "carbohydrates",
        quantity: "0",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "dietary fiber",
            quantity: "2",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "total sugars",
            quantity: "10",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "added sugars",
            quantity: "8",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
    ],
    minerals: [
      {
        name: "calcium",
        symbol: "Ca",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "iron",
        symbol: "Fe",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "magnesium",
        symbol: "Mg",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Phosphorus",
        symbol: "P",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "potassium",
        symbol: "K",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Sodium",
        symbol: "Na",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Zinc",
        symbol: "Zn",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Copper",
        symbol: "Cu",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Manganese",
        symbol: "Mn",
        quantity: "<0.0125",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
    ],
  },
  {
    id: 3,
    name: "pork steak",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    group: "Poultry Products",
    subGroup: "Poultry",
    measurement: {
      unit: {
        name: UnitName.Gram,
        symbol: UnitSymbol.G,
      },
      value: 100,
    },
    proximates: [
      {
        name: "water",
        quantity: "72.9",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "energy",
        quantity: "149",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "nitrogen",
        quantity: "2.98",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "protein",
        quantity: "18.6",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "total lipid (fat)",
        quantity: "7.92",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "saturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "mono unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "poly unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "trans fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "cholesterol",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
      {
        name: "ash",
        quantity: "0.96",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "carbohydrates",
        quantity: "0",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "dietary fiber",
            quantity: "2",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "total sugars",
            quantity: "10",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "added sugars",
            quantity: "8",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
    ],
    minerals: [
      {
        name: "calcium",
        symbol: "Ca",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "iron",
        symbol: "Fe",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "magnesium",
        symbol: "Mg",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Phosphorus",
        symbol: "P",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "potassium",
        symbol: "K",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Sodium",
        symbol: "Na",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Zinc",
        symbol: "Zn",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Copper",
        symbol: "Cu",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Manganese",
        symbol: "Mn",
        quantity: "<0.0125",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
    ],
  },
  {
    id: 4,
    name: "rice, white",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    group: "Poultry Products",
    subGroup: "Poultry",
    measurement: {
      unit: {
        name: UnitName.Gram,
        symbol: UnitSymbol.G,
      },
      value: 100,
    },
    proximates: [
      {
        name: "water",
        quantity: "72.9",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "energy",
        quantity: "149",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "nitrogen",
        quantity: "2.98",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "protein",
        quantity: "18.6",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "total lipid (fat)",
        quantity: "7.92",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "saturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "mono unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "poly unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "trans fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "cholesterol",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
      {
        name: "ash",
        quantity: "0.96",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "carbohydrates",
        quantity: "0",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "dietary fiber",
            quantity: "2",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "total sugars",
            quantity: "10",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "added sugars",
            quantity: "8",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
    ],
    minerals: [
      {
        name: "calcium",
        symbol: "Ca",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "iron",
        symbol: "Fe",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "magnesium",
        symbol: "Mg",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Phosphorus",
        symbol: "P",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "potassium",
        symbol: "K",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Sodium",
        symbol: "Na",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Zinc",
        symbol: "Zn",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Copper",
        symbol: "Cu",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Manganese",
        symbol: "Mn",
        quantity: "<0.0125",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
    ],
  },
  {
    id: 5,
    name: "lettuce",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    group: "Poultry Products",
    subGroup: "Poultry",
    measurement: {
      unit: {
        name: UnitName.Gram,
        symbol: UnitSymbol.G,
      },
      value: 100,
    },
    proximates: [
      {
        name: "water",
        quantity: "72.9",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "energy",
        quantity: "149",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "nitrogen",
        quantity: "2.98",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "protein",
        quantity: "18.6",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "total lipid (fat)",
        quantity: "7.92",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "saturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "mono unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "poly unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "trans fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "cholesterol",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
      {
        name: "ash",
        quantity: "0.96",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "carbohydrates",
        quantity: "0",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "dietary fiber",
            quantity: "2",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "total sugars",
            quantity: "10",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "added sugars",
            quantity: "8",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
    ],
    minerals: [
      {
        name: "calcium",
        symbol: "Ca",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "iron",
        symbol: "Fe",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "magnesium",
        symbol: "Mg",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Phosphorus",
        symbol: "P",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "potassium",
        symbol: "K",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Sodium",
        symbol: "Na",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Zinc",
        symbol: "Zn",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Copper",
        symbol: "Cu",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Manganese",
        symbol: "Mn",
        quantity: "<0.0125",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
    ],
  },
  {
    id: 6,
    name: "egg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    group: "Poultry Products",
    subGroup: "Poultry",
    measurement: {
      unit: {
        name: UnitName.Gram,
        symbol: UnitSymbol.G,
      },
      value: 100,
    },
    proximates: [
      {
        name: "water",
        quantity: "72.9",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "energy",
        quantity: "149",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "nitrogen",
        quantity: "2.98",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "protein",
        quantity: "18.6",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "total lipid (fat)",
        quantity: "7.92",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "saturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "mono unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "poly unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "trans fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "cholesterol",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
      {
        name: "ash",
        quantity: "0.96",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "carbohydrates",
        quantity: "0",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "dietary fiber",
            quantity: "2",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "total sugars",
            quantity: "10",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "added sugars",
            quantity: "8",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
    ],
    minerals: [
      {
        name: "calcium",
        symbol: "Ca",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "iron",
        symbol: "Fe",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "magnesium",
        symbol: "Mg",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Phosphorus",
        symbol: "P",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "potassium",
        symbol: "K",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Sodium",
        symbol: "Na",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Zinc",
        symbol: "Zn",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Copper",
        symbol: "Cu",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Manganese",
        symbol: "Mn",
        quantity: "<0.0125",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
    ],
  },
  {
    id: 7,
    name: "broculli",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    group: "Poultry Products",
    subGroup: "Poultry",
    measurement: {
      unit: {
        name: UnitName.Gram,
        symbol: UnitSymbol.G,
      },
      value: 100,
    },
    proximates: [
      {
        name: "water",
        quantity: "72.9",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "energy",
        quantity: "149",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "nitrogen",
        quantity: "2.98",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "protein",
        quantity: "18.6",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "total lipid (fat)",
        quantity: "7.92",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "saturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "mono unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "poly unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "trans fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "cholesterol",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
      {
        name: "ash",
        quantity: "0.96",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "carbohydrates",
        quantity: "0",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "dietary fiber",
            quantity: "2",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "total sugars",
            quantity: "10",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "added sugars",
            quantity: "8",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
    ],
    minerals: [
      {
        name: "calcium",
        symbol: "Ca",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "iron",
        symbol: "Fe",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "magnesium",
        symbol: "Mg",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Phosphorus",
        symbol: "P",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "potassium",
        symbol: "K",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Sodium",
        symbol: "Na",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Zinc",
        symbol: "Zn",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Copper",
        symbol: "Cu",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Manganese",
        symbol: "Mn",
        quantity: "<0.0125",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
    ],
  },
  {
    id: 8,
    name: "olive oil",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    group: "Poultry Products",
    subGroup: "Poultry",
    measurement: {
      unit: {
        name: UnitName.Millilitre,
        symbol: UnitSymbol.Ml,
      },
      value: 10,
    },
    proximates: [
      {
        name: "water",
        quantity: "72.9",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "energy",
        quantity: "149",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "nitrogen",
        quantity: "2.98",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "protein",
        quantity: "18.6",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "total lipid (fat)",
        quantity: "7.92",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "saturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "mono unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "poly unsaturated fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "trans fat",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "cholesterol",
            quantity: "1.5",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
      {
        name: "ash",
        quantity: "0.96",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
      },
      {
        name: "carbohydrates",
        quantity: "0",
        unit: {
          name: UnitName.Gram,
          symbol: UnitSymbol.G,
        },
        subInformation: [
          {
            name: "dietary fiber",
            quantity: "2",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "total sugars",
            quantity: "10",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
          {
            name: "added sugars",
            quantity: "8",
            unit: {
              name: UnitName.Gram,
              symbol: UnitSymbol.G,
            },
          },
        ],
      },
    ],
    minerals: [
      {
        name: "calcium",
        symbol: "Ca",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "iron",
        symbol: "Fe",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "magnesium",
        symbol: "Mg",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Phosphorus",
        symbol: "P",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "potassium",
        symbol: "K",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Sodium",
        symbol: "Na",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Zinc",
        symbol: "Zn",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Copper",
        symbol: "Cu",
        quantity: "6",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
      {
        name: "Manganese",
        symbol: "Mn",
        quantity: "<0.0125",
        unit: {
          name: UnitName.Microgram,
          symbol: UnitSymbol.Mg,
        },
      },
    ],
  },
];

export default ingredientsDatabase;
