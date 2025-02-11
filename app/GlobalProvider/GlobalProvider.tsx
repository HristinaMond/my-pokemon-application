import React from 'react';
import {ServiceProvider} from '@/services';
import {StoreProvider} from "@/store/StoreProvider";

type GlobalProviderProps = {
    children: React.ReactNode;
}
export const GlobalProvider = ({children}: GlobalProviderProps) => {
    return (
        <ServiceProvider>
            <StoreProvider>{children}</StoreProvider>
        </ServiceProvider>
    );
};
