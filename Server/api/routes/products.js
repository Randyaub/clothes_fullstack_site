import express from "express";
import productsController from "../controllers/products";

const router = express.Router();

router.get(
  "/:gender/Shop-Category/:category/:subcategory",
  productsController.products_get_subcategory
);
router.get(
  "/:gender/Shop-Category/:category",
  productsController.products_get_category
);
router.get("/Product-Page/:sku", productsController.products_get_product);

export default router;
