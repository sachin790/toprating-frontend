import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const AccountEditIcon = () => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#000"
      d="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z"
    />
  </svg>
);

export const SquareEditIcon = () => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
    />
  </svg>
);

export const AddLinkIcon = () => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M7,7H11V9H7A3,3 0 0,0 4,12A3,3 0 0,0 7,15H11V17H7A5,5 0 0,1 2,12A5,5 0 0,1 7,7M17,7A5,5 0 0,1 22,12H20A3,3 0 0,0 17,9H13V7H17M8,11H16V13H8V11M17,12H19V15H22V17H19V20H17V17H14V15H17V12Z"
    />
  </svg>
);

export const AddIcon = ({ color = "#000" }) => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
    />
  </svg>
);

export const SettingIcon = () => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#eee"
      d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
    />
  </svg>
);

export const DislikeIcon = () => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"
    />
  </svg>
);

export const LikeIcon = () => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
    />
  </svg>
);

export const SearchIcon = () => (
  <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24">
    <path
      fill="#60338d"
      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
    />
  </svg>
);

export const BellIcon = () => (
  <svg
    className={"bell-style"}
    style={{ width: "5px", height: "5px" }}
    viewBox="0 0 24 24"
  >
    <path
      fill="#eee"
      d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"
    />
    <style jsx>
      {`
        .bell-style {
          width: 20px;
          height: 20px;
        }

        @media screen and (max-width: 600px) {
          .bell-style {
            width: 10px;
            height: 10px;
          }
        }
      `}
    </style>
  </svg>
);

export const UserIcon = () => (
  <svg className={"user-icon-style"} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
    />
    <style jsx>
      {`
        .user-icon-style {
          width: 24px;
          height: 24px;
        }

        @media screen and (max-width: 600px) {
          .user-icon-style {
            width: 35px;
            height: 35px;
          }
        }
      `}
    </style>
  </svg>
);

export const StarIcon = () => (
  <svg className="star-icon" viewBox="0 0 24 24">
    <path fill="#60338d" d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
    <style jsx>
      {`
        .star-icon {
          width: 34px;
          height: 34px;
        }
      `}
    </style>
  </svg>
);

export const ViewMore = ({ width, color, height }) => (
  <svg style={{ width: width, height: height }} viewBox="0 0 24 24">
    <path
      fill={color}
      className={"view-more"}
      d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"
    />
  </svg>
);

export const Collapse = () => {
  return (
    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
      <path
        fill="#000000"
        d="M19.5,3.09L15,7.59V4H13V11H20V9H16.41L20.91,4.5L19.5,3.09M4,13V15H7.59L3.09,19.5L4.5,20.91L9,16.41V20H11V13H4Z"
      />
    </svg>
  );
};
export const More = ({ color, width = "30", height = "30" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="more-icon-style"
    width={width}
    height={height}
    style={{ boxShadow: " 0 4px 19px 0 rgba(0,0,0,.01), cursor : pointer" }}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill={color ? color : "#fdfdfd"} />
    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);
export const Landing = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1402.05 179.91"
  >
    <path
      className="cls-1"
      d="M0,271.58S217.2,120.09,403.11,120.09c197.94,0,442.48,136.49,658.47,136.49s340.48-120,340.48-120V300H0Z"
      transform="translate(0 -120.09)"
    />
    <style>
      {`
    .cls-1{
      fill: #f4f6f8;
    }
    `}
    </style>
  </svg>
);

export const Thumb_up = ({ color, height = "34px", width = "34px" }) => (
  <svg
    className="animate-icon"
    style={{ width: width, height: height }}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"
    />
  </svg>
);

export const Thumb_down = ({ width = "34px", color, height = "34px" }) => (
  <svg style={{ width: width, height: height }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M19,15V3H23V15H19M15,3A2,2 0 0,1 17,5V15C17,15.55 16.78,16.05 16.41,16.41L9.83,23L8.77,21.94C8.5,21.67 8.33,21.3 8.33,20.88L8.36,20.57L9.31,16H3C1.89,16 1,15.1 1,14V12C1,11.74 1.05,11.5 1.14,11.27L4.16,4.22C4.46,3.5 5.17,3 6,3H15M15,5H5.97L3,12V14H11.78L10.65,19.32L15,14.97V5Z"
    />
  </svg>
);

export const InsertLink = props => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill={props.color}
      d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"
    />
  </svg>
);

export const LandingSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1402.05 179.91">
    <path
      className="cls-1"
      data-name="Layer 2"
      d="M0,28.42S217.2,179.91,403.11,179.91c197.94,0,442.48-136.49,658.47-136.49s340.48,120,340.48,120V0H0Z"
    />
    <style>
      {`
   .cls-1{
     fill: #fdfdfd;
   }

    `}
    </style>
  </svg>
);

export const CardDownArrow = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
    />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
);

export const CardUpArrow = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
    />
    <path d="M0 0h24v24H0V0z" fill="none" />
  </svg>
);

export const AddRecommendation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill={"none"} />
      <path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z" />
    </svg>
  );
};

export const ProfileIcon = ({ color }) => {
  return (
    <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
      />
    </svg>
  );
};

export const QuestionBox = ({ width = "20px", height = "20px", color }) => {
  return (
    <svg style={{ width: width, height: height }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
      />
    </svg>
  );
};

export const Bellie = ({ color }) => {
  return (
    <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"
      />
    </svg>
  );
};

export const LogoutIcon = ({ color }) => {
  return (
    <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z"
      />
    </svg>
  );
};

export const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path fill="rgb(91, 56, 141)" d="M14 7l-5 5 5 5V7z" />
      <path fill="none" d="M24 0v24H0V0h24z" />
    </svg>
  );
};

export const MonthIcon = ({ color }) => {
  return (
    <svg style={{ width: "23px", height: "23px" }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
      />
    </svg>
  );
};

export const WeekIcon = ({ color }) => {
  return (
    <svg style={{ width: "23px", height: "23px" }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M6,1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1M5,7V19H19V7H5M7,9H17V11H7V9Z"
      />
    </svg>
  );
};

export const DayIcon = ({ color }) => {
  return (
    <svg style={{ width: "23px", height: "23px" }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
      />
    </svg>
  );
};

export const AllIcon = ({ color }) => {
  return (
    <svg style={{ width: "23px", height: "23px" }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
      />
    </svg>
  );
};

export const StarBoxIcon = ({ color, height, width }) => (
  <svg style={{ width: width, height: height }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M15.58,17L14.63,12.92L17.79,10.19L13.62,9.83L12,6L10.38,9.84L6.21,10.2L9.37,12.93L8.42,17L12,14.84L15.58,17Z"
    />
  </svg>
);

export const InfoCircle = ({ color = "#000", height, width }) => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
);

export const Banned = ({ color }) => (
  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z"
    />
  </svg>
);
