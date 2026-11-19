import type { Post } from "../types";
import { saccoDigitisationEthiopia } from "./01-sacco-digitisation-ethiopia";
import { ethiopianSaccoStatisticsExplained } from "./02-ethiopian-sacco-statistics-explained";
import { saccoDepositsByRegion } from "./03-sacco-deposits-by-region";
import { ethiopiaSaccoGrowthHistory } from "./04-ethiopia-sacco-growth-history";

/**
 * Long-form editorial, one file per article. Each has its own structure —
 * see the Block union in ../types.
 */
export const articles: Post[] = [
  saccoDigitisationEthiopia,
  ethiopianSaccoStatisticsExplained,
  saccoDepositsByRegion,
  ethiopiaSaccoGrowthHistory,
].sort((a, b) => (a.date < b.date ? 1 : -1));
