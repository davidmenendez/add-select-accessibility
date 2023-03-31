import { useState, useMemo } from 'react';
import coolData from './data.json';
import { getNormalizedData } from './utils';
import { prefix } from './constants';
import Header from './AddSelect/Header';
import Breadcrumbs from './AddSelect/Breadcrumbs';
import List from './AddSelect/List';
import Footer from './AddSelect/Footer';
import './App.scss';

const App = () => {
  const data = useMemo(
    () => getNormalizedData(coolData),
    []
  );
  const [selected, setSelected] = useState('');
  const [parent, setParent] = useState('');
  const [breadcrumbs, setBreadcrumbs] = useState([{
    label: 'Home',
    guid: '',
  }]);

  const onSave = () => {
    console.log('saved', selected);
  };

  const parentHandler = (guid, name) => {
    setParent(guid);
    const newCrumbs = [...breadcrumbs, {
      label: name,
      guid,
    }];
    setBreadcrumbs(newCrumbs);
  };

  const crumbHandler = (idx, guid) => {
    const newCrumbs = breadcrumbs.slice(0, idx + 1);
    setBreadcrumbs(newCrumbs);
    setParent(guid);
  };

  const entires = Object.keys(data).filter(guid => {
    const entry = data[guid];
    if (parent && entry?.parentId === parent) {
      return guid;
    }

    if (!parent && !entry.parentId) {
      return guid;
    }

    return false;
  });

  return (
    <div className={prefix}>
      <Header>
        <h1>add select accessibility demo</h1>
        <Breadcrumbs
          items={breadcrumbs}
          crumbHandler={crumbHandler}
        />
      </Header>
      <List
        data={data}
        entries={entires}
        selected={selected}
        setSelected={setSelected}
        parentHandler={parentHandler}
        breadcrumbLevel={breadcrumbs.length}
      />
      <Footer
        selected={selected}
        onSave={onSave}
      />
    </div>
  );
}

export default App;
