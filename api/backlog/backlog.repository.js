const sql = require('../../config/database');

const createBacklog = async (backlog) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = backlog;
    return await sql`INSERT INTO backlog (name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${genres}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING *`;
};

const getAllBacklogs = async () => {
    return await sql`SELECT * FROM backlog`;
};

const getBacklogById = async (id) => {
    const result = await sql`SELECT * FROM backlog WHERE id = ${id}`;
    return result[0];
};

const updateBacklog = async (id, backlog) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = backlog;
    return await sql`UPDATE backlog
                     SET name = ${name}, genres = ${genres}, generation = ${generation}, console = ${console}, decade = ${decade}, director = ${director}, composer = ${composer}, character_design = ${character_design}, series = ${series}, developer = ${developer}, distributor = ${distributor}, image_url = ${image_url}
                     WHERE id = ${id}
                     RETURNING *`;
};

const deleteBacklog = async (id) => {
    await sql`DELETE FROM backlog WHERE id = ${id}`;
};

const moveToWishlist = async (id) => {
    const result = await sql`INSERT INTO wishlist (SELECT * FROM backlog WHERE id = ${id})
                             RETURNING *`;
    await sql`DELETE FROM backlog WHERE id = ${id}`;
    return result[0];
};

const moveToAcquired = async (id) => {
    const result = await sql`INSERT INTO acquired (SELECT * FROM backlog WHERE id = ${id})
                             RETURNING *`;
    await sql`DELETE FROM backlog WHERE id = ${id}`;
    return result[0];
};

const moveToBeaten = async (id) => {
    const result = await sql`INSERT INTO beaten (SELECT * FROM backlog WHERE id = ${id})
                             RETURNING *`;
    await sql`DELETE FROM backlog WHERE id = ${id}`;
    return result[0];
};

module.exports = { createBacklog, getAllBacklogs, getBacklogById, updateBacklog, deleteBacklog, moveToWishlist, moveToAcquired, moveToBeaten };
