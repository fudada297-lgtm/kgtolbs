export function kgToLbs(kg: number): number {
  return kg * 2.20462262185;
}

export function lbsToKg(lbs: number): number {
  return lbs / 2.20462262185;
}

export function formatNumber(n: number, decimals: number = 4): string {
  return parseFloat(n.toFixed(decimals)).toString();
}
