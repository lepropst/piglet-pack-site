import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material';
import { useMemo, useState } from 'react';
import getStylingTokens from './getStylingTokens';

export function useTheme(initialMode: PaletteMode = 'light') {
  const [mode, setMode] = useState<PaletteMode>(initialMode);
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(getStylingTokens(mode))),
    [mode]
  );
  return {
    colorMode: colorMode,
    theme: theme,
  };
}
export default useTheme;
