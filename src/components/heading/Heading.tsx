import './Heading.css';

type HeadingProps = {
  children: string;
  attr: number;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
}
