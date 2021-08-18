export const animationLeft2Right = {
  one: {
    x: "calc(-100vw + 400px)",
  },
  two: {
    x: 0,
  },
  three: {
    x: "calc(100vw - 400px)",
  },
};

export const animationRight2Left = {
  one: {
    x: "calc(100vw - 400px)",
  },
  two: {
    x: 0,
  },
  three: {
    x: "calc(-100vw + 400px)",
  },
};

export const fading = {
  one: {
    opacity: 0,
  },
  two: {
    opacity: 1,
  },
  three: {
    opacity: 0,
  },
};

export const transition = {
  duration: 0.5,
  type: "tween",
};

export const shortTransition = {
  duration: 0.15,
  type: "tween",
};
