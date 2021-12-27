export const services = [
  "API & Web Design",
  "Social Media & Marketing",
  "Custom Integrated Solutions",
  "Web Hosting",
  "Wordpress Management",
  "UI/UX Design"
]

export const variants = {
  pages: {
    hidden: {
      opacity: 0,
      x: "-100vw",
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        translate: 0,
        duration: 1,
        staggerChildren: 0.5,
        when: "beforeChildren",
        ease: "easeInOut",
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      y: 0,
      transition: {
        when: "afterChildren",
      },
    },
  },
  containers: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delayChildren: 0.5,
        staggerChildren: 0.5,
        ease: "easeInOut",
        type: "tween",
      },
    },
  },
  buttons: {
    hover: {
      scale: 1.3,
      originX: "50%",
    },
    hoverTopButton: {
      scale: 1.1,
      originX: "50%",
      originY: "50%"
    },
    tap: {
      scale: 0.8,
    },
    tapTopButton: {
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration:0.2,
        ease: "easeIn",
        type: "spring",
      },
    },
    exit: { opacity: 0 , transition: { when: "beforeChildren"}}
  },
  writer: {
    sentence: {
      hidden: { opacity: 1 },
      visible: {
        opacity:1,
        transition: {
          delay: 0.5,
          staggerChildren: 0.03,
          when: "beforeChildren"
        },
      },
    },
    letter: {
      hidden: { opacity:0, y:50 },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  }
};
