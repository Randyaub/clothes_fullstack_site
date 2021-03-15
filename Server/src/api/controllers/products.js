import pool from "../../db";

exports.products_get_category = (req, res) => {
  const { gender, category } = req.params;

  pool
    .query(
      `
    SELECT clothes.name, clothes_variation.price, clothes_variation.sku, image.image FROM clothes_variation 
        INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
        INNER JOIN category ON category.id = clothes.category_id
        INNER JOIN gender ON clothes.gender_id = gender.id
        INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
        INNER JOIN image ON variation_colour.id = image.variation_colour_id
        WHERE gender.gender = $1 AND category.category = $2`,
      [gender, category]
    )
    .then((query) => {
      const response = {
        count: query.rowCount,
        products: query.rows.map((item) => {
          return {
            name: item.name,
            price: item.price,
            SKU: item.sku,
            image: item.image,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

exports.products_get_subcategory = (req, res) => {
  const { gender, category, subcategory } = req.params;

  pool
    .query(
      `
    SELECT clothes.name, clothes_variation.price, clothes_variation.sku, image.image FROM clothes_variation 
        INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
        INNER JOIN category ON category.id = clothes.category_id
        INNER JOIN gender ON clothes.gender_id = gender.id
        INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
        INNER JOIN subcategory ON subcategory.id = clothes.subcategory_id
        INNER JOIN image ON variation_colour.id = image.variation_colour_id
            WHERE gender.gender = $1 AND category.category = $2 AND subcategory.subcategory = $3`,
      [gender, category, subcategory]
    )
    .then((query) => {
      const response = {
        count: query.rowCount,
        products: query.rows.map((item) => {
          return {
            name: item.name,
            price: item.price,
            SKU: item.sku,
            image: item.image,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

exports.products_get_product = (req, res) => {
  const { sku } = req.params;
  const skuRange = sku.slice(0, -4) + `____`;

  const query_for_product_by_SKU = `SELECT clothes.id, clothes.weight, clothes.fit, clothes.name, clothes.description, size.id AS size_id, size.size, clothes_variation.price, clothes_variation.sku, variation_colour_size.quantity, colour.colour, material.material, clothes_material.percent, image.image FROM clothes_variation 
            INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
            INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
            INNER JOIN variation_colour_size ON variation_colour.id = variation_colour_size.variation_colour_id
            INNER JOIN size ON size.id = variation_colour_size.size_id
            INNER JOIN colour ON variation_colour.colour_id = colour.id
            INNER JOIN image ON variation_colour.id = image.variation_colour_id
            INNER JOIN clothes_material ON clothes.id = clothes_material.clothes_id
            INNER JOIN material ON clothes_material.material_id = material.id
                WHERE clothes_variation.sku = $1`;

  const query_products_similar_to_SKU = `SELECT clothes_variation.sku, colour.colour, image.image FROM clothes_variation 
            INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
            INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
            INNER JOIN colour ON variation_colour.colour_id = colour.id
            INNER JOIN image ON variation_colour.id = image.variation_colour_id
                WHERE clothes_variation.sku LIKE $1`;

  pool
    .query(query_for_product_by_SKU, [sku])
    .then((query) => query)
    .then((product) => {
      pool
        .query(query_products_similar_to_SKU, [skuRange])
        .then((similar_to_SKU) => {
          const material = product.rows.map((item) => {
            return { material: item.material, percent: item.percent };
          });
          const size_quantity = product.rows
            .map((item) => {
              return {
                size_id: item.size_id,
                size: item.size,
                quantity: item.quantity,
              };
            })
            .sort((a, b) => a.size_id - b.size_id);
          const product_information = {
            name: product.rows[0].name,
            description: product.rows[0].description,
            sku: product.rows[0].sku,
            weight: product.rows[0].weight,
            fit: product.rows[0].fit,
            price: product.rows[0].price,
            colour: product.rows[0].colour,
            image: product.rows[0].image,
            available: [
              ...new Map(
                size_quantity.map((item) => [item.size, item])
              ).values(),
            ],
            materials: [
              ...new Map(
                material.map((item) => [item.material, item])
              ).values(),
            ],
          };

          const product_variants = {
            item: similar_to_SKU.rows.map((item) => {
              return {
                sku: item.sku,
                colour: item.colour,
                image: item.image,
              };
            }),
          };
          res.status(200).json({
            product_information: product_information,
            product_variants: product_variants,
          });
        })
        .catch((err) => {
          console.log(err.message);
          res.status(500).json({
            error: err.message,
          });
        });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({
        error: err.message,
      });
    });
};

exports.products_get_all = (req, res) => {
  const { gender } = req.params;

  const query_for_all_products = `
  SELECT clothes.name, clothes_variation.price, clothes_variation.sku, image.image FROM clothes_variation 
      INNER JOIN clothes ON clothes_variation.clothes_id = clothes.id
      INNER JOIN category ON category.id = clothes.category_id
      INNER JOIN gender ON clothes.gender_id = gender.id
      INNER JOIN variation_colour ON clothes_variation.id = variation_colour.id
      INNER JOIN image ON variation_colour.id = image.variation_colour_id
        WHERE gender.gender = $1`;

  pool
    .query(query_for_all_products, [gender])
    .then((query) => {
      const response = {
        count: query.rowCount,
        products: query.rows.map((item) => {
          return {
            name: item.name,
            price: item.price,
            SKU: item.sku,
            image: item.image,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};
