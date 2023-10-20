import classNames from "classnames";

export const Background = ({ className }: { className?: string }) => (
  <div className={classNames("fixed inset-0 -z-10", className)}>
    <div className="w-full h-full bg-gradient-to-b from-secondary/30 to-base-100" />
  </div>
);
