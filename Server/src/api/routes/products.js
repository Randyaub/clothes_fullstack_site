import express from "express";
import productsController from "../controllers/products";

const router = express.Router();

router.get("/:gender/Shop-Category/all", productsController.getAllProducts);
router.get(
  "/:gender/Shop-Category/:category",
  productsController.getProductByCategories
);
router.get(
  "/:gender/Shop-Category/:category/:subcategory",
  productsController.getProductBySubCategory
);
router.get("/Product-Page/:sku", productsController.getSpecificProduct);

export default router;
