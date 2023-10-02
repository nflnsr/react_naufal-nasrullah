import React from "react";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

type Product = {
  productData: ProductData[];
};

interface ProductData {
  id: string;
  name: string;
  category: string;
  image?: File | HTMLImageElement | string;
  freshness: string;
  desc: string;
  price: number;
}

const productTitle = [
  "No",
  "Product Name",
  "Product Category",
  "Image of Product",
  "Product Freshness",
  "Additional Desciption",
  "Product Price",
];

const ProductTable: React.FC<Product> = React.memo(({ productData }) => {
  const data = productData.map((item) => {
    return [item.id, item.name, item.category, item.image, item.freshness, item.desc, item.price];
  });

  return (
    <section>
      <div className="px-0 px-md-5">
        <Grid
          data={data}
          columns={productTitle}
          search={true}
          pagination={{
            enabled: true,
            limit: 3,
          }}
        />
      </div>
    </section>
  );
});

export default ProductTable;
