import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollProgress({
  targetRef
}: {
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const height = el.scrollHeight - el.clientHeight;

      const scrolled = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(scrolled);
    };

    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, [targetRef]);

  return (
    <motion.div
      className="to-secondary/85 via-secondary-complement/85 from-primary/85 fixed top-0 left-0 z-50 h-0.75 bg-linear-to-r"
      style={{ width: `${progress}%` }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
    />
  );
}

export default ScrollProgress;
