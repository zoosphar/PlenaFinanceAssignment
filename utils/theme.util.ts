
interface Colors {
  lightBlue: string;
  darkBlue: string;
  lightYellow: string;
  darkYellow: string;
  greyShade1: string;
  greyShade2: string;
  greyShade3: string;
  greyShade4: string;
  greyShade5: string;
  greyShade6: string;
  greyShade7: string;
  // Add more colors as needed
}

// interface Fonts {
//   regular: string;
//   bold: string;
//   // Add more font options as needed
// }

// interface FontSizes {
//   small: number;
//   medium: number;
//   large: number;
//   // Add more font sizes as needed
// }

interface Theme {
  Colors: Colors;
//   Fonts: Fonts;
//   FontSizes: FontSizes;
}

const Colors: Colors = {
  lightBlue: '#2A4BA0',
  darkBlue: '#153075',
  lightYellow: '#FFC83A',
  darkYellow: '#F9B023',
  greyShade1: '#F8F9FB',
  greyShade2: '#E7ECF0',
  greyShade3: '#C5CDD2',
  greyShade4: '#A9B4BC',
  greyShade5: '#606D76',
  greyShade6: '#354349',
  greyShade7: '#1B262E'
};

// const Fonts: Fonts = {
//   regular: 'Arial',
//   bold: 'Arial-Bold',
//   // Add more font options as needed
// };

// const FontSizes: FontSizes = {
//   small: 14,
//   medium: 16,
//   large: 18,
//   // Add more font sizes as needed
// };

export const Theme: Theme = {
  Colors,
//   Fonts,
//   FontSizes,
};
