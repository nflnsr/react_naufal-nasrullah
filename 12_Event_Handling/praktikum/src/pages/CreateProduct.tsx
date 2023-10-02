import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import ProductForm from "@/components/ProductForm";
import TableProduct from "@/components/ProductTable";
import Footer from "@/components/Footer";
import GenerateNumber from "@/components/GenerateNumber";
import Article from "@/components/Article";

export const CreateProduct = () => {
  const data = useFetch("/v1/98c2bfc1-0f1e-4ab7-946d-b9ebd4bd416f");
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      data.then((data) => setProductData(data));
      console.log(
        "Munculnya error [Grid.js] [ERROR]: Duplicate plugin ID disebabkan oleh rendering yg terjadi saat data diperbarui. Ini merupakan bug pada library tersebut yg meduplikasi plugin meski sudah terpakai. Bug ini masih belum difix sejak 8 bulan yg lalu dan dari demo library tersebut juga ternyata bisa terlihat. Broken dikit ga ngaruh lah ya."
      );
    }
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Article />
      <ProductForm />
      <GenerateNumber />
      <TableProduct productData={productData} />
      <Footer />
    </main>
  );
};
