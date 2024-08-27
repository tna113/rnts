/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import Proj1 from './android/projects/Proj1';

// type SectionProps = PropsWithChildren<{ title: string; }>;
// function Section({children, title}: SectionProps): React.JSX.Element {}

function App(): React.JSX.Element {
  return (
    <Proj1 />
  );
}

export default App;
