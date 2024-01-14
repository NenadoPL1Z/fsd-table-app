import { memo } from "react";
import { ClipLoader } from "react-spinners";

const Component = () => {
  return <ClipLoader color="#89aae3" size={40} />;
};

export const Spinner = memo(Component);
