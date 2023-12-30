import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import lang from "../utils/languageConstant";
import openai from '../utils/openai';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async() => {
        const gptQuery = "Act as a Movie Recommendation system suggest some movies for the query :" + searchText.current.value + ". only give me names of 5 movies. comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

          console.log("gptResult===>",gptResult.choices);
    }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar