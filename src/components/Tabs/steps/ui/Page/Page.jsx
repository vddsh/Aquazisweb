import "./Page.scss";

export const Page = ({ children }) => (
  <div className="constructor__page">
    <div className="container">{children}</div>
  </div>
);
