import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Ilorin,Ibadan,Lagos"
  );
  return (
    <div className="featured">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1618828665347-d870c38c95c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFnb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lagos</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://res.cloudinary.com/sulymanayomi/image/upload/v1665050581/aerial-mapo-hall-ibadan-600w-1127989112_lmnmx1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ibadan</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://res.cloudinary.com/sulymanayomi/image/upload/v1665050581/ilorin-central-mosque-very-beautiful-600w-2160134501_ohuiqx.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ilorin</h1>

              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
