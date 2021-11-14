import React from 'react';
import styles from "../DictionaryResult.module.scss";
import { v4 as uuidv4 } from 'uuid';

interface WordsListProps {
  setWord: (val:string)=> void;
  list: string[];
  check?: boolean;
  title?: string;
}
const WordsList: React.FC<WordsListProps> = ({setWord, list, check=true,title}) => {
  return (
    <>
      {check && (
        <>
          <p className={styles.smallTitle}>{title}:</p>
          <ul className={styles.infoList}>
            {
              list.map((item:string)=>{
                return <li key={uuidv4()}>
                  <button className={styles.definition} onClick={()=>setWord(item)}>
                    {item}
                  </button>
                </li>
              })
            }
          </ul>
        </>
      )}
    </>
  );
};

export default WordsList;