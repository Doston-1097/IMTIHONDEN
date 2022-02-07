import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import productData from "../../data/products";


const CreateForm = ({ form }) => {
  const navigate = useNavigate();

  const submit = (data) => {
    productData.push(data);

    navigate("../");
  };

  return (
    <>
      <h2 className="mb-5 head-h1">Qo'shish</h2>
      <Form form={form} submit={submit} />
    </>
  );
};

export default CreateForm;
