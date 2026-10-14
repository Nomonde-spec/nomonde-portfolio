import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
});

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  },
  hover: {
    y: -6,
    boxShadow: "0px 20px 40px rgba(37, 99, 235, 0.12)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
