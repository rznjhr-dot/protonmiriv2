import { PHONE_NUMBER } from "./constants";

export interface WhatsAppData {
  model: string;
  price: string;
  deposit: string;
  loan: string;
  tenure: string;
  interest: string;
  monthly: string;
}

export function generateWhatsAppUrl(data: WhatsAppData): string {
  const sanitised = {
    ...data,
    interest: String(parseFloat(data.interest) || 0),
  };

  const msg = [
    "Hi Sheena,",
    "",
    "Saya berminat dengan " + sanitised.model + ".",
    "",
    "Model: " + sanitised.model,
    "Price: RM" + sanitised.price,
    "Deposit: RM" + sanitised.deposit,
    "Loan: RM" + sanitised.loan,
    "Tenure: " + sanitised.tenure + " Years",
    "Interest: " + sanitised.interest + "% EIR",
    "Monthly: RM" + sanitised.monthly,
    "",
    "Boleh bantu saya dengan quotation rasmi?",

  ].join("\n");

  const base = "https://wa.me/" + PHONE_NUMBER;
  return base + "?text=" + encodeURIComponent(msg);
}

export function generateWhatsAppBookingUrl(data: WhatsAppData): string {
  const sanitised = {
    ...data,
    interest: String(parseFloat(data.interest) || 0),
  };

  const msg = [
    "Hi Sheena,",
    "",
    "Saya nak place booking untuk " + sanitised.model + "!",
    "",
    "Model: " + sanitised.model,
    "Price: RM" + sanitised.price,
    "Deposit: RM" + sanitised.deposit,
    "Loan: RM" + sanitised.loan,
    "Tenure: " + sanitised.tenure + " Years",
    "Interest: " + sanitised.interest + "% EIR",
    "Monthly: RM" + sanitised.monthly,
    "",
    "Boleh bantu saya dengan proses booking? Terima kasih!",

  ].join("\n");

  const base = "https://wa.me/" + PHONE_NUMBER;
  return base + "?text=" + encodeURIComponent(msg);
}
