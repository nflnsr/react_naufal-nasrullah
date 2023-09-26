import { ColumnDef } from "@tanstack/react-table";
import { DeleteBtn } from "./ui/delete-btn";
import { ShowBtn } from "./ui/show-btn";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Products = {
  id: string;
  name: string;
  category: string;
  image?: File | HTMLImageElement | string;
  freshness: string;
  desc: string;
  price: string;
};

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "id",
    header: "No",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <img
          className="max-w-[150px] lg:max-w-[200px] xl:max-w-[250px]"
          src={row.getValue("image")}
          alt=""
        />
      );
    },
  },
  {
    accessorKey: "freshness",
    header: "Freshness",
  },
  {
    accessorKey: "desc",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <p className="whitespace-nowrap">$ {row.getValue("price")}</p>;
    },
  },
  {
    header: "Delete",
    cell: ({ row }) => {
      return <DeleteBtn id={row.original.id} />;
    },
  },
  {
    header: "Show",
    cell: ({ row }) => {
      return <ShowBtn id={row.original.id} />;
    },
  },
];
