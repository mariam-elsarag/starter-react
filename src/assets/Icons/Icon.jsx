import { PropTypes } from "prop-types";
export const FillStarIcon = ({
  width = "28",
  height = "28",
  fill = "#434343",
}) => {
  return (
    <span>
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 22.6366L7.42818 27.6228C7.10255 27.8876 6.74732 28.0129 6.36248 27.9988C5.97765 27.9846 5.63721 27.874 5.34119 27.6669C5.04516 27.4598 4.81603 27.1804 4.65381 26.8285C4.49159 26.4767 4.48389 26.0943 4.63072 25.6813L7.16176 17.518L0.723154 12.973C0.36792 12.7377 0.145899 12.4288 0.057091 12.0464C-0.0317173 11.6639 -0.0169158 11.3109 0.101495 10.9873C0.219906 10.6638 0.427126 10.3766 0.723154 10.126C1.01918 9.87538 1.37441 9.75065 1.78885 9.75183H9.7372L12.3126 1.27966C12.4607 0.867818 12.6904 0.551289 13.0018 0.330071C13.3132 0.108853 13.6459 -0.00116735 14 9.3388e-06C14.354 0.00118603 14.6874 0.111795 15 0.331836C15.3126 0.551877 15.5417 0.867818 15.6874 1.27966L18.2628 9.75183H26.2111C26.6256 9.75183 26.9808 9.87714 27.2768 10.1278C27.5729 10.3784 27.7801 10.6649 27.8985 10.9873C28.0169 11.3098 28.0317 11.6628 27.9429 12.0464C27.8541 12.43 27.6321 12.7389 27.2768 12.973L20.8382 17.518L23.3693 25.6813C23.5173 26.0931 23.5102 26.4755 23.348 26.8285C23.1857 27.1815 22.956 27.461 22.6588 27.6669C22.3616 27.8728 22.0212 27.9835 21.6375 27.9988C21.2539 28.014 20.8986 27.8887 20.5718 27.6228L14 22.6366Z"
          fill={fill}
        />
      </svg>
    </span>
  );
};
FillStarIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};
export const StarIcon = ({
  width = "28",
  height = "28",
  stroke = "#747474",
}) => {
  return (
    <span>
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6044 21.8399L14 21.3813L13.3956 21.8399L6.82374 26.8262L6.81036 26.8363L6.79733 26.8469C6.64154 26.9736 6.51925 27.0038 6.39915 26.9994C6.19347 26.9919 6.0421 26.9369 5.91442 26.8475C5.77404 26.7493 5.65554 26.6128 5.56193 26.4098C5.52371 26.3269 5.50111 26.2183 5.57295 26.0162L5.5798 25.9969L5.58586 25.9774L8.1169 17.8141L8.33209 17.1201L7.73845 16.701L1.29984 12.156L1.28776 12.1475L1.27544 12.1394C1.11337 12.032 1.05699 11.9313 1.03117 11.8202C0.980021 11.5999 0.997945 11.4475 1.04059 11.331C1.0922 11.19 1.18872 11.0421 1.36932 10.8892L0.723154 10.126L1.36932 10.8892C1.47102 10.8031 1.59157 10.7513 1.78601 10.7518H1.78885H9.7372H10.4784L10.694 10.0427L13.2613 1.59722C13.3496 1.36164 13.4629 1.22916 13.5809 1.14532C13.7364 1.03488 13.868 0.999576 13.9967 1C14.1292 1.00044 14.2653 1.03759 14.4244 1.14957C14.5408 1.23149 14.6521 1.36108 14.7379 1.59453L17.306 10.0427L17.5216 10.7518H18.2628H26.2111C26.4065 10.7518 26.5282 10.8042 26.6307 10.891C26.812 11.0445 26.9085 11.1923 26.9598 11.3321C27.0017 11.4463 27.0202 11.5982 26.9687 11.8208C26.9427 11.9332 26.8864 12.0327 26.7265 12.1381L26.7132 12.1469L26.7002 12.156L20.2616 16.701L19.6679 17.1201L19.8831 17.8141L22.4141 25.9774L22.4207 25.9986L22.4282 26.0195C22.4998 26.2188 22.478 26.3268 22.4393 26.411L23.348 26.8285L22.4393 26.411C22.3461 26.6138 22.2283 26.7486 22.0893 26.8449C21.9581 26.9359 21.8038 26.9913 21.5977 26.9995C21.4819 27.0042 21.3607 26.9755 21.203 26.8471L21.1898 26.8364L21.1763 26.8262L14.6044 21.8399Z"
          stroke={stroke}
          strokeWidth="2"
        />
      </svg>
    </span>
  );
};
StarIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
};