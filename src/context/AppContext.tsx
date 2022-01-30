import LoadingPage from 'components/atoms/LoadingPage/LoadingPage';
import { FC, useState } from 'react';
import { createContext } from 'use-context-selector';

import { confirmAlert, ReactConfirmAlertProps } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export interface IAppContext {
  loading: boolean;
  toggleLoading: (state?: boolean) => void;
  confirmAlert: (opt: ReactConfirmAlertProps) => void;
}

const DEFAULTAPP = {
  loading: false,
} as IAppContext;
export const AppContext = createContext<IAppContext>(DEFAULTAPP);

export const AppProvide: FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoading = (newState?: boolean) => {
    if (newState) {
      setLoading(newState);
      return;
    }

    setLoading(oldState => !oldState);
  };

  return (
    <AppContext.Provider value={{ loading, toggleLoading, confirmAlert }}>
      {children}
      {loading && <LoadingPage />}
    </AppContext.Provider>
  );
};
