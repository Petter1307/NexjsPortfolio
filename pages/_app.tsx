import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SideBar } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SideBar>
      <Component {...pageProps} />;
    </SideBar>
  );
};

export default MyApp;
