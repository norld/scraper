// import {  } from './type';
import {
  HostelWorldRooms,
  HostelWorldSimpleRoom,
  HostelWorldLabelDescription,
  HostelWorldValueCurrencies,
} from './room';

export interface HostelWorldListResponse {
  properties: Property[];
  location: Location;
  locationEn: LocationEn;
  filterData: FilterData;
  sortOrder: string | null;
  pagination: Pagination;
}

export interface Property {
  id: number;
  isPromoted: boolean;
  hbid: number;
  name: string;
  starRating: number;
  overallRating?: OverallRating | null;
  ratingBreakdown: RatingBreakdown;
  latitude: number;
  longitude: number;
  isFeatured: boolean;
  type: string;
  address1: string;
  address2: string;
  freeCancellationAvailable: boolean;
  freeCancellationAvailableUntil: string;
  district?: District | null;
  districts: District[] | null;
  freeCancellation: HostelWorldLabelDescription;
  lowestPricePerNight: HostelWorldValueCurrencies | null;
  lowestPrivatePricePerNight?: HostelWorldValueCurrencies | null;
  lowestDormPricePerNight?: HostelWorldValueCurrencies | null;
  lowestAveragePricePerNight: Price | null;
  lowestAverageDormPricePerNight?: Price;
  lowestAveragePrivatePricePerNight?: Price;
  isNew: boolean;
  overview: string;
  isElevate: boolean;
  hostelworldRecommends: boolean;
  distance: Distance;
  position: number;
  hwExtra: any;
  fabSort: FabSort;
  promotions: Promotion[];
  stayRuleViolations: any[];
  veryPopular?: boolean;
  rooms: {
    dorms: HostelWorldSimpleRoom[];
    privates: HostelWorldSimpleRoom[];
  };
  images: Image[];
  imagesGallery: ImagesGallery[];
  facilities: Facility[];
}

export interface OverallRating {
  overall: number;
  numberOfRatings: string;
}

export interface RatingBreakdown {
  ratingsCount: number;
  security: number;
  location: number;
  staff: number;
  fun: number;
  clean: number;
  facilities: number;
  value: number;
  average: number;
}

export interface District {
  id: string| number;
  name: string;
}

export type Price = {
  value: string;
  currency: string;
  promotions?: Promotions;
  original?: string;
}|null

export interface Promotions {
  promotionsIds: number[];
  totalDiscount: string;
}


export interface Promotions {
  promotionsIds: number[];
  totalDiscount: string;
}

export interface Distance {
  value: number;
  units: string;
}

export interface FabSort {
  rank1: number;
  rank2: number;
  rank3: number;
  rank4: number;
  rank5: number;
  rank6: number;
  rank7: number;
  rank8: number;
  rank9: number;
}

export interface Promotion {
  id: number;
  type: string;
  stack: boolean;
  name: string;
  discount: number;
}



export interface AveragePrice {
  value: string;
  currency: string;
}

export type HostelWorldSimplifiedRoom = Pick<HostelWorldSimpleRoom, 'id' | 'token'>;

export interface AveragePrice2 {
  value: string;
  currency: string;
}

export interface Image {
  prefix: string;
  suffix: string;
}

export interface ImagesGallery {
  prefix: string;
  suffix: string;
}

export interface Facility {
  name: string;
  id: string;
  facilities: Facility2[];
}

export interface Facility2 {
  name: string;
  id: string;
}

export interface Location {
  city: City;
  region: Region;
}

export interface City {
  id: number;
  name: string;
  idCountry: number;
  country: string;
}

export interface Region {
  id: string;
  name: string;
}

export interface LocationEn {
  city: City2;
  region: Region2;
}

export interface City2 {
  id: number;
  name: string;
  idCountry: number;
  country: string;
}

export interface Region2 {
  id: string;
  name: string;
}

export interface FilterData {
  highestPricePerNight: HostelWorldValueCurrencies;
  lowestPricePerNight: HostelWorldValueCurrencies;
}



export interface Pagination {
  next: string;
  prev: string;
  numberOfPages: number;
  totalNumberOfItems: number;
}
