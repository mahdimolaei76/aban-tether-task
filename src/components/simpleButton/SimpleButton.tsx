import { SimpleButtonPropsTypes } from "./simpleButton.types";

const SimpleButton = (props: SimpleButtonPropsTypes) => {
  const {
    text,
    onClick,
    style = {},
  } = props;

  return (
    <span className="flex-center" onClick={onClick} style={style}>
      {text}
    </span>
  );
};


export default SimpleButton;
