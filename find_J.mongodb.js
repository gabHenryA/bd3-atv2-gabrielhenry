const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

/* $ne exclui um valor da lista */
db[collection].find({
    categoria_do_produto: { $ne: "Eletrônicos" }
}).sort({valor_do_produto: -1});