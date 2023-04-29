import { Oval } from "react-loader-spinner";
import { Wrap } from "./Loader.styled";

export const Loader = () => {
  return (
    <Wrap>
      <Oval
        height={80}
        width={80}
        color="#5CD3A8"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#471CA9"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </Wrap>
  );
};
