import React, {useEffect, useState} from 'react';
import styles from './DictionaryForm.module.scss'

interface DictionaryFormProps {
  setSearchWord: (word:string)=>void;
  searchWord: string;
}

const DictionaryForm: React.FC<DictionaryFormProps> = ({setSearchWord, searchWord}) => {
  const {form, input, button} = styles;
  const [searchInputValue, setSearchInputValue] = useState<string>(searchWord);

  useEffect(()=>{
    setSearchInputValue(searchWord)
  }, [searchWord]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchWord(searchInputValue);
  }
  const handleFormValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit} className={form}>
      <input onChange={handleFormValue} value={searchInputValue} className={input} placeholder='Type a word...'/>
      <button className={button} type='submit'/>
    </form>
  );
};

export default DictionaryForm;