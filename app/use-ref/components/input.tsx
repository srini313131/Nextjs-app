import { FC, memo } from "react";

type Props = {
  name: string;
  changeHandler: (name: string) => void;
};
export default memo(function Input({ name, changeHandler }: Props) {
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
