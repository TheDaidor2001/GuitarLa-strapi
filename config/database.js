module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf2pccen6mpkr6f65jm0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_b4q2'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'G12g4RFgVVvMEvzQG8o2AlvzFrz41bxm'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
