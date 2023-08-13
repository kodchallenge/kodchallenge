import { useContext } from 'react';
import KcAlertContext from './context';

const useKcAlert = () => {
  const alert = useContext(KcAlertContext);
  if (!alert) {
  throw new Error('You probably forgot to put <KcAlertProvider> around your app');
  }
  return alert;
};

export default useKcAlert;