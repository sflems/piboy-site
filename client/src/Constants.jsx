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
      scale: 0,
      x: "-100vw",
      originY: "0%",
    },
    shown: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
        ease: "easeIn",
        type: "spring",
      },
    },
      exit: {
        x: "100vw",
        originY: "0%",
        transition: {
          duration: 0.1,
          ease: "easeInOut",
          when: "afterChildren",
        },
    },
  },
  containers: {
    hidden: {
      opacity: 0,
      x: "-100vw",
      transition: {
        when: "afterChildren",
      },
    },
    shown: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: "easeIn",
        type: "spring",
      },
    },
  },
  buttons: {
    hover: {
        scale: 1.3,
        textShadow: "0 0 6px rgb(var(--bs-success-rgb))",
        originX: "50%",
      },
      tap: {
        scale: 0.8,
        textShadow: "0 0 6px rgb(var(--bs-primary-rgb))",
      },
      shown: {
        opacity: 1,
        scale: 1,
        textShadow: "none",
        transition: {
          ease: "easeIn",
          type: "spring",
        },
      },
  }
};
