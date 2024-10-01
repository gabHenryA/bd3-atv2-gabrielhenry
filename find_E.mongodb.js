const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

/* verifica se o campo é igual a qualquer valor da lista */
db[collection].find({
    categoria_do_produto: { $in: ["Eletrodomésticos", "Móveis"] }
});

// db[collection].find({
//     $or: [
//         {categoria_do_produto: { $eq: "Eletrodomésticos"}},
//         {categoria_do_produto: { $eq: "Móveis"}}
//     ]
// });