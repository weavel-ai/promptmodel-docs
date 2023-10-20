import { Background } from "./Background";

export const MainContentWrapper = (props) => {
  return (
    <>
      {props.children}
      <Background />
    </>
  );
};
