import { FC, memo } from "react";

type Props = {
  name: string;
  changeHandler: (name: string) => void;
};
const Input: FC<Props> = memo(({ name, changeHandler }) => {
  console.log("Input cmp rendered");
  return (
    <>
      <input
        type="text"
        name="test"
        onChange={(e) => changeHandler(e.target.value)}
        value={name}
      />
    </>
  );
});
export default Input;
