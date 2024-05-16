import { useEffect, useState } from 'react';

export default function (): boolean {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => setMounted(true));

    return isMounted;
}
