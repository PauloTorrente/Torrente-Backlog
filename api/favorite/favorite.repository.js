const sql = require('../../config/database');

// Criar um novo favorito diretamente
const createFavorite = async (favorite) => {
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = favorite;
    return await sql`INSERT INTO favorite (name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${genres}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING *`;
};

// Pegar todos os favoritos
const getAllFavorites = async () => {
    return await sql`SELECT * FROM favorite`;
};

// Pegar um favorito específico pelo ID
const getFavoriteById = async (id) => {
    const result = await sql`SELECT * FROM favorite WHERE id = ${id}`;
    return result[0];
};

// Deletar um favorito
const deleteFavorite = async (id) => {
    await sql`DELETE FROM favorite WHERE id = ${id}`;
};

// Copiar jogo da lista beaten para lista de favoritos
const copyFromBeaten = async (beatenId) => {
    // Selecionar o jogo de beaten
    const game = await sql`SELECT * FROM beaten WHERE id = ${beatenId}`;
    if (game.length === 0) {
        throw new Error('Game not found in beaten list');
    }

    // Inserir o jogo na lista de favoritos
    const { name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url } = game[0];
    return await sql`INSERT INTO favorite (name, genres, generation, console, decade, director, composer, character_design, series, developer, distributor, image_url)
                     VALUES (${name}, ${genres}, ${generation}, ${console}, ${decade}, ${director}, ${composer}, ${character_design}, ${series}, ${developer}, ${distributor}, ${image_url})
                     RETURNING *`;
};

module.exports = { createFavorite, getAllFavorites, getFavoriteById, deleteFavorite, copyFromBeaten };
