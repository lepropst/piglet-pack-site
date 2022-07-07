import { useState, useCallback, MutableRefObject, useEffect } from "react";

export function useIntersectionObserver({
  root,
  ref,
  threshold = 0.1,
  margin = "0px",
}: {
  root: Element | Document | null;
  ref: MutableRefObject<any>;
  threshold?: number;
  margin?: string;
}): boolean {
  const [isIntersecting, setIntersecting] = useState(false);
  const config = {
    rootMargin: margin,
    threshold: threshold,
    root: root,
  };
  const callback: IntersectionObserverCallback = useCallback((entries) => {
    const [entry] = entries;
    setIntersecting(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, config);
    if (ref.current) {
      observer.observe(ref.current);
    }
    const el = ref.current;
    return () => {
      if (el) observer.unobserve(el);
    };
  });
  return isIntersecting;
}

export default useIntersectionObserver;
