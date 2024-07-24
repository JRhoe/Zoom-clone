import StreamVideoProvider from '@/providers/streamClientProviders';
import React, { ReactNode, useState } from 'react';

const RootLayout = ( { children }: {children: ReactNode}) => {
    
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    );
}

export default RootLayout;
