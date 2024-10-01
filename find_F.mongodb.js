const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);


/* $nin exclui mais de um valor da lista */
db[collection].find({
    categoria_do_produto: { $nin: ["Eletrônicos", "Móveis"] }
});