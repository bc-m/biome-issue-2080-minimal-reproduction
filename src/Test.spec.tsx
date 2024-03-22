import type { ReactElement } from 'react';

export const testFn = () => {
  const foo = 'bar';

  return ({ children }: any): ReactElement => (
    <div>
      {foo
        ? children
        : <span>Long Text Here Long Text Here Long Text Here Long Text Here Long Text Here Long Text Here</span>}
    </div>
  );
};
