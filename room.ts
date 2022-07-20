import { AveragePrice } from "./type-list";

export type HostelWorldSimpleRoom = {
  id: number | string;
  token: string;
  name: string;
  capacity: string;
  basicType: 'Private' | 'Dbl Private' | 'Mixed Dorm' | 'Female Dorm';
  extendedType: string;
  grade: string;
  ensuite: boolean | string;
  bathroomFacilities?: any;
  mealPlan?: string;
  averagePrice?: AveragePrice;
  stp?: string[] | null;
  conditions: string[];
};


export type HostelWorldRoom = HostelWorldSimpleRoom & {
  description: string;
  labelDescription: string;
  view: string;
  bedTypes: any;
  facilities: any;
  images: HostelWorldRoomImage[];
  totalBedsAvailable: number;
  totalRoomsAvailable: number | null;
  numberOfGuestsPerRoom: number | null;
  ratePlans: HostelWorldRatePlan;
  averagePricePerNight: HostelWorldPrice;
  lowestPricePerNight: HostelWorldValueCurrencies | null;
  stp?: HostelWorldValueCurrencies | null;
  totalPrice: HostelWorldPrice;
  priceBreakdown: HostelWorldPrice;
};

export type HostelWorldRoomTest = HostelWorldSimpleRoom & {
  moreData: string;
}
export type HostelWorldValueCurrencies = {
  value: string | number;
  currency: string;
};


export type HostelWorldRooms = {
  dorms: HostelWorldRoom[];
  privates: HostelWorldRoom[];
};

export type HostelWorldRoomImage = {
  prefix: string;
  suffix: string;
};

export type HostelWorldPrice = {
  ratePlan: number;
  date?: string;
  price: HostelWorldValueCurrencies | null;
}[];

export type HostelWorldLabelDescription = {
  label: string;
  description: string;
};

export type HostelWorldRatePlan = {
  id: number;
  paymentProcedure: { id: string; label: string; description: string };
  isDefault: boolean;
  rateRuleViolations: any;
  ratePlanType: string;
}[];

