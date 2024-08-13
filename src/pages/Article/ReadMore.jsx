import React ,{useState} from "react";
import RecentArticles from "./RecentArticles";
const ReadMore = ({ children }) => {
    const [isReadMore, setIsReadMore] = useState(true);
  
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
    const styles= {
      readMoreButton: {
          background: "none",
          border: "none",
          color: "blue",
          cursor: "pointer",
          textDecoration: "underline",
          fontSize: "1em",
          padding: "0",
          marginLeft: "5px"
        }
    }
  
    return (
      <div>
        <p>
          {isReadMore ? `${children.slice(0, 100000)}...` : children}
          <button onClick={toggleReadMore} className="readMoreButton">
            {isReadMore ? 'Read More' : 'Read Less'}
          </button>
          <RecentArticles/>
        </p>
      </div>
    );
  };
  
  export default ReadMore;
  