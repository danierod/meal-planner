export interface Food {
  name: string;
  description: string;
  group: string;
  subGroup: string;
  measurement: Measurement;
  proximates: Proximates[];
  minerals: Mineral[];
}

export interface Proximates {
  name: string;
  symbol?: string;
  quantity: string;
  unit: Unit;
  subInformation?: Proximates[];
}

export interface Mineral {
  name: string;
  symbol?: string;
  quantity: string;
  unit: Unit;
}

export interface Measurement {
  unit: Unit;
  value: number;
}

export interface Unit {
  name: UnitName;
  symbol: UnitSymbol;
}

export enum UnitName {
  Gram = "gram",
  Kilocalorie = "kilocalorie",
  Microgram = "microgram",
  Millilitre = "millilitre",
}

export enum UnitSymbol {
  G = "g",
  Kcal = "kcal",
  Mg = "mg",
  Ml = "ml",
}
