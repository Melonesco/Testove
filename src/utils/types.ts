export interface SlideItem {
  id: number;
  nameStructure: string;
  nameCountry: string;
  description: string;
  backgroundImage?: string;
  images?: string[];
}

export interface IStorageMountainCollections {
  id: number;
  title: string;
  subtitle: string;
  paragraphs: { text1: string; text2: string };
  img: string;
}

export enum DirectionSlider {
  Left = "left",
  Right = "right",
}
