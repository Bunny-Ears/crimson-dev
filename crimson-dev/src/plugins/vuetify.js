/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const materialTheme = {
  dark: false,
  colors: {
    primary: "#9B0025",
    surfaceTint: "#bf0030",
    onPrimary: "#FFFFFF",
    primaryContainer: "#dc143c",
    onPrimaryContainer: "#FFFFFF",
    secondary: "#A9343E",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#ff8488",
    onSecondaryContainer: "#45000b",
    tertiary: "#7A3900",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#b15600",
    onTertiaryContainer: "#FFFFFF",
    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#ffdad6",
    onErrorContainer: "#410002",
    background: "#FFF8F7",
    onBackground: "#281717",
    surface: "#FFF8F7",
    onSurface: "#281717",
    surfaceVariant: "#ffdad9",
    onSurfaceVariant: "#5c3f3f",
    outline: "#916f6e",
    outlineVariant: "#e6bdbc",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#3f2b2b",
    inverseOnSurface: "#FFEDEC",
    inversePrimary: "#FFB3B3",
    primaryFixed: "#FFDAD9",
    onPrimaryFixed: "#3B080E",
    primaryFixedDim: "#FFB3B3",
    onPrimaryFixedVariant: "#733336",
    secondaryFixed: "#FFDAD9",
    onSecondaryFixed: "#3B080D",
    secondaryFixedDim: "#FFB3B3",
    onSecondaryFixedVariant: "#733336",
    tertiaryFixed: "#FFDBC7",
    onTertiaryFixed: "#311300",
    tertiaryFixedDim: "#FFB688",
    onTertiaryFixedVariant: "#6E380F",
    surfaceDim: "#f3d3d2",
    surfaceBright: "#FFF8F7",
    surfaceContainerLowest: "#FFFFFF",
    surfaceContainerLow: "#FFF0EF",
    surfaceContainer: "#ffe9e8",
    surfaceContainerHigh: "#ffe1e1",
    surfaceContainerHighest: "#fcdbda"
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'materialTheme',
    themes: {
      materialTheme,
    },
  },
  defaults: {
    global: {
      rounded: "pill",
    },
    VBtn: {
      elevation: 0,
    },
    VFab: {
      rounded: true,
    

    },
    
  },
})
