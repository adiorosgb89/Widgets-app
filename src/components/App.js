import React from 'react';
import Accordion from './Accordion';
import Search from './Search';
import TextChanger from './TextChanger';
import Translate from './Translate';
import Videos from './YoutupeApp';
import Route from './Route';
import Header from './Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end js framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite js library',
  },
  {
    title: 'How do you use React?',
    content: 'You can create components with React',
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/colorchanger">
        <TextChanger />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/videos">
        <Videos />
      </Route>

      {/* <Translate /> */}
    </div>
  );
};

export default App;
