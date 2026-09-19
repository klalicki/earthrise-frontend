const baseColors = {
  "neutral-100": "#fffefc",
  "neutral-300": "#d4d1cb",
  "neutral-500": "#736b7a",
  "neutral-700": "#28232c",
  "neutral-900": "#1b171f",
  "blue-100": "#e6ebf5",
  "blue-500": "#26417b",
  "blue-300": "#8eaadc",
  "blue-700": "#192a52",
  "blue-900": "#0f1a33",
  "orange-100": "#fff4e6",
  "orange-300": "#ffcf96",
  "orange-500": "#ffb155",
  "orange-700": "#c77e24",
  "orange-900": "#824f11",
  "green-100": "#e2f5ee",
  "green-300": "#68c79f",
  "green-500": "#177b51",
  "green-700": "#105237",
  "green-900": "#0a3322",
  "purple-100": "#f2e9f7",
  "purple-300": "#b08cc2",
  "purple-500": "#6b358a",
  "purple-700": "#4a2161",
  "purple-900": "#2d103d",
  "red-100": "#ffede9",
  "red-300": "#fe9f87",
  "red-500": "#fd5d36",
  "red-700": "#c23815",
  "red-900": "#80230b"
} as const;
const themeNames = ['light', 'dark'] as const;
type ThemeName = typeof themeNames[number];
type ColorKey = keyof typeof baseColors;
type ColorPalette = Record<string, Record<ThemeName, ColorKey>>

const themes: ColorPalette = {
  'background':{light:'neutral-100',dark:'neutral-700'}
}

const generateCSS = () => {
  const baseValues = []
  const themeValues: Record<ThemeName, String[]> = {}

  for (const color in Object.keys(themes)) {
    

  }
}


console.log('building design tokens');