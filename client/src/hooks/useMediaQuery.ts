import { useEffect, useMemo, useState } from "react";

function useMediaQuery(query: string) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);

    useEffect(() => {
        const onChange = () => setMatch(mediaQuery.matches);
        mediaQuery.addEventListener("change", onChange);

        return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);

    return match;
}

export function useMediaQueries() {
    const xs = useMediaQuery("(min-width: 480px)");
    const sm = useMediaQuery("(min-width: 767px)");
    const md = useMediaQuery("(min-width: 992px)");
    const lg = useMediaQuery("(min-width: 1200px)");

    return { xs, sm, md, lg };
}