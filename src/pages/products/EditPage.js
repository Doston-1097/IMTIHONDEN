import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import productData from "../../data/products";

const CreateForm = ({ form }) => {
  const navigate = useNavigate();
  const params = useParams();

  const [index, setIndex] = useState(params.id);

  const submit = (data) => {
    productData[index] = data;

    navigate("../");
  };

  return (
    <>
      <h2 className="mb-5 head-h1">O'zgartirish</h2>
      <Form form={form} submit={submit} value={productData[index]} />
    </>
  );
};

export default CreateForm;
