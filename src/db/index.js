import CityAndData from "./City and Data.json";
import MDocexAnos from "./Mock - Média Docente X Anos.json";
import MProfxAnosA1 from "./Mock - Média prof X Anos (A1) .json";
import PDocexAnos from "./Mock - Percent Docentes X Anos.json";
import QtdDocexAnos from "./Mock - Qtd Docentes X Anos.json";
import QtdxAnosA1 from "./Mock - Qtd X Anos (A1).json";
import QtdxAnos from "./Mock - QtdxAnos.json";

export function getCitiesAndData() {
  const CityData = [...CityAndData];
  return { CityData };
}
