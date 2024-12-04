const sql = require('../../config/database');

const createBeaten = async (beaten) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = beaten;
    return await sql`INSERT INTO beaten (name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${genres}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING *`;
};

const getAllBeaten = async () => {
    return await sql`SELECT * FROM beaten`;
};

const getBeatenById = async (id) => {
    const result = await sql`SELECT * FROM beaten WHERE id = ${id}`;
    return result[0];
};

const updateBeaten = async (id, beaten) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = beaten;
    return await sql`UPDATE beaten
                     SET name = ${name}, genres = ${genres}, generation = ${generation}, console = ${console}, decade = ${decade}, director = ${director}, composer = ${composer}, character_design = ${character_design}, series = ${series}, developer = ${developer}, distributor = ${distributor}, image_url = ${image_url}
                     WHERE id = ${id}
                     RETURNING *`;
};

const deleteBeaten = async (id) => {
    await sql`DELETE FROM beaten WHERE id = ${id}`;
};

const moveToBeaten = async (id) => {
    const result = await sql`INSERT INTO beaten (SELECT * FROM backlog WHERE id = ${id})
                             RETURNING *`;
    await sql`DELETE FROM backlog WHERE id = ${id}`;
    return result[0];
};

module.exports = { createBeaten, getAllBeaten, getBeatenById, updateBeaten, deleteBeaten, moveToBeaten };
