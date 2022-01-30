import { AppContext } from 'context/AppContext';
import { useContextSelector } from 'use-context-selector';

const useApp = () => {
  const loading = useContextSelector(AppContext, state => state.loading);
  const toggleLoading = useContextSelector(
    AppContext,
    state => state.toggleLoading
  );
  const showAlert = useContextSelector(AppContext, state => state.confirmAlert);

  return { loading, toggleLoading, showAlert };
};

export default useApp;
