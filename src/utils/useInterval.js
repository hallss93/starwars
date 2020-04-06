
import { useEffect, useRef } from 'react'
/**
 * 
 * @param {function} callback       Function Callback
 * @param {Number} delay            Number for delay
 */
export default function useInterval(callback, delay = 2000) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}