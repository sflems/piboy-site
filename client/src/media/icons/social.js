const SocialIcon = (props) => {
  return (
    <svg
      {...props}
      className={"fa-social " + (props.className ? props.className : "")}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="share-nodes"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-32 0 512 512"
    >
      <path
        fill="currentColor"
        d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984 .7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96s-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256S191.3 263.8 190.8 267.6l94.68 47.34C302.8 298.3 326.1 288 352 288C405 288 448 330.1 448 384z"
      />
    </svg>
  );
};

export default SocialIcon;