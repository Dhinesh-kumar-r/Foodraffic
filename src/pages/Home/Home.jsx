import { useState } from "react";
import Header from "../../component/Header/Header";
import Menu from "../../component/Menu/Menu";
import Modal from "../../component/Modal/Modal";

export const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
     
        <Header />
        <Menu category={category} setCategory={setCategory} />
        <Modal />
    </>
  );
};
