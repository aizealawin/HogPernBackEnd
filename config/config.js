require('dotenv').config

module.exports = {
  development: {
    database: 'hogwarts_pern_development',
    dialect: 'postgres'
  },
  test: {
    database: 'hogwarts_pern_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
