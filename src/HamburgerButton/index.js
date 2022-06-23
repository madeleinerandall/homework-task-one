function HamburgerButton() {
  return (
    <svg height="40" width="40" viewBox="0 0 100 100">
      <line
        x1="10"
        y1="20"
        x2="90"
        y2="20"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="40"
        x2="90"
        y2="40"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
      ></line>
      <line
        x1="10"
        y1="60"
        x2="90"
        y2="60"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
      ></line>
    </svg>
  );
}

export default HamburgerButton;
