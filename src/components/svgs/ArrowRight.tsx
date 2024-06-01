interface ArrowRightProps {
  className?: string
}

const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M25.033 15.7808C25.3725 15.441 25.5631 14.9803 25.5631 14.5C25.5631 14.0197 25.3725 13.559 25.033 13.2192L18.1987 6.3812C17.8587 6.04118 17.3975 5.85016 16.9167 5.85016C16.4358 5.85016 15.9746 6.04118 15.6346 6.3812C15.2946 6.72122 15.1036 7.18238 15.1036 7.66324C15.1036 8.1441 15.2946 8.60526 15.6346 8.94528L19.3756 12.6875H5.4375C4.95679 12.6875 4.49578 12.8784 4.15587 13.2184C3.81596 13.5583 3.625 14.0193 3.625 14.5C3.625 14.9807 3.81596 15.4417 4.15587 15.7816C4.49578 16.1215 4.95679 16.3125 5.4375 16.3125H19.3756L15.6346 20.0535C15.4663 20.2218 15.3327 20.4217 15.2416 20.6417C15.1505 20.8617 15.1036 21.0974 15.1036 21.3355C15.1036 21.5736 15.1505 21.8094 15.2416 22.0294C15.3327 22.2493 15.4663 22.4492 15.6346 22.6176C15.803 22.7859 16.0029 22.9195 16.2228 23.0106C16.4428 23.1017 16.6786 23.1486 16.9167 23.1486C17.1548 23.1486 17.3905 23.1017 17.6105 23.0106C17.8305 22.9195 18.0303 22.7859 18.1987 22.6176L25.033 15.7808Z"
      fill="currentColor"
    />
  </svg>
)

export default ArrowRight
