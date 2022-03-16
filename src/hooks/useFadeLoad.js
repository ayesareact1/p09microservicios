import { useEffect, useRef } from "react";

export function useFadeLoad() {

    const containerRef = useRef(null)

    useEffect(() => {
        containerRef.current.classList.add('fade');
        setTimeout(() => { // Este delay es para que el navegador
                            // no implemente las dos clases y por tanto se active la transición CSS
            containerRef.current.classList.add('show');
        }, 100)
    }, [])

    return containerRef;

}