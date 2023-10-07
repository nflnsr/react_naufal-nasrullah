import { ColumnDef } from "@tanstack/react-table";
import { DeleteBtn } from "./ui/delete-btn";
import { ShowBtn } from "./ui/show-btn";
import { EditBtn } from "./ui/edit-btn";
import { Product } from "@/types/product";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "no",
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
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center gap-2">
          <ShowBtn id={row.original.id} />
          <DeleteBtn id={row.original.id} />
          <EditBtn id={row.original.id} />
        </div>
      );
    },
  },
];
