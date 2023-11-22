import { useContext } from 'react';
import KodAlertContext from './context';

const useKodAlert = () => {
  const alert = useContext(KodAlertContext);
  if (!alert) {
  throw new Error('You probably forgot to put <KodAlertProvider> around your app');
  }
  return alert;
};

export default useKodAlert;