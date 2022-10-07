import React from "react";
import { Progress } from "semantic-ui-react";

type ProgressBarProps = {
  lula: number;
  bolsonaro: number;
};

const ProgressBar = ({ lula, bolsonaro }: ProgressBarProps) => (
  <>
    <Progress percent={lula} inverted color="red" progress total={100} />
    <Progress percent={bolsonaro} inverted color="green" progress total={100} />
  </>
);

export default ProgressBar;
