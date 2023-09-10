import bootstrapLogo from "@/assets/bootstrap-logo.svg";
import ProductForm from "@/components/Product/ProductForm";
import ProductList from "@/components/Product/ProductList";

export const CreateProduct = () => {
  return (
    <main>
      <section
        className="mx-auto px-5 d-flex flex-column align-items-center mt-5"
        style={{ maxWidth: "850px" }}
      >
        <img
          src={bootstrapLogo}
          alt="Bootstrap logo"
          style={{ width: "65px" }}
        />
        <h1 className="fw-semibold fs-2 mt-4">Create Product</h1>
        <p className="text-center">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
        <ProductForm />
      </section>
      <section>
        <ProductList />
      </section>
    </main>
  );
};
