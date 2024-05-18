export const containerVariants = (delay = 0) => ({
  offScreen: {
    opacity: 0,
    y: 30,
  },
  onScreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay,
    },
  },
});

export const tagVariants = {
  offScreen: {
    opacity: 0,
    y: 10,
  },
  onScreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export const titleVariants = {
  offScreen: {
    opacity: 0,
    y: 30,
  },
  onScreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.2,
    },
  },
};

export const desVariants = {
  offScreen: {
    opacity: 0,
    y: 20,
  },
  onScreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.6,
    },
  },
};

export const featureVariants = {
  offScreen: {
    scale: 0.5,
  },
  onScreen: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export const featureDetailVariants = {
  offScreen: {
    opacity: 0,
    x: -100,
  },
  onScreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "easeIn",
      duration: 1,
      delay: 0.7,
    },
  },
};
