/* eslint-disable react/prop-types */
// export { default as SideBar } from "./SideBar";

export const SideBar = ({ children }) => {
  return (
    <div>
      <p>This is a paragrtaf from the sidebar xdd </p>
      {children}
    </div>
  );
};
