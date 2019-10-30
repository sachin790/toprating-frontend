import React from "react";
import { Tooltip } from "@trendmicro/react-tooltip";

class MyTooltip extends React.Component {
  render() {
    return (
      <div>
        <Tooltip placement="top" content="Top tooltip">
          <span>Hover on me</span>
        </Tooltip>
      </div>
    );
  }
}

export default MyTooltip;
