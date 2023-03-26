import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShoAll] = useState(false);
  const [UniqueId, setUniqueId] = useState(null);
  // console.log(UniqueId);

  const handleShowAll = () => {
    // console.log("hello");
    setShoAll(true);
  };

  const handleSort = () => {
    const sortData = data.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    setData([...data, sortData])
  };

  useEffect(() => {
    console.log("hello from useEffect ");
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${UniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [UniqueId]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const dataAp = await res.json();
      // console.log(dataAp.data.tools);
      setData(dataAp.data.tools);
    };

    loadData();
  }, []);
  // console.log(singleData);
  // console.log(data);

  return (
    <>
      <span onClick={handleSort}>
        <Button>Sort By Date</Button>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6">
        {/* {data.map((singleData) => {
          // console.log(singleData)
          return <SingleData singleData={singleData} />;
        })} */}

        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData
            singleData={singleData}
            key={singleData.id}
            setUniqueId={setUniqueId}
          />
        ))}
      </div>

      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>See More</Button>
        </span>
      )}

      <Modal singleData={singleData} />
    </>
  );
};

export default Card;
