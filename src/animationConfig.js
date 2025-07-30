export const Animation = {
    fade: () => ({
      initial: { opacity: 0 },
      animate: {
        opacity: 0.5,
        transition: { duration: 1, ease: "easeInOut" },
      },
    }),
    Suigle: () => ({
      initial: { skewX: "10deg", skewY: "0deg" },
      animate: {
        skewX: "0deg",
        skewY: "1deg",
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    }),
  };