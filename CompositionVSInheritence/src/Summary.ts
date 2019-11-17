import { MatchData } from './MatchData';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { HtmlReport } from './reportTargets/HtmlReport';
import { ConsoleReport } from './reportTargets/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnalyzer(team), new HtmlReport());
  }

  static winsAnalyzerWithConsoleReport(team: string) {
    return new Summary(new WinsAnalyzer(team), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildandPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
