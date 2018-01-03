export interface Route {
  id: number;
  fromLat: string;
  fromLng: string;
  toLat: string;
  toLng: string;
  date: number;
}

export function generateMockRoute(): Route {
  return {
    id: 1,
    fromLat: '',
    fromLng: '',
    toLat: '',
    toLng: '',
    date: + new Date
  };
}
