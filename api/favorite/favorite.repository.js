const sql = require('../../config/database');

// Create a new favorite game (copy from beaten)
const createFavorite = async (favorite) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = favorite;
    return await sql`INSERT INTO favorite (name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${genres}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING *`;
};

// Get all favorite games
const getAllFavorites = async () => {
    return await sql`SELECT * FROM favorite`;
};

// Get a specific favorite game by ID
const getFavoriteById = async (id) => {
    const result = await sql`SELECT * FROM favorite WHERE id = ${id}`;
    return result[0];
};

// Delete a favorite game
const deleteFavorite = async (id) => {
    await sql`DELETE FROM favorite WHERE id = ${id}`;
};

// Copy game from beaten to favorite
const copyFromBeaten = async (beatenId) => {
    // Select the game from beaten
    const game = await sql`SELECT * FROM beaten WHERE id = ${beatenId}`;
    if (game.length === 0) {
        throw new Error('Game not found in beaten list');
    }

    // Insert the game into the favorite list
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = game[0];
    return await sql`INSERT INTO favorite (name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${genres}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING *`;
};

module.exports = { createFavorite, getAllFavorites, getFavoriteById, deleteFavorite, copyFromBeaten };
