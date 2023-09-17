import { useState } from "react";
import style from "@/assets/css/InputFile.module.css";
import ModalFormSucces from "@/components/Modal";

const ProductForm = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [inputErr, setInputError] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productCategory = document.getElementById("product-category") as HTMLSelectElement;
    if (productCategory.value === "DEFAULT") productCategory.setCustomValidity("Please select a category");
    else productCategory.setCustomValidity("");

    const forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach((form) => {
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add("was-validated");
      } else setFormSuccess(true);
    });
  };

  const handleChange = () => {
    const productName = document.getElementById("product-name") as HTMLInputElement;
    if (productName.value.length > 10) {
      productName.setCustomValidity("invalid");
      setInputError("input can't exceed 10 characters");
    } else if (productName.value.length <= 10) {
      productName.setCustomValidity("");
      setInputError("");
    }
    if (productName.value.length >= 25) alert("input can't exceed 25 characters");
  };

  return (
    <section className="mx-auto px-4 d-flex flex-column align-items-center mt-5 px-sm-5" style={{ maxWidth: "850px" }}>
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="ms-1 fw-semibold fs-4">Detail Product</h2>
        <ModalFormSucces success={formSuccess} />
        <form className="needs-validation" noValidate onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="product-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              maxLength={28}
              className="rounded-2 border-2 form-control"
              style={{ width: "250px" }}
              onChange={() => handleChange()}
              required
            />
            <p className="text-danger mt-1">{inputErr}</p>
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
              className={`border border-2 border-primary rounded-3 text-primary form-control ${style.input}`}
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
          <div className="px-4 mb-5" style={{ marginTop: "50px" }}>
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
    </section>
  );
};

export default ProductForm;
