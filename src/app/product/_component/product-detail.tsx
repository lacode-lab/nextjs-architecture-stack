import { UseFormRegister, FieldErrors } from "react-hook-form";

type ProductDetailProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

export const ProductDetail = ({ register, errors }: ProductDetailProps) => {
  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="category"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Category:
        </label>
        <input
          type="text"
          id="category"
          {...register("category")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.category && (
          <p style={{ color: "red" }}>{errors.category.message?.toString()}</p>
        )}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="weight"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Weight (kg):
        </label>
        <input
          type="text"
          id="weight"
          {...register("weight")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {errors.weight && (
          <p style={{ color: "red" }}>{errors.weight.message?.toString()}</p>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="size" style={{ display: "block", marginBottom: "5px" }}>
          Size:
        </label>
        <input
          type="text"
          id="size"
          {...register("size")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="color"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Color:
        </label>
        <input
          type="text"
          id="color"
          {...register("color")}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
    </>
  );
};
