export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: .5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const titleAnime = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.75 },
  },
};

export const Fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: .5, delay: 0.5 },
  },
};
export const imgAnim = {
  hidden: {
    scale: 1.25,
    opacity:0,
  },
  show: {
    scale: 1,
    opacity:1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 1,
      delay: 0.5,
    },
  },
};

export const lineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const Slideranim = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.1, ease: "easeOut",staggerChildren:0.1, },
  },
};
