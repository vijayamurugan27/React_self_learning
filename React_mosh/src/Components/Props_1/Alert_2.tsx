import { ReactNode } from "react";
 
interface Props {
    children: ReactNode;
}

const Alert_2 = ({ children }:Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert_2