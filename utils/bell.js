const Bell = () => (
  <svg className={"bell-style"} viewBox="0 0 24 24">
    <path
      fill="#60338d"
      d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"
    />
    <style jsx>
      {`
        .bell-style {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }

        @media screen and (max-width: 600px) {
          .bell-style {
            width: 20px;
            height: 20px;
            display: none;
          }
        }
      `}
    </style>
  </svg>
);

export default Bell;
