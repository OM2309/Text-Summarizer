import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
const Demo = () => {
  
  const [article ,setArticle] = useState({
    url:'',
    summary:''
  })

const handleSubmit =  () => {
  alert('Submitted');
}
  return (
    <>
      <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col w-full gap-2">
          <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
            <img src={linkIcon} className="absolute left-0 my-2 ml-2 w-5" />
            <input
              type="url"
              placeholder="Enter a URL"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              className="url_input peer"
              required
            />
            <button
              type="submit"
              className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
            >
              <p>↵</p>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Demo;
