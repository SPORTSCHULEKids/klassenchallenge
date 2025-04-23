export const Card = ({ children, ...props }) => <div {...props} className="p-4 border rounded bg-white">{children}</div>;
export const CardContent = ({ children }) => <div>{children}</div>;