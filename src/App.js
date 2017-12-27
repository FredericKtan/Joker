import React from 'react';

import { Card } from './components/Card';

const App = () => (
  <div>
    <Card number={2} color="hearts" />
    <Card number={2} color="spades" />
    <Card number={2} color="diamonds" />
    <Card number={2} color="clubs" />
    <Card number={3} color="hearts" />
    <Card number={3} color="spades" />
    <Card number={3} color="diamonds" />
    <Card number={3} color="clubs" />
    <Card number={4} color="hearts" />
    <Card number={4} color="spades" />
    <Card number={4} color="diamonds" />
    <Card number={4} color="clubs" />
  </div>
);

export default App;
