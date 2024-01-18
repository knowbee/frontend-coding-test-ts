export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

interface Origin {
  name: string
  url: string
}

interface Location {
  name: string
  url: string
}

interface Episode {
  [index: number]: string
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: Episode
  url: string
}

export interface ApiResponse {
  info: Info
  results: Character[]
}
