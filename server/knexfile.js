// Update this file with your actual password in the connection string.
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://postgres:[YOUR-PASSWORD]@db.iqzpsufstbwkohoxllxy.supabase.co:5432/postgres',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};