export interface City {
  name: string;
  fullName: string;
  province: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface DartResult {
  city: City;
  throwDate: Date;
  id: string;
}

export interface DartThrowState {
  isThrown: boolean;
  isAnimating: boolean;
  result: DartResult | null;
} 