import { CarProps } from "@/types";

export const generateCarImage = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType','fullscreen');
  url.searchParams.append('modelYear', year.toString());
  url.searchParams.append('angle', `${angle}`);

  return url.toString();
};
