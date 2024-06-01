interface XProps {
  className?: string
}

const X: React.FC<XProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M18.901 1.15302H22.581L14.541 10.343L24 22.846H16.594L10.794 15.262L4.156 22.846H0.474L9.074 13.016L0 1.15402H7.594L12.837 8.08602L18.901 1.15302ZM17.61 20.644H19.649L6.486 3.24002H4.298L17.61 20.644Z"
      fill="white"
    />
  </svg>
)

export default X
