import "./Addproduct.css";
import { useState } from "react";
import { supabase } from "../Supabase";

export  function Addproduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .insert([
  {
    Title: title,
    Description: description,
    Price: Number(price),
    Image_url: imageUrl,
    Category: category,
  },
]);

    if (error) {
      alert("Error: " + error.message);
      console.log(error);
    } else {
      alert("Product Added Successfully!");

      setTitle("");
      setDescription("");
      setPrice("");
      setImageUrl("");

    }
  };

 return (
  <div className="add-product-page">
    <form onSubmit={handleSubmit} className="add-product-form">
      <h1>Add Product</h1>

      <input
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">Select Category</option>
  <option value="watch">Smart Watch</option>
  <option value="headphone">Headphone</option>
  <option value="sneaker">Sneaker</option>
</select>
      <button className="add-product-btn" type="submit">
        Add Product
      </button>
    </form>
  </div>
 )
}