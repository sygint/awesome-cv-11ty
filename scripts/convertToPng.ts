import { fromPath } from "pdf2pic";

const options = {
  quality: 100,
  density: 100,
  saveFilename: "preview",
  savePath: "./build",
  format: "png",
  width: 827,
  height: 1169,
};

export default async (path: string) => {
  const convert = fromPath(path, options);
  const pageToConvertAsImage = 1;

  await convert(pageToConvertAsImage, { responseType: "image" });

  console.log("Page 1 is now converted as image");
};
