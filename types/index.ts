export interface Car {
  brand: number;
  name: string;
  name_details: string;
  code: string;
  vehicle_group: string;
  air_conditioner: boolean;
  transmission_type: string;
  vehicle_type: string;
  vehicle_class: string;
  fuel_type: null;
  drive_type: null;
  door_count: null;
  picture_url: PictureURL;
  stars: number;
  features: Features;
}

export interface Features {
  doors: number | string;
  seats: number | string;
  air_conditioner: boolean;
  transmition: string;
  fuel_type: string;
  large_suitcase: number | null;
  small_suitcase: number | null;
  thumb: string;
  fleet_group_id: number | null;
  fleet_category_id: number | null;
  fleet_original_category_id: number | null;
  category: string;
}

export interface PictureURL {
  normal: string;
  featured: string;
}
