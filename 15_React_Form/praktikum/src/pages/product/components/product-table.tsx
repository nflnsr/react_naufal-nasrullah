import { Cell, ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

interface CellComponentProps<TData> {
  cell: Cell<TData, unknown>;
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const ProductTable = React.memo(
  <TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) => {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      <div>
        <div className="border-[1px] border-black rounded-lg">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="border-[1px] border-gray-200 text-center rounded-lg"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => {
                  return (
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => {
                        return <CellComponent key={cell.id} cell={cell} />;
                      })}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-base font-mono">
            <strong>API</strong>:{" "}
            <Link to="https://mocki.io/v1/cd86a97f-1f9c-4828-853b-4085dac3aff9" className="text-blue-400">
              https://mocki.io/v1/cd86a97f-1f9c-4828-853b-4085dac3aff9
            </Link>
          </h2>
          <h5 className="mt-12">Made by <span className="text-red-500">Naufaln</span> with <span className="underline">React, Tailwind, Shadcn, React Hook Form, Zod, TypeScript</span></h5>
        </div>
      </div>
    );
  }
);

function CellComponent<TData>({ cell }: CellComponentProps<TData>) {
  return (
    <TableCell className="text-center border-[1px] border-gray-200 rounded-lg">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  );
}