import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../lib/graphql';
import { SideNavProvider } from '../context/SideNavContext';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import withTheme from '@/theme';

dayjs.locale('zh-cn');
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={zhCN}>
      <div suppressHydrationWarning={true} className="overflow-hidden">
        <ApolloProvider client={apolloClient}>
          <QueryClientProvider client={queryClient}>
            <SideNavProvider>
              {withTheme(<Component {...pageProps} />)}
            </SideNavProvider>
          </QueryClientProvider>
        </ApolloProvider>
      </div>
    </ConfigProvider>
  );
}
