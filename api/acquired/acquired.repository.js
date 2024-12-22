const sql = require('../../config/database');

const createAcquired = async (acquired) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = acquired;
    return await sql`INSERT INTO acquired (name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${sql.array(genres)}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING *`;
};

const getAllAcquired = async () => {
    return await sql`SELECT * FROM acquired`;
};

const getAcquiredById = async (id) => {
    const result = await sql`SELECT * FROM acquired WHERE id = ${id}`;
    return result[0];
};

const updateAcquired = async (id, acquired) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = acquired;
    return await sql`UPDATE acquired
                     SET name = ${name}, genres = ${sql.array(genres)}, generation = ${generation}, console = ${console}, decade = ${decade}, director = ${director}, composer = ${composer}, character_design = ${character_design}, series = ${series}, developer = ${developer}, distributor = ${distributor}, image_url = ${image_url}
                     WHERE id = ${id}
                     RETURNING *`;
};

const deleteAcquired = async (id) => {
    await sql`DELETE FROM acquired WHERE id = ${id}`;
};

const moveToBacklog = async (id) => {
    const result = await sql`INSERT INTO backlog (SELECT * FROM acquired WHERE id = ${id})
                             RETURNING *`;
    await sql`DELETE FROM acquired WHERE id = ${id}`;
    return result[0];
};

const moveToWishlist = async (id) => {
    const result = await sql`INSERT INTO wishlist (SELECT * FROM acquired WHERE id = ${id})
                             RETURNING *`;
    await sql`DELETE FROM acquired WHERE id = ${id}`;
    return result[0];
};

module.exports = { createAcquired, getAllAcquired, getAcquiredById, updateAcquired, deleteAcquired, moveToBacklog, moveToWishlist };
