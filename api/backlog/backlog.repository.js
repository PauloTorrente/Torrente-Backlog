const sql = require('../../config/database');

const createBacklog = async (backlog) => {
    const { name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = backlog;
    return await sql`INSERT INTO backlog (name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${release_date}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING id, name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url`;
};

const getAllBacklogs = async () => {
    return await sql`SELECT id, name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url FROM backlog`;
};

const getBacklogById = async (id) => {
    const result = await sql`SELECT id, name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url FROM backlog WHERE id = ${id}`;
    return result[0];
};

const updateBacklog = async (id, backlog) => {
    const { name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = backlog;
    return await sql`UPDATE backlog
                     SET name = ${name}, release_date = ${release_date},  = generation = ${generation}, console = ${console}, decade = ${decade}, director = ${director}, composer = ${composer}, character_design = ${character_design}, series = ${series}, developer = ${developer}, distributor = ${distributor}, image_url = ${image_url}
                     WHERE id = ${id}
                     RETURNING id, name, release_date, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url`;
};

const deleteBacklog = async (id) => {
    await sql`DELETE FROM backlog WHERE id = ${id}`;
    return { message: 'Backlog item deleted successfully' };
};

module.exports = { createBacklog, getAllBacklogs, getBacklogById, updateBacklog, deleteBacklog };
