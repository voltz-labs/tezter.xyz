import { PropsWithChildren } from "react";

export interface TitleProps extends PropsWithChildren<{}> {}

export const Title = ({ children }: TitleProps) => {
  return (
    <div className="my-5">
      <h1 className="fw-bold">{children}</h1>
    </div>
  );
};
