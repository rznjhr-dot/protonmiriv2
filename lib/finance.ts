import type { Model } from "./vehicles";

export interface FinanceInput {
  otr: number;
  rebate: number;
  rebateEnabled: boolean;
  depositPercent: number;
  customDeposit: number | null;
  tenure: number;
  interestRate: number;
}

export interface FinanceResult {
  effectivePrice: number;
  rebateAmount: number;
  depositAmount: number;
  loanAmount: number;
  totalInterest: number;
  totalRepayment: number;
  monthly: number;
  effectiveRate: number;
}

export function calculateFinance(input: FinanceInput): FinanceResult {
  const effectivePrice = input.rebateEnabled
    ? input.otr - input.rebate
    : input.otr;

  const rebateAmount = input.rebateEnabled ? input.rebate : 0;

  const depositAmount =
    input.customDeposit !== null && input.customDeposit > 0
      ? Math.min(input.customDeposit, effectivePrice)
      : effectivePrice * (input.depositPercent / 100);

  const loanAmount = effectivePrice - depositAmount;

  const annualRate = input.interestRate / 100;
  const n = input.tenure * 12;

  let monthly: number;
  let totalRepayment: number;
  let totalInterest: number;

  if (annualRate === 0 || n === 0) {
    monthly = input.tenure > 0 ? loanAmount / n : 0;
    totalRepayment = loanAmount;
    totalInterest = 0;
  } else {
    // Flat Rate (Original Rate) method — standard Malaysian hire purchase
    totalInterest = loanAmount * annualRate * input.tenure;
    totalRepayment = loanAmount + totalInterest;
    monthly = totalRepayment / n;
  }

  return {
    effectivePrice,
    rebateAmount,
    depositAmount,
    loanAmount,
    totalInterest,
    totalRepayment,
    monthly,
    effectiveRate: input.interestRate,
  };
}

export function fmt(n: number): string {
  return Math.round(n).toLocaleString("en-MY");
}

export function fmtDec(n: number): string {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** Minimum monthly instalment (90% loan + rebate, 9-year tenure) */
export function getMinMonthly(model: Model): number {
  const cheapest = model.variants.reduce((min, v) =>
    v.otr - v.rebate < min.otr - min.rebate ? v : min
  );
  const effectivePrice = cheapest.otr - cheapest.rebate;
  const loanAmount = effectivePrice * 0.9;
  const rate = model.interestRate / 100;
  const tenure = 9;
  const totalInterest = loanAmount * rate * tenure;
  const totalRepayment = loanAmount + totalInterest;
  return totalRepayment / (tenure * 12);
}
