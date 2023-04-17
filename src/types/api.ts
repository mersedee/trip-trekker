export interface Restaurant {
  location_id: string
  name?: string
  latitude?: string
  longitude?: string
  num_reviews?: string
  timezone?: Timezone
  location_string?: LocationString
  photo?: Photo
  awards?: Award[]
  doubleclick_zone: DoubleclickZone
  preferred_map_engine?: PreferredMapEngine
  raw_ranking?: string
  ranking_geo?: ParentDisplayName
  ranking_geo_id?: string
  ranking_position?: string
  ranking_denominator?: string
  ranking_category?: RankingCategory
  ranking?: string
  distance?: string
  distance_string?: string
  bearing?: string
  rating?: string
  is_closed?: boolean
  open_now_text?: string
  is_long_closed?: boolean
  price_level?: PriceLevel
  description?: string
  web_url?: string
  write_review?: string
  ancestors: Ancestor[]
  category?: Category
  subcategory?: Category[]
  parent_display_name?: ParentDisplayName
  is_jfy_enabled?: boolean
  nearest_metro_station?: any[]
  reviews?: Array<Review | null>
  phone?: string
  website?: string
  address_obj?: AddressObj
  address?: string
  hours?: Hours
  is_candidate_for_contact_info_suppression?: boolean
  cuisine?: Category[]
  dietary_restrictions?: Category[]
  establishment_types?: Category[]
  price?: string
  ad_position?: string
  ad_size?: string
  detail?: string
  page_type?: string
  mob_ptype?: string
  email?: string
}

export interface AddressObj {
  street1: null | string
  street2: null | string
  city: ParentDisplayName
  state: null
  country: ParentDisplayName
  postalcode: null | string
}

export enum ParentDisplayName {
  ChonburiProvince = 'Chonburi Province',
  JomtienBeach = 'Jomtien Beach',
  Pattaya = 'Pattaya',
  Thailand = 'Thailand',
}

export interface Ancestor {
  subcategory: Category[]
  name: ParentDisplayName
  abbrv: null
  location_id: string
}

export interface Category {
  key: string
  name: string
}

export interface Award {
  award_type: AwardType
  year: string
  images: AwardImages
  categories: any[]
  display_name: string
}

export enum AwardType {
  CertificateOfExcellence = 'CERTIFICATE_OF_EXCELLENCE',
}

export interface AwardImages {
  small: string
  large: string
}

export enum DoubleclickZone {
  AsThailandPattaya = 'as.thailand.pattaya',
}

export interface Hours {
  week_ranges: WeekRange[][]
  timezone: Timezone
}

export enum Timezone {
  AsiaBangkok = 'Asia/Bangkok',
}

export interface WeekRange {
  open_time: number
  close_time: number
}

export enum LocationString {
  JomtienBeachPattayaChonburiProvince = 'Jomtien Beach, Pattaya, Chonburi Province',
  PattayaChonburiProvince = 'Pattaya, Chonburi Province',
}

export interface Photo {
  images: PhotoImages
  is_blessed: boolean
  uploaded_date: string
  caption: string
  id: string
  helpful_votes: string
  published_date: string
  user: User
}

export interface PhotoImages {
  small: Large
  thumbnail: Large
  original: Large
  large: Large
  medium: Large
}

export interface Large {
  width: string
  url: string
  height: string
}

export interface User {
  user_id: null
  member_id: string
  type: UserType
}

export enum UserType {
  User = 'user',
}

export enum PreferredMapEngine {
  Default = 'default',
}

export enum PriceLevel {
  Empty = '',
  Fluffy = '$$$$',
  PriceLevel = '$$ - $$$',
  Purple = '$',
}

export enum RankingCategory {
  Restaurant = 'restaurant',
}

export interface Review {
  id: string
  lang: null
  location_id: string
  published_date: Date
  published_platform: PublishedPlatform
  rating: string
  type: ReviewType
  helpful_votes: string
  url: string
  travel_date: null
  text: null
  user: null
  title: string
  owner_response: null
  subratings: any[]
  machine_translated: boolean
  machine_translatable: boolean
}

export enum PublishedPlatform {
  Desktop = 'Desktop',
}

export enum ReviewType {
  Review = 'review',
}

export interface OpenHoursOptions {
  closed_count: string
  is_set: boolean
  low_coverage_primary_message: string
  timezone: Timezone
  unsure_count: string
  open_count: string
  low_coverage_secondary_message: string
  current_value: string
}

export interface Paging {
  results: string
  total_results: string
}

export interface RestaurantAvailabilityOptions {
  day: string
  month: string
  year: string
  hour: string
  minute: string
  people: string
  datestring: string
  is_default: boolean
  is_set: boolean
  racable: boolean
  time_options: EOptions
  people_options: EOptions
}

export interface EOptions {
  selected_option: Option
  options: Option[]
}

export interface Option {
  value: string
  display: string
  selected: boolean | null
}
