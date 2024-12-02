const sql = require('../../config/database');

const createUser = async (user) => {
    const { username, password, email, role } = user;
    return await sql`INSERT INTO users (username, password_hash, email, role) 
                     VALUES (${username}, ${password}, ${email}, ${role})
                     RETURNING id, username, email, role`;
};

const getAllUsers = async () => {
    return await sql`SELECT id, username, email, role FROM users`;
};

const getUserById = async (id) => {
    const result = await sql`SELECT id, username, email, role FROM users WHERE id = ${id}`;
    return result[0];
};

const getUserByUsername = async (username) => {
    const result = await sql`SELECT * FROM users WHERE username = ${username}`;
    return result[0];
};

const updateUser = async (id, user) => {
    const { username, email, password } = user;
    return await sql`UPDATE users 
                     SET username = ${username}, email = ${email}, password_hash = ${password}
                     WHERE id = ${id}
                     RETURNING id, username, email, role`;
};

const deleteUser = async (id) => {
    await sql`DELETE FROM users WHERE id = ${id}`;
    return { message: 'User deleted successfully' };
};

module.exports = { createUser, getAllUsers, getUserById, getUserByUsername, updateUser, deleteUser };
