import pool from "../../db";

//INPUTS gender from parameter
const getAllProducts = async (req, res) => {
  const selectAllProducts = `
    SELECT clothes.name, clothes_variation.price, clothes_variation.sku, image.image FROM clothes_variation 
    INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
    INNER JOIN category ON category.id = clothes.category_id
    INNER JOIN gender ON clothes.gender_id = gender.id
    INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
    INNER JOIN image ON variation_colour.id = image.variation_colour_id
    WHERE gender.gender = $1`;

  try {
    const { gender } = req.params;
    const { rows, rowCount } = await pool.query(selectAllProducts, [gender]);
    const response = {
      count: rowCount,
      products: rows.map((product) => {
        return {
          name: product.name,
          price: product.price,
          SKU: product.sku,
          image: product.image,
        };
      }),
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//INPUTS gender and category from URL parameters
//Returns a list of clothes that fall in the category and gender provided
const getProductByCategories = async (req, res) => {
  const selectProductByCategory = `
    SELECT clothes.name, clothes_variation.price, clothes_variation.sku, image.image FROM clothes_variation 
    INNER JOIN clothes ON clothes.id = clothes_variation.clothes_id
    INNER JOIN variation_colour ON variation_colour.id = clothes_variation.id
    INNER JOIN image ON image.variation_colour_id = variation_colour.id
    INNER JOIN category ON category.id = clothes.category_id
    INNER JOIN gender ON gender.id = clothes.gender_id
    WHERE gender.gender = $1 AND category.category = $2`;

  try {
    const { gender, category } = req.params;
    const { rows, rowCount } = await pool.query(selectProductByCategory, [
      gender,
      category,
    ]);
    const response = {
      count: rowCount,
      products: rows.map((product) => {
        return {
          name: product.name,
          price: product.price,
          SKU: product.sku,
          image: product.image,
        };
      }),
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//INPUTS gender, category, subcategory from request parameters
////Returns a list of clothes that fall in the category, subcategory and gender provided
const getProductBySubCategory = async (req, res) => {
  const selectProductBySubCategory = `
    SELECT clothes.name, clothes_variation.price, clothes_variation.sku, image.image FROM clothes_variation 
    INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
    INNER JOIN category ON category.id = clothes.category_id
    INNER JOIN gender ON clothes.gender_id = gender.id
    INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
    INNER JOIN subcategory ON subcategory.id = clothes.subcategory_id
    INNER JOIN image ON variation_colour.id = image.variation_colour_id
    WHERE gender.gender = $1 AND category.category = $2 AND subcategory.subcategory = $3`;

  try {
    const { gender, category, subcategory } = req.params;
    const { rows, rowCount } = await pool.query(selectProductBySubCategory, [
      gender,
      category,
      subcategory,
    ]);
    const response = {
      count: rowCount,
      products: rows.map((product) => {
        return {
          name: product.name,
          price: product.price,
          SKU: product.sku,
          image: product.image,
        };
      }),
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//INPUTS product SKU from parameter
//Returns the product ands its attributes, materials with each size and the sizes quantity.
//And also appeneds the variants to the return object
const getSpecificProduct = async (req, res) => {
  const getProductBySKU = `
    SELECT clothes.id, clothes.weight, clothes.fit, clothes.name, clothes.description, size.id AS size_id, size.size, clothes_variation.price, clothes_variation.sku, variation_colour_size.quantity, colour.colour, material.material, clothes_material.percent, image.image
    FROM clothes_variation 
    INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
    INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
    INNER JOIN variation_colour_size ON variation_colour.id = variation_colour_size.variation_colour_id
    INNER JOIN size ON size.id = variation_colour_size.size_id
    INNER JOIN colour ON variation_colour.colour_id = colour.id
    INNER JOIN image ON variation_colour.id = image.variation_colour_id
    INNER JOIN clothes_material ON clothes.id = clothes_material.clothes_id
    INNER JOIN material ON clothes_material.material_id = material.id
    WHERE clothes_variation.sku = $1`;
  const getProductVariants = `
    SELECT clothes_variation.sku, colour.colour, image.image FROM clothes_variation 
    INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
    INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
    INNER JOIN colour ON variation_colour.colour_id = colour.id
    INNER JOIN image ON variation_colour.id = image.variation_colour_id
    WHERE clothes_variation.sku LIKE $1`;

  try {
    const { sku } = req.params;
    const skuRange = sku.slice(0, -4) + `____`;

    const { rows: products } = await pool.query(getProductBySKU, [sku]);
    const { rows: variants } = await pool.query(getProductVariants, [skuRange]);

    const material = products.map((product) => {
      return { material: product.material, percent: product.percent };
    });
    const sizeQuantity = products.map((product) => {
      return {
        size_id: product.size_id,
        size: product.size,
        quantity: product.quantity,
      };
    });
    const product = {
      name: products[0].name,
      description: products[0].description,
      sku: products[0].sku,
      weight: products[0].weight,
      fit: products[0].fit,
      price: products[0].price,
      colour: products[0].colour,
      image: products[0].image,
      available: [
        ...new Map(sizeQuantity.map((item) => [item.size, item])).values(),
      ],
      materials: [
        ...new Map(material.map((item) => [item.material, item])).values(),
      ],
    };
    const productVariants = {
      products: variants.map((product) => {
        return {
          sku: product.sku,
          colour: product.colour,
          image: product.image,
        };
      }),
    };
    res.status(200).json({
      product_information: product,
      product_variants: productVariants,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductByCategories,
  getProductBySubCategory,
  getSpecificProduct,
};
