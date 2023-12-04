/**
 * This layout is used on a single product page
 *
 */

const SingleProductLayout = ({ children, classes }) => {
  return (
    <div className={` ${classes} min-w-[1100px]  m-auto max-w-7xl h-auto`}>
      {children}{" "}
    </div>
  );
};

export default SingleProductLayout;
