"use client"

import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';
import Loading from './loading';

const PublicRoutes = ({ children }) => {

    const router = useRouter();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const idFromSession = sessionStorage.getItem('idUser');
        // const idFromCookie = Cookies.get('idUser');
        if (idFromSession) {
            router.replace('/dash/inicio');
        } else {
            setLoading(false);
        }
    }, []);

    return loading ? <Loading /> : <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default PublicRoutes;