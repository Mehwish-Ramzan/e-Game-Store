// Simple max-width wrapper (uses your .container-page class from index.css)

export default function Container({ children, className = "" }) {
  return <div className={`container-page ${className}`}>{children}</div>;
}
