export interface SliderItemModel {
  index: number;
  link: string;
  sortOrder: number;
  status: number;
  targetBlankStatus: number;
  imageUrl: string;
  description: string;
}

export interface SliderModel {
  id: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  predefined: number;
  status: number;
  setting: {
    sliderEffect: string;
    sliderWidth: number;
    sliderHeight: number;
    autoStartTime: number;
    effectTime: number;
    autoStart: number;
    definition: number;
    definitionEffectTime: number;
    definitionVerticalPosition: string;
    definitionHorizontalPosition: string;
  };
  items: SliderItemModel[];
}
