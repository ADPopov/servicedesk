import {useEffect, useRef} from "react";

export const useEffectSkipMount = (cb: any, deps: any) => {
    const mounted = useRef(true);

    useEffect(() => {
        if(!mounted.current) {
            return cb()
        }
        mounted.current = false
    }, deps)
}