import React from 'react';
import styles from '../DictionaryResult.module.scss'
interface WordPronounceProps {
  word: string;
  soundUrl: string;
  className?: string;
}
const WordPronounce: React.FC<WordPronounceProps> = ({word, soundUrl, className}) => {

  const playWord = (soundUrl:string) => {
     new Audio(soundUrl).play();
  }

  return (
    <span className={className}>
      {word}
      <button className={styles.soundBtn} onClick={()=>playWord(soundUrl)} />
    </span>
  );
};

export default WordPronounce;