const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db[collection].find({
    categoria_do_produto: "Eletrônicos"
}).sort({valor_do_produto: 1});