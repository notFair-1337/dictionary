import React, {useState} from 'react';
import {DictionaryForm} from "../DictionaryForm";
import styles from './App.module.scss';
import {DictionaryResult} from "../DictionaryResult";
const App = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  return (
    <div className={styles.mainWrapper}>
      <DictionaryForm setSearchWord={setSearchWord} searchWord={searchWord}/>
      {searchWord && <DictionaryResult searchWord={searchWord} setSearchWord={setSearchWord}/>}
    </div>
  );
};

export default App;