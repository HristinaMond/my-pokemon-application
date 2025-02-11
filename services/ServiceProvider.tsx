'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient()

type ServiceProviderProps = {
    children: React.ReactNode;
}

export const ServiceProvider = ({ children }: ServiceProviderProps) => {

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};