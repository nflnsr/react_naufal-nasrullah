import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { productAPI } from "@/apis/products-api";

type ProductData = {
  data: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
};

const initialState: ProductData = {
  data: [],
  status: "idle",
  error: "",
};

export const getAllProducts = createAsyncThunk("products/getAllProducts", productAPI.getAllProducts);
export const getProductById = createAsyncThunk("products/getProductById", productAPI.getProductById);
export const addProduct = createAsyncThunk("products/addProduct", productAPI.addProduct);
export const editProduct = createAsyncThunk("products/editProduct", productAPI.editProduct);
export const deleteProduct = createAsyncThunk("products/deleteProduct", productAPI.deleteProduct);

export const productData = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      let no = 1;
      const products = action.payload.map((product: { id: string; no: number }) => {
        // product.id = nanoid() redux || uuidv4() uuid;
        product.no = no++;
        return product;
      });
      state.data = products;
      state.status = "succeeded";
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getProductById.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(addProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = "succeeded";
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(editProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      const { id, name, category, image, freshness, desc, price } = action.payload;
      const index = state.data.findIndex((products) => products.id === id);
      state.data[index].name = name;
      state.data[index].category = category;
      state.data[index].image = image;
      state.data[index].freshness = freshness;
      state.data[index].desc = desc;
      state.data[index].price = price;
      state.status = "succeeded";
    });
    builder.addCase(editProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const { id } = action.payload;
      const index = state.data.findIndex((products) => products.id === id);
      state.data.splice(index, 1);
      state.status = "succeeded";
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const selectProducts = (state: { products: ProductData }) => state.products.data;
export const productsStatus = (state: { products: ProductData }) => state.products.status;
export const productsError = (state: { products: ProductData }) => state.products.error;

export default productData.reducer;
