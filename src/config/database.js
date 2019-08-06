module.exports = {
  host: '192.168.0.13',
  username: 'dba',
  password: 'root',
  database: 'sellerdb',
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
  }
};