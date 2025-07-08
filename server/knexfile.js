const path = require('path'); // 


require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
console.log('Knexfile: DATABASE_URL (for development):', process.env.DATABASE_URL); // ADD THIS LINE

module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false } // For development only
    },    
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false } // For development only
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
    },
    seeds: {
      directory: './seeds'
    }
  }
};