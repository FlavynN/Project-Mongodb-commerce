db.produtos.updateOne({
  nome: "Big Mac",
}, {
  $set: {
    ultimaModificacao: Timestamp(),
  },
});

db.produtos.find({
  ultimaModificacao: {
    $exists: true,
  },
}, {
  nome: 1,
  _id: 0,
});