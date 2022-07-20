import { HostelWorldLabelDescription, HostelWorldRooms, HostelWorldValueCurrencies } from "./room";
import { Price } from "./type-list";

export type HostelWorldPropertyResponse = {
  id: string;
  cancellationPolicies: HostelWorldLabelDescription[];
  depositPercentage: number;
  rooms: HostelWorldRooms;
  specialEventConditions: HostelWorldValueCurrencies[] | null;
  freeCancellation: HostelWorldLabelDescription;
  lowestPricePerNight: HostelWorldValueCurrencies | null;
  lowestPrivatePricePerNight: HostelWorldValueCurrencies | null;
  lowestDormPricePerNight: HostelWorldValueCurrencies | null;
  lowestAveragePricePerNight: Price | null;
  lowestAverageDormPricePerNight: HostelWorldValueCurrencies | null;
  lowestAveragePrivatePricePerNight?: HostelWorldValueCurrencies | null;
  freeCancellationAvailable: boolean;
  freeCancellationAvailableUntil: string;
  promotions: never[];
};
