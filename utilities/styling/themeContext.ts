import { createContext } from 'react';
export interface contextInterface {
  toggleColorMode: () => void;
}
export const ColorModeContext = createContext<contextInterface>({
  toggleColorMode: () => null,
});
export default ColorModeContext;
