import CityAndData from "./City and Data.json";
import MDocexAnos from "./Mock - Média Docente X Anos.json";
import PDocexAnos from "./Mock - Percent Docentes X Anos.json";
import QtdDocexAnos from "./Mock - Qtd Docentes X Anos.json";
import QtdxAnos from "./Mock - QtdxAnos.json";
import QtdxAnosA1 from "./Mock - Qtd X Anos A1.json";
import MProfxAnosA1 from "./Mock - Média prof X Anos A1.json";
import graduacoes from "./graduacoes.json";
import LattesPorAno from "./LattesPorAno.json";

export function getCitiesAndData() {
  const CityData = [...CityAndData];
  return { CityData };
}

export function getQtdxAnos() {
  const QuantidadexAnos = QtdxAnos;
  return { QuantidadexAnos };
}

export function getMediaDocxAnos() {
  const MediaDocentesxAnos = MDocexAnos;
  return { MediaDocentesxAnos };
}

export function getQtdDocentesxAnos() {
  const QtdDocentesxAnos = QtdDocexAnos;
  return { QtdDocentesxAnos };
}

export function getPercentDocentesxAnos() {
  const PDocentesxAnos = PDocexAnos;
  return { PDocentesxAnos };
}

export function getQtdxAnosA1() {
  const QuantidadexAnosA1 = QtdxAnosA1;
  return { QuantidadexAnosA1 };
}

export function getMediaProfxAnosA1() {
  const MProfessorxAnosA1 = MProfxAnosA1;
  return { MProfessorxAnosA1 };
}

export function getGraduacoes() {
  const listGraduacoes = [...graduacoes];
  return { listGraduacoes };
}

export function getLattes() {
  const lattes = [...LattesPorAno];
  return { lattes };
}
