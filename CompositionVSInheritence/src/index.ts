import { MatchReader } from './composition/MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalyzerWithConsoleReport('Man United');
summary.buildandPrintReport(matchReader.matches);
