import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import "@/assets/css/Table.module.css";
import React, { useEffect, useState } from "react";
const productTitle = [
  "No",
  "Product Name",
  "Product Category",
  "Image of Product",
  "Product Freshness",
  "Additional Desciption",
  "Product Price",
  "Delete Product",
  "Show Product",
];
// import { useHistory } from "react-router-dom"

type Product = {
  productData: ProductData[];
  handleDelete: (id: string) => void;
  handleShow: (id: string) => void;
};

interface ProductData {
  id: string;
  name: string;
  category: string;
  image?: File | HTMLImageElement | string;
  freshness: string;
  desc: string;
  price: number | string;
}


const ProductTable: React.FC<Product> = ({ productData, handleDelete, handleShow }) => {
  const [data, setData] = useState<unknown>([]);
  const [btnTotal, setBtnTotal] = useState(0);

  useEffect(() => {
    const eachData = productData.map((item) => {
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger";
      deleteBtn.innerHTML = "Delete";
      deleteBtn.id = `delete-button-${item.id}`;
      deleteBtn.type = "button";
      const showBtn = document.createElement("button");
      showBtn.className = "btn btn-info";
      showBtn.innerHTML = "Show";
      showBtn.id = `show-button-${item.id}`;
      showBtn.type = "button";
      setBtnTotal((prev) => prev + 1);
      return [
        item.id,
        item.name,
        item.category,
        item.image,
        item.freshness,
        item.desc,
        `$ ${item.price}`,
        deleteBtn,
        showBtn,
      ];
    });
    setData(eachData);
  }, [productData]);

  useEffect(() => {
    const addEventBtn = setTimeout(() => {
      const deleteBtn = [];
      const showBtns = [];
      for (let i = 1; i <= btnTotal; i++) {
        const delBtnId = `delete-button-${i}`;
        const delBtn = document.getElementById(delBtnId);
        const showBtnId = `show-button-${i}`;
        const showBtn = document.getElementById(showBtnId);
        if (delBtn) {
          deleteBtn.push(delBtn);
        }
        if (showBtn) {
          showBtns.push(showBtn);
        }
      }

      deleteBtn.forEach((button) => {
        button.addEventListener("click", (e: MouseEvent) => {
          const targetId = e.target ? (e.target as HTMLElement).id : null;
          handleDelete(targetId!);
        });
      });

      showBtns.forEach((button) => {
        button.addEventListener("click", (e: MouseEvent) => {
          const targetId = e.target ? (e.target as HTMLElement).id : null;
          handleShow(targetId!);
        });
      });
    }, 300);
    return () => {
      clearTimeout(addEventBtn);
    };
  }, [data]);

  // const handleClick = (id) => {
  //   history.push({
  //     pathname: `/product/${id}`
  //   })
  // }

  // useEffect(() => {
  //   const addEventList = setTimeout(() => {
  //     const list = document.querySelectorAll(".gridjs-td");
  //     list.forEach((item) => {
  //       item.addEventListener("click", (e) => {
  //           // handleClick()

  //           console.log(e);
  //       });
  //     });
  //   }, 300);
  //   return () => {
  //     clearTimeout(addEventList);
  //   }
  // }, [data]);

  return (
    <section style={{ marginBottom: "150px" }}>
      <div className="px-0 px-md-5" style={{ marginTop: "220px" }}>
        <h6 className="text-center px-4 mt-2">
          API: https://mocki.io/v1/98c2bfc1-0f1e-4ab7-946d-b9ebd4bd416f
        </h6>
        <Grid
          data={data}
          columns={productTitle}
          search={true}
          pagination={{
            enabled: true,
            limit: 20,
          }}
          className={{
            td: "bga",
          }}
        />
      </div>
      <h6 className="text-center px-4 mt-2">
        Made by <span className="text-info">Naufal Nasrullah 🗿</span>
      </h6>
    </section>
  );
};

export default ProductTable;
