'use client'
import * as z from 'zod'

export default function ProductForm() {
    

    const commonSchema = z.object({

    })
const productSChame = commonSchema.extend({
    productCode: z.string(),
    productName: z.string().nullish(),
    caption: z.string().nullish()
})


//git remote add origin https://github.com/username/repository-name.git
//git remote add origin https://github.com/orangeeeee/ts-branded-sample.git


  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Product Form</h1>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="productCode" style={{ display: 'block', marginBottom: '5px' }}>Product Code:</label>
          <input
            type="text"
            id="productCode"
            name="productCode"
            value={formData.productCode}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="productName" style={{ display: 'block', marginBottom: '5px' }}>Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="caption" style={{ display: 'block', marginBottom: '5px' }}>Caption:</label>
          <textarea
            id="caption"
            name="caption"
            value={formData.caption}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}
          ></textarea>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="price" style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: '#0070f3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
