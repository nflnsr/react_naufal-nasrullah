import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

const productTitle = [
  "No",
  "Product Name",
  "Product Category",
  "Image of Product",
  "Product Freshness",
  "Additional Desciption",
  "Product Price",
];

const dataProduct = [
  {
    id: "1",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 700",
  },
  {
    id: "2",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 600",
  },
  {
    id: "3",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 500",
  },
  {
    id: "4",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 400",
  },
  {
    id: "5",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 300",
  },
  {
    id: "6",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 200",
  },
  {
    id: "7",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 100",
  },
];

const ProductList = () => {
  return (
    <div className="px-0 px-md-5">
      <Grid
        data={dataProduct.map((item) => {
          return [
            item.id,
            item.name,
            item.category,
            item.image,
            item.freshness,
            item.desc,
            item.price,
          ];
        })}
        columns={productTitle}
        search={true}
        pagination={{
          limit: 3,
        }}
      />
    </div>
  );
};

export default ProductList;
