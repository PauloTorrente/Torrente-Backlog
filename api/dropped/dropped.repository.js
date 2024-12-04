const sql = require('../../config/database');

const createDropped = async (dropped) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = dropped;
    return await sql`INSERT INTO dropped (name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${genres}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING *`;
};

const getAllDropped = async () => {
    return await sql`SELECT * FROM dropped`;
};

const getDroppedById = async (id) => {
    const result = await sql`SELECT * FROM dropped WHERE id = ${id}`;
    return result[0];
};

const updateDropped = async (id, dropped) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = dropped;
    return await sql`UPDATE dropped
                     SET name = ${name}, genres = ${genres}, generation = ${generation}, console = ${console}, decade = ${decade}, director = ${director}, composer = ${composer}, character_design = ${character_design}, series = ${series}, developer = ${developer}, distributor = ${distributor}, image_url = ${image_url}
                     WHERE id = ${id}
                     RETURNING *`;
};

const deleteDropped = async (id) => {
    await sql`DELETE FROM dropped WHERE id = ${id}`;
};

const moveToDropped = async (id) => {
    const result = await sql`INSERT INTO dropped (SELECT * FROM backlog WHERE id = ${id})
                             RETURNING *`;
    await sql`DELETE FROM backlog WHERE id = ${id}`;
    return result[0];
};

module.exports = { createDropped, getAllDropped, getDroppedById, updateDropped, deleteDropped, moveToDropped };
