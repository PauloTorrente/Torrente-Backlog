const sql = require('../../config/database');

const createWishlist = async (wishlist) => {
    const { name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = wishlist;
    return await sql`INSERT INTO wishlist (name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING id, name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url`;
};

const getAllWishlist = async () => {
    return await sql`SELECT id, name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url FROM wishlist`;
};

const getWishlistById = async (id) => {
    const result = await sql`SELECT id, name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url FROM wishlist WHERE id = ${id}`;
    return result[0];
};

const updateWishlist = async (id, wishlist) => {
    const { name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = wishlist;
    return await sql`UPDATE wishlist
                     SET name = ${name}, generation = ${generation}, console = ${console}, decade = ${decade}, director = ${director}, composer = ${composer}, character_design = ${character_design}, series = ${series}, developer = ${developer}, distributor = ${distributor}, image_url = ${image_url}
                     WHERE id = ${id}
                     RETURNING id, name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url`;
};

const deleteWishlist = async (id) => {
    await sql`DELETE FROM wishlist WHERE id = ${id}`;
    return { message: 'Wishlist item deleted successfully' };
};

const moveToBacklog = async (id) => {
    const result = await sql`INSERT INTO backlog (SELECT id, name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url FROM wishlist WHERE id = ${id})
                             RETURNING id, name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url`;
    await sql`DELETE FROM wishlist WHERE id = ${id}`;
    return result[0];
};

const moveToAcquired = async (id) => {
    const result = await sql`INSERT INTO acquired (SELECT id, name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url FROM wishlist WHERE id = ${id})
                             RETURNING id, name, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url`;
    await sql`DELETE FROM wishlist WHERE id = ${id}`;
    return result[0];
};

module.exports = { createWishlist, getAllWishlist, getWishlistById, updateWishlist, deleteWishlist, moveToBacklog, moveToAcquired };
