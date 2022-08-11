import { ProviderAuth } from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';
import AppContext from '../context/AppContext';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <ProviderAuth>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ProviderAuth>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
