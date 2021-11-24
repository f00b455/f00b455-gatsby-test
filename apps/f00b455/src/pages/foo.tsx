import './foo.module.scss';

/* eslint-disable-next-line */
export interface FooProps {}

export function Foo(props: FooProps) {
  return (
    <div>
      <h1>Welcome to Foo!</h1>
    </div>
  );
}

export default Foo;
