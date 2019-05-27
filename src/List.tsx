import React from 'react';

const List = <T,>({ data, displayAttribute, ...rest }: { data: T[], displayAttribute: keyof T } & JSX.IntrinsicElements['ul']) => (
  <ul {...rest}>
    {data.map((el, index) => (
      <li key={index}>{el[displayAttribute]}</li>
    ))}
  </ul>
);

export default React.memo(List) as any as typeof List;
