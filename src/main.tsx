import '@ui5/webcomponents-react/dist/Assets.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },
    },
})

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
