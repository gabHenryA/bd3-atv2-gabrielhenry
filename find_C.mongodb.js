const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db[collection].find({
    valor_do_produto: {$gte: 100, $lte: 300}
});