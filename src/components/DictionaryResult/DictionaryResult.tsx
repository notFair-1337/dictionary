import React from 'react';
import {useGetDefinitionByWordQuery} from "../../services/dictionary";
import styles from './DictionaryResult.module.scss';
import {v4 as uuidv4} from 'uuid';
import {WordPronounce, WordsList} from "./components";

interface DictionaryResultProps {
  searchWord: string,
  setSearchWord: (val: string) => void;
}

const DictionaryResult: React.FC<DictionaryResultProps> = ({searchWord, setSearchWord}) => {
  const {data, error, isLoading} = useGetDefinitionByWordQuery(searchWord);
  return (
    <>
      {
        error && <div className={styles.resultBox}><h2 className={styles.wordTitle}>Not found</h2></div>
      }
      {
        isLoading && <div className={styles.resultBox}>
          <h2 className={styles.wordTitle}>Loading...</h2>
        </div>
      }
      {data && !error && <div className={styles.resultBox}>
        <h2 className={styles.wordTitle}>
          {data[0]?.word}
          {data[0].phonetics[0]?.text && <WordPronounce word={data[0].phonetics[0]?.text} soundUrl={data[0].phonetics[0].audio} className={styles.pronounce}/>}
        </h2>
        <div className={styles.info}>
          {data[0].meanings.map((meaningItem: any) => {
            return (
              <div key={uuidv4()} className={styles.infoItem}>
                {meaningItem.partOfSpeech && <p className={styles.title}>{meaningItem.partOfSpeech}:</p>}
                <ul className={styles.infoList}>
                  {
                    meaningItem?.definitions.map((item: any) => {
                      return (
                        <li key={uuidv4()}>
                          <p className={styles.definition}>{item.definition}</p>
                          {
                            item.example?.length > 0 && (
                              <>
                                <p className={styles.smallTitle}>Example:</p>
                                <p className={styles.exampleText}>"{item.example}"</p>
                              </>
                            )
                          }
                          <WordsList check={item.synonyms?.length > 0}
                                     setWord={setSearchWord}
                                     list={item.synonyms}
                                     title='Synonyms'
                          />
                          <WordsList check={item.antonyms?.length > 0}
                                     setWord={setSearchWord}
                                     list={item.antonyms}
                                     title='Antonyms'
                          />
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })}
        </div>
      </div>}
    </>
  );
};

export default DictionaryResult;