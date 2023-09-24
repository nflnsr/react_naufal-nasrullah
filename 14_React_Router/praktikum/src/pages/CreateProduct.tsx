import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import ProductForm from "@/components/ProductForm";
import TableProduct from "@/components/ProductTable";
import Footer from "@/components/Footer";
import GenerateNumber from "@/components/GenerateNumber";
import Article from "@/components/Article";
import { useNavigate } from "react-router-dom";

interface ProductData {
  id: string;
  name: string;
  category: string;
  image?: File | HTMLImageElement | string;
  freshness: string;
  desc: string;
  price: number | string;
}

const CreateProduct = () => {
  const data = useFetch("/v1/98c2bfc1-0f1e-4ab7-946d-b9ebd4bd416f");
  const [productData, setProductData] = useState<ProductData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      data.then((data) => setProductData(data));
      console.log(
        "Munculnya error [Grid.js] [ERROR]: Duplicate plugin ID disebabkan oleh rendering yg terjadi saat data diperbarui. Ini merupakan bug pada library tersebut yg meduplikasi plugin meski sudah terpakai. Bug ini masih belum difix sejak 8 bulan yg lalu dan dari demo library tersebut juga ternyata bisa terlihat."
      );
    }
    return () => {
      ignore = true;
    };
  }, []);

  const handleOnSubmit = (data: ProductData) => {
    const { name, category, image, freshness, desc, price } = data;
    const lastIndex = productData.length - 1;
    let lastId = 0;
    if (productData.length !== 0) lastId = Number(productData[lastIndex].id);
    const newData: ProductData = {
      id: String(Number(lastId + 1)),
      name: name,
      category: category,
      image: image,
      freshness: freshness,
      desc: desc,
      price: Number(price),
    };
    setProductData(productData.concat(newData));
  };

  const handleDelete = (id: string) => {
    const newData = productData.filter((item) => `delete-button-${item.id}` !== id);
    setProductData(newData);
  };

  const handleShow = (id: string) => {
    const slug = id.replace("show-button-", "");
    const product = productData.filter((item) => String(item.id) === slug);
    navigate(`/product/${slug}`, { state: product[0] });
  };

  return (
    <main>
      <Article />
      <ProductForm handleOnSubmit={handleOnSubmit} />
      <GenerateNumber />
      <TableProduct productData={productData} handleDelete={handleDelete} handleShow={handleShow} />
      <Footer />
    </main>
  );
};

export default CreateProduct;
