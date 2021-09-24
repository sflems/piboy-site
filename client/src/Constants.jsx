export const routes = [ 
    {
        route: "/",
        name: "Home"
    },
    {
        route: "/about",
        name: "About"
    },
    {
        route: "/contact",
        name: "Contact"
    },
]

export const variants = {
  pages: {
    hidden: {
      opacity: 0,
      x: -1000,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        ease: "easeInOut",
        type: "spring",
      },
    },
      exit: {
        opacity: 0,
        x: "100vw",
        transition: {
          when: "afterChildren",
        },
    },
  },
  containers: {
    hidden: {
      opacity: 0,
      height: "100%",
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 300,
        damping: 30
      },
    },
  },
  buttons: {
    hover: {
      scale: 1.3,
      textShadow: "0 0 6px rgb(var(--bs-success-rgb))",
      originX: "50%",
    },
    hoverTopButton: {
      scale: 1.1,
      boxShadow: "0 0 6px #add785",
      originX: "50%",
      originY: "50%"
    },
    tap: {
      scale: 0.8,
      textShadow: "0 0 6px rgb(var(--bs-primary-rgb))",
    },
    tapTopButton: {
      scale: 0.8,
      boxShadow: "0 0 12px var(--bs-primary)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      textShadow: "none",
      boxShadow: "none",
      transition: {
        ease: "easeIn",
        type: "spring",
      },
    },
  },
  writer: {
    sentence: {
      hidden: { opacity: 1 },
      visible: {
        opacity:1,
        transition: {
          delay: 0.75,
          staggerChildren: 0.05,
          when: "beforeChildren"
        },
      },
    },
    letter: {
      hidden: { opacity:0, y:50 },
      visible: {
        opacity: 1,
        y: 0,
      }
    }
  }
};
