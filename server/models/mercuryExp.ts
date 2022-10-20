import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  postalCode: { type: String },
});

const addressXSchema = new mongoose.Schema({
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  region: { type: String },
  postalCode: { type: String },
  country: { type: String },
});

const domesticWireRoutingInfoSchema = new mongoose.Schema({
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  region: { type: String },
  postalCode: { type: String },
  country: { type: String },
});

const electronicRoutingInfoSchema = new mongoose.Schema({
  accountNumber: { type: String },
  routingnumber: { type: String },
  bankName: { type: String },
});

const correspondentInfoSchema = new mongoose.Schema({
  routingNumber: { type: String },
  swiftCode: { type: String },
  bankName: { type: String },
});

const bankDetailsSchema = new mongoose.Schema({
  bankName: { type: String },
  cityState: { type: String },
  country: { type: String },
});
const countrySpecificDataCanadaSchema = new mongoose.Schema({
  bankCode: { type: String },
  transitNumber: { type: String },
});

const countrySpecificDataAustraliaSchema = new mongoose.Schema({
  bsbCode: { type: String },
});

const countrySpecificDataIndiaSchema = new mongoose.Schema({
  ifscCode: { type: String },
});

const countrySpecificDataRussiaSchema = new mongoose.Schema({
  inn: { type: String },
});

const countrySpecificDataPhilippinesSchema = new mongoose.Schema({
  routingNumber: { type: String },
});

const countrySpecificDataSouthAfricaSchema = new mongoose.Schema({
  branchCode: { type: String },
});

const countrySpecificSchema = new mongoose.Schema({
  countrySpecificDataCanada: countrySpecificDataCanadaSchema,
  countrySpecificDataAustralia: countrySpecificDataAustraliaSchema,
  countrySpecificDataIndia: countrySpecificDataIndiaSchema,
  countrySpecificDataRussia: countrySpecificDataRussiaSchema,
  countrySpecificDataPhilippines: countrySpecificDataPhilippinesSchema,
  countrySpecificDataSouthAfrica: countrySpecificDataSouthAfricaSchema,
});

const internationalWireRoutingInfoSchema = new mongoose.Schema({
  iban: { type: String },
  swiftCode: { type: String },
  correspondentInfo: correspondentInfoSchema,
  bankDetails: bankDetailsSchema,
  address: addressXSchema,

  phoneNumber: { type: String },
  countrySpecific: countrySpecificSchema,
});

const debitCardInfoSchema = new mongoose.Schema({
  id: { type: String },
});

const detailsSchema = new mongoose.Schema({
  address: addressSchema,
  domesticWireRoutingInfo: domesticWireRoutingInfoSchema,
  electronicRoutingInfo: electronicRoutingInfoSchema,
  internationalWireRoutingInfo: internationalWireRoutingInfoSchema,
  debitCardInfo: debitCardInfoSchema,
});

const currencyExchangeInfoSchema = new mongoose.Schema({
  convertedFromCurrency: { type: String },
  convertedToCurrency: { type: String },
  convertedFromAmount: { type: Number },
  convertedToAmount: { type: Number },
  feeAmount: { type: Number },
  feePercentage: { type: Number },
  exchangeRate: { type: Number },
  feeTransactionId: { type: String },
});

const mercuryExpSchema = new mongoose.Schema({
  bankName: { type: String },
  accountNumber: { type: String },
  routingNumber: { type: String },
  address: addressXSchema,

  amount: { type: Number },
  bankDescription: { type: String },
  counterpartyId: { type: String },
  counterpartyName: { type: String },
  counterpartyNickname: { type: String },
  createdAt: { type: Date },
  dashboardLink: { type: String },
  details: detailsSchema,
  estimatedDeliveryDate: { type: Date },
  failedAt: { type: Date },
  id: { type: String },
  kind: { type: String },
  note: { type: String },
  externalMemo: { type: String },
  postedAt: { type: Date },
  reasonForFailure: { type: String },
  status: { type: String },
  feeId: { type: String },
  currencyExchangeInfo: currencyExchangeInfoSchema,
});

export default mongoose.model("mercuryExp", mercuryExpSchema);
