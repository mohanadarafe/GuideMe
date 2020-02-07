import React from 'react';
import Navigator from './routes/routeStack';

//Navigator is an alias, we can give it any name we want, since it is a default export.
export default function App() {
  console.disableYellowBox = true;
  return (
    <Navigator />
  );
}
