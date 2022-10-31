import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const images = [
    "https://res.cloudinary.com/sulymanayomi/image/upload/v1665051117/view-hotel-evening-sky-600w-272628785_gtapek.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://res.cloudinary.com/sulymanayomi/image/upload/v1665051116/log-cabin-forest-summer-lighthouse-600w-1231887496_uwejdy.jpg",
  ];
  const { data, loading, error } = useFetch("/hotels/countByType");

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => {
              return (
                <div className="pListItem" key={i}>
                  <img src={img} alt="" className="pListImg" />
                  <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>
                      {data[i]?.count} {data[i]?.type}
                    </h2>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default PropertyList;
