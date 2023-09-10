import { useState } from "react";
import "./InputFileBtn.css";
import ModalFormSucces from "@/components/Modal/ModalSuccessForm";

const ProductForm = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [textContext, setTextContext] = useState(
    "Your product has been successfully added to the list"
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productCategory = document.getElementById(
      "product-category"
    ) as HTMLSelectElement;
    if (productCategory.value === "DEFAULT")
      productCategory.setCustomValidity("Please select a category");
    else {
      productCategory.setCustomValidity("");
      setFormSuccess(false);
    }

    const forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach((form) => {
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add("was-validated");
        setTextContext("Please fill in the form correctly");
      } else {
        setTextContext("Your product has been successfully added to the list");
        setFormSuccess(true);
      }
    });
  };

  return (
    <div style={{ maxWidth: "500px", width: "100%" }}>
      <h2 className="ms-1 fw-semibold fs-4">Detail Product</h2>
      <ModalFormSucces textContext={textContext} success={formSuccess} />
      <form className="needs-validation" noValidate onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="product-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            maxLength={25}
            className="rounded-2 border-2 form-control"
            style={{ width: "250px" }}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="product-category" className="form-label">
            Product Category
          </label>
          <select
            id="product-category"
            name="product-category"
            className="rounded-2 border-2 form-control"
            style={{ width: "200px", height: "40px" }}
            defaultValue="DEFAULT"
            onChange={(e) => {
              if (e.target.value !== "DEFAULT") {
                e.target.setCustomValidity("");
              }
            }}
            required
          >
            <option value="DEFAULT" disabled>
              Choose...
            </option>
            <option value="Convenience">Convenience</option>
            <option value="Shopping">Shopping</option>
            <option value="Specialty">Specialty</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="product-image" className="form-label">
            Image of Product
          </label>
          <input
            type="file"
            id="product-image"
            name="product-image"
            className="border border-2 border-primary rounded-3 text-primary form-control"
            style={{ height: "40px", width: "250px" }}
            required
          />
        </div>
        <div className="mt-4">
          <label>Product Freshness</label>
          <div>
            <input
              type="radio"
              id="brand-new"
              name="product-freshness"
              className="form-check-input"
              value="brand-new"
              required
            />
            <label htmlFor="brand-new" className="form-label ms-1">
              Brand New
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="second-hank"
              name="product-freshness"
              className="form-check-input"
              value="second-hank"
              required
            />
            <label htmlFor="second-hank" className="form-label ms-1">
              Second Hank
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="refurbished"
              name="product-freshness"
              className="form-check-input"
              value="refurbished"
              required
            />
            <label htmlFor="refurbished" className="form-label ms-1">
              Refurbished
            </label>
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="product-description" className="form-label">
            Additional Description
          </label>
          <textarea
            name="product-description"
            id="product-description"
            cols={30}
            rows={5}
            className="border-2 form-control"
            style={{ width: "100%" }}
            required
          ></textarea>
        </div>
        <div className="mt-4">
          <label htmlFor="product-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            placeholder="$ 1"
            className="px-4 form-control"
            required
          />
        </div>
        <div className="px-4 mb-5" style={{ marginTop: "120px" }}>
          <button
            type="submit"
            className="w-100 bg-primary text-white border-0 py-2 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
