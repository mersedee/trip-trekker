export interface Place {
  business_id: string
  google_id: string
  place_id: string
  phone_number: null | string
  name: string
  latitude: number
  longitude: number
  full_address: string
  review_count: number
  rating: number
  timezone: Timezone
  working_hours: null
  website: string
  verified: boolean
  place_link: string
  cid: string
  reviews_link: string
  owner_id: string
  owner_link: string
  owner_name: string
  booking_link: null
  reservations_link: null
  business_status: BusinessStatus
  type: DatumType
  subtypes: string[]
  photos_sample: PhotosSample[]
  reviews_per_rating: Record<string, number>
  photo_count: number
  about: About | null
  address: string
  order_link: null
  price_level: null
  district: string
  street_address: string
  city: City
  zipcode: string
  state: State
  country: Country
  hotel_location_rating: HotelLocationRating
  hotel_amenities: HotelAmenities | null
  hotel_stars: number | null
  hotel_review_summary: HotelReviewSummary | null
}

export interface About {
  summary: string
  details: null
}

export enum BusinessStatus {
  Open = 'OPEN',
}

export enum City {
  SANFrancisco = 'San Francisco',
}

export enum Country {
  Us = 'US',
}

export interface HotelAmenities {
  'Free Wi-Fi': boolean
  'Free breakfast'?: boolean
}

export interface HotelLocationRating {
  Overall: number
  'Things to do': number
  Transit: number
  Airports: number
}

export interface HotelReviewSummary {
  Rooms: Location
  Location: Location
  'Service & facilities': Location
}

export interface Location {
  score: number
  summary?: string[]
}

export interface PhotosSample {
  photo_id: string
  photo_url: string
  photo_url_large: string
  video_thumbnail_url: null
  latitude: number
  longitude: number
  type: PhotosSampleType
  photo_datetime_utc: Date
  photo_timestamp: number
}

export enum PhotosSampleType {
  Photo = 'photo',
}

export enum State {
  California = 'California',
}

export enum Timezone {
  AmericaLosAngeles = 'America/Los_Angeles',
}

export enum DatumType {
  BedBreakfast = 'Bed & breakfast',
  Hotel = 'Hotel',
}
