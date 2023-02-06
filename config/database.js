module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf6qnsta499d72vvjn6g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_y950'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'dZqaGk4KMf7vuMwlvJ8U3Sj8Q7ubEt15'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
