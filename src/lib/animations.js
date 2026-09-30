const directionOffsets = {
  up: { x: 0, y: 88 },
  right: { x: 84, y: 0 },
  left: { x: -84, y: 0 },
};

export const createSectionVariants = (direction = "up") => {
  const offset = directionOffsets[direction] || directionOffsets.up;

  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: 0.965,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

export const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const sectionContentVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      delay: 0.24,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const listVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 38, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
