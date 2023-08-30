import { RefObject, useEffect } from "react";

export function useOnClickOutside(
    ref: RefObject<HTMLElement>,
    handler: (event: MouseEvent | TouchEvent) => void
) {
    useEffect(() => {
        const listener = (e: any) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler(e);
        };

        document.addEventListener("mousedown", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
}
