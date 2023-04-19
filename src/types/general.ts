export interface Coordinates {
  lat: number
  lng: number
}

export interface Bounds {
  ne: Coordinates
  sw: Coordinates
}

export interface Menu {
  label: string
  value: string
}
