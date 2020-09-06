import { createContext } from 'react';
import { IContextProps } from '../interfaces';

const AppContext = createContext({} as IContextProps);

export default AppContext;
