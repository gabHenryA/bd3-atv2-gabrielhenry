const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db[collection].insertMany(
    [
        {
            "nome_do_produto": "Notebook Dell Inspiron",
            "valor_do_produto": 3500.00,
            "quantidade_em_estoque": 15,
            "fabricante_do_produto": "Dell",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Notebook Dell Inspiron com processador i5, 8GB de RAM e 256GB SSD."
        },
        {
            "nome_do_produto": "Smartphone Samsung Galaxy S21",
            "valor_do_produto": 4200.00,
            "quantidade_em_estoque": 25,
            "fabricante_do_produto": "Samsung",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Smartphone Samsung Galaxy S21 com 128GB de armazenamento e câmera de 64MP."
        },
        {
            "nome_do_produto": "Fone de Ouvido JBL Tune 510BT",
            "valor_do_produto": 199.90,
            "quantidade_em_estoque": 50,
            "fabricante_do_produto": "JBL",
            "categoria_do_produto": "Acessórios",
            "descricao_do_produto": "Fone de ouvido sem fio com até 40 horas de reprodução."
        },
        {
            "nome_do_produto": "Cafeteira Nespresso Essenza Mini",
            "valor_do_produto": 349.99,
            "quantidade_em_estoque": 10,
            "fabricante_do_produto": "Nespresso",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Cafeteira Nespresso compacta para cápsulas de café."
        },
        {
            "nome_do_produto": "Televisão LG 55'' 4K UHD",
            "valor_do_produto": 2800.00,
            "quantidade_em_estoque": 8,
            "fabricante_do_produto": "LG",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Smart TV LG com resolução 4K e suporte a aplicativos de streaming."
        },
        {
            "nome_do_produto": "Geladeira Brastemp Frost Free",
            "valor_do_produto": 3500.00,
            "quantidade_em_estoque": 5,
            "fabricante_do_produto": "Brastemp",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Geladeira Brastemp Frost Free Inox com capacidade de 400 litros."
        },
        {
            "nome_do_produto": "Tênis Nike Air Max",
            "valor_do_produto": 499.90,
            "quantidade_em_estoque": 20,
            "fabricante_do_produto": "Nike",
            "categoria_do_produto": "Calçados",
            "descricao_do_produto": "Tênis Nike Air Max confortável com design esportivo."
        },
        {
            "nome_do_produto": "Mouse Gamer Logitech G502",
            "valor_do_produto": 299.99,
            "quantidade_em_estoque": 30,
            "fabricante_do_produto": "Logitech",
            "categoria_do_produto": "Acessórios",
            "descricao_do_produto": "Mouse gamer com 11 botões programáveis e ajuste de peso."
        },
        {
            "nome_do_produto": "Monitor Samsung Curvo 27''",
            "valor_do_produto": 1299.99,
            "quantidade_em_estoque": 12,
            "fabricante_do_produto": "Samsung",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Monitor curvo Samsung de 27 polegadas Full HD com tecnologia FreeSync."
        },
        {
            "nome_do_produto": "Fogão 4 Bocas Electrolux",
            "valor_do_produto": 999.99,
            "quantidade_em_estoque": 7,
            "fabricante_do_produto": "Electrolux",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Fogão a gás com 4 bocas e forno com grill."
        },
        {
            "nome_do_produto": "Impressora Multifuncional HP DeskJet",
            "valor_do_produto": 599.99,
            "quantidade_em_estoque": 18,
            "fabricante_do_produto": "HP",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Impressora multifuncional com funções de impressão, cópia e digitalização."
        },
        {
            "nome_do_produto": "Ar-condicionado Split LG Dual Inverter",
            "valor_do_produto": 2200.00,
            "quantidade_em_estoque": 4,
            "fabricante_do_produto": "LG",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Ar-condicionado split LG com tecnologia inverter e função quente/frio."
        },
        {
            "nome_do_produto": "Câmera Canon EOS Rebel T7",
            "valor_do_produto": 2599.99,
            "quantidade_em_estoque": 6,
            "fabricante_do_produto": "Canon",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Câmera DSLR com lente 18-55mm e gravação de vídeo em Full HD."
        },
        {
            "nome_do_produto": "Cadeira Gamer ThunderX3",
            "valor_do_produto": 899.90,
            "quantidade_em_estoque": 10,
            "fabricante_do_produto": "ThunderX3",
            "categoria_do_produto": "Móveis",
            "descricao_do_produto": "Cadeira gamer ergonômica com ajuste de altura e inclinação."
        },
        {
            "nome_do_produto": "Micro-ondas Philco 20L",
            "valor_do_produto": 399.99,
            "quantidade_em_estoque": 9,
            "fabricante_do_produto": "Philco",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Micro-ondas com 20 litros de capacidade e diversas funções de cozimento."
        },
        {
            "nome_do_produto": "Livro 'O Poder do Hábito'",
            "valor_do_produto": 39.90,
            "quantidade_em_estoque": 50,
            "fabricante_do_produto": "Editora Objetiva",
            "categoria_do_produto": "Livros",
            "descricao_do_produto": "Livro que explora o impacto dos hábitos em nossa vida diária."
        },
        {
            "nome_do_produto": "Jogo de Panelas Tramontina",
            "valor_do_produto": 499.90,
            "quantidade_em_estoque": 12,
            "fabricante_do_produto": "Tramontina",
            "categoria_do_produto": "Utilidades Domésticas",
            "descricao_do_produto": "Jogo de panelas antiaderentes com 5 peças."
        },
        {
            "nome_do_produto": "Bicicleta Aro 29 Caloi",
            "valor_do_produto": 1299.99,
            "quantidade_em_estoque": 5,
            "fabricante_do_produto": "Caloi",
            "categoria_do_produto": "Esportes",
            "descricao_do_produto": "Bicicleta aro 29 com 21 marchas, ideal para trilhas e passeios."
        },
        {
            "nome_do_produto": "Relógio Smartwatch Xiaomi Mi Band 6",
            "valor_do_produto": 349.90,
            "quantidade_em_estoque": 20,
            "fabricante_do_produto": "Xiaomi",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Relógio inteligente com monitoramento de atividades e batimentos cardíacos."
        },
        {
            "nome_do_produto": "Mochila Adidas Classic",
            "valor_do_produto": 149.90,
            "quantidade_em_estoque": 35,
            "fabricante_do_produto": "Adidas",
            "categoria_do_produto": "Acessórios",
            "descricao_do_produto": "Mochila clássica da Adidas com compartimento para laptop."
        },
        {
            "nome_do_produto": "Liquidificador Mondial Turbo",
            "valor_do_produto": 159.90,
            "quantidade_em_estoque": 15,
            "fabricante_do_produto": "Mondial",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Liquidificador com 12 velocidades e copo de 2 litros."
        },
        {
            "nome_do_produto": "Barbeador Elétrico Philips",
            "valor_do_produto": 199.90,
            "quantidade_em_estoque": 25,
            "fabricante_do_produto": "Philips",
            "categoria_do_produto": "Cuidados Pessoais",
            "descricao_do_produto": "Barbeador elétrico com tecnologia de corte suave e bateria recarregável."
        },
        {
            "nome_do_produto": "Smart TV Philips 50'' 4K",
            "valor_do_produto": 2700.00,
            "quantidade_em_estoque": 7,
            "fabricante_do_produto": "Philips",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Smart TV 4K com suporte a HDR e sistema operacional Android TV."
        },
        {
            "nome_do_produto": "Aspirador de Pó Vertical Electrolux",
            "valor_do_produto": 299.99,
            "quantidade_em_estoque": 12,
            "fabricante_do_produto": "Electrolux",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Aspirador de pó vertical com cabo longo e sistema de filtro HEPA."
        },
        {
            "nome_do_produto": "Fogão Brastemp 5 Bocas",
            "valor_do_produto": 1250.00,
            "quantidade_em_estoque": 9,
            "fabricante_do_produto": "Brastemp",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Fogão com 5 bocas, acendimento automático e forno com timer digital."
        },
        {
            "nome_do_produto": "Jogo de Cama Casal Santista",
            "valor_do_produto": 99.90,
            "quantidade_em_estoque": 30,
            "fabricante_do_produto": "Santista",
            "categoria_do_produto": "Têxteis",
            "descricao_do_produto": "Jogo de cama casal com lençol de elástico, sobrelençol e fronhas."
        },
        {
            "nome_do_produto": "Purificador de Água Consul",
            "valor_do_produto": 599.90,
            "quantidade_em_estoque": 10,
            "fabricante_do_produto": "Consul",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Purificador de água com três níveis de filtragem e função de água gelada."
        },
        {
            "nome_do_produto": "Ventilador de Mesa Arno Turbo",
            "valor_do_produto": 149.90,
            "quantidade_em_estoque": 20,
            "fabricante_do_produto": "Arno",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Ventilador de mesa com 6 pás e oscilação automática."
        },
        {
            "nome_do_produto": "Cafeteira Elétrica Britânia",
            "valor_do_produto": 99.90,
            "quantidade_em_estoque": 15,
            "fabricante_do_produto": "Britânia",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Cafeteira elétrica com capacidade para 30 xícaras e sistema corta-pingos."
        },
        {
            "nome_do_produto": "Caixa de Som Bluetooth JBL Flip 5",
            "valor_do_produto": 499.90,
            "quantidade_em_estoque": 25,
            "fabricante_do_produto": "JBL",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Caixa de som portátil com conexão Bluetooth e até 12 horas de reprodução."
        },
        {
            "nome_do_produto": "Frigobar Consul 120L",
            "valor_do_produto": 999.90,
            "quantidade_em_estoque": 5,
            "fabricante_do_produto": "Consul",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Frigobar compacto com 120 litros de capacidade e porta-latas."
        },
        {
            "nome_do_produto": "Máquina de Lavar Roupas Electrolux 12kg",
            "valor_do_produto": 1800.00,
            "quantidade_em_estoque": 7,
            "fabricante_do_produto": "Electrolux",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Máquina de lavar com capacidade para 12kg e programas de lavagem eficientes."
        },
        {
            "nome_do_produto": "Sofá Retrátil 3 Lugares",
            "valor_do_produto": 2199.90,
            "quantidade_em_estoque": 3,
            "fabricante_do_produto": "Sofá Center",
            "categoria_do_produto": "Móveis",
            "descricao_do_produto": "Sofá retrátil com assentos reclináveis e estrutura de madeira."
        },
        {
            "nome_do_produto": "Tênis Asics Gel-Kayano",
            "valor_do_produto": 699.90,
            "quantidade_em_estoque": 10,
            "fabricante_do_produto": "Asics",
            "categoria_do_produto": "Calçados",
            "descricao_do_produto": "Tênis esportivo com tecnologia de amortecimento GEL, ideal para corrida."
        },
        {
            "nome_do_produto": "Celular Motorola Moto G8",
            "valor_do_produto": 1299.90,
            "quantidade_em_estoque": 20,
            "fabricante_do_produto": "Motorola",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Smartphone com 64GB de armazenamento e câmera de 16MP."
        },
        {
            "nome_do_produto": "Micro-ondas Brastemp 32L Inox",
            "valor_do_produto": 599.90,
            "quantidade_em_estoque": 8,
            "fabricante_do_produto": "Brastemp",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Micro-ondas inox com capacidade de 32 litros e painel digital."
        },
        {
            "nome_do_produto": "Relógio Invicta Pro Diver",
            "valor_do_produto": 799.90,
            "quantidade_em_estoque": 12,
            "fabricante_do_produto": "Invicta",
            "categoria_do_produto": "Acessórios",
            "descricao_do_produto": "Relógio masculino resistente à água com pulseira de aço inoxidável."
        },
        {
            "nome_do_produto": "Roteador TP-Link Archer C6",
            "valor_do_produto": 299.90,
            "quantidade_em_estoque": 20,
            "fabricante_do_produto": "TP-Link",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Roteador com tecnologia Wi-Fi AC1200, ideal para streaming e jogos online."
        },
        {
            "nome_do_produto": "Torradeira Oster Inox",
            "valor_do_produto": 159.90,
            "quantidade_em_estoque": 15,
            "fabricante_do_produto": "Oster",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Torradeira com 7 níveis de tostagem e função descongelar."
        },
        {
            "nome_do_produto": "Teclado Mecânico Razer BlackWidow",
            "valor_do_produto": 699.90,
            "quantidade_em_estoque": 18,
            "fabricante_do_produto": "Razer",
            "categoria_do_produto": "Acessórios",
            "descricao_do_produto": "Teclado mecânico com switches verdes Razer e iluminação RGB."
        },
        {
            "nome_do_produto": "Tablet Samsung Galaxy Tab A7",
            "valor_do_produto": 1499.90,
            "quantidade_em_estoque": 25,
            "fabricante_do_produto": "Samsung",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Tablet com tela de 10.4 polegadas e 32GB de armazenamento."
        },
        {
            "nome_do_produto": "Colchão Ortobom Casal",
            "valor_do_produto": 999.90,
            "quantidade_em_estoque": 10,
            "fabricante_do_produto": "Ortobom",
            "categoria_do_produto": "Móveis",
            "descricao_do_produto": "Colchão de casal com molas ensacadas e espuma de alta densidade."
        },
        {
            "nome_do_produto": "Churrasqueira Elétrica Mondial",
            "valor_do_produto": 199.90,
            "quantidade_em_estoque": 8,
            "fabricante_do_produto": "Mondial",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Churrasqueira elétrica com grelha antiaderente e controle de temperatura."
        },
        {
            "nome_do_produto": "Batedeira Planetária Arno",
            "valor_do_produto": 299.90,
            "quantidade_em_estoque": 12,
            "fabricante_do_produto": "Arno",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Batedeira planetária com 8 velocidades e tigela de 4 litros."
        },
        {
            "nome_do_produto": "Sanduicheira Philco Inox",
            "valor_do_produto": 99.90,
            "quantidade_em_estoque": 20,
            "fabricante_do_produto": "Philco",
            "categoria_do_produto": "Eletrodomésticos",
            "descricao_do_produto": "Sanduicheira com placas antiaderentes e trava de segurança."
        },
        {
            "nome_do_produto": "Travesseiro Nasa Viscoelástico",
            "valor_do_produto": 79.90,
            "quantidade_em_estoque": 30,
            "fabricante_do_produto": "Nasa",
            "categoria_do_produto": "Têxteis",
            "descricao_do_produto": "Travesseiro viscoelástico com tecnologia de espuma de memória."
        },
        {
            "nome_do_produto": "Smartwatch Apple Watch Series 6",
            "valor_do_produto": 3799.90,
            "quantidade_em_estoque": 15,
            "fabricante_do_produto": "Apple",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Relógio inteligente com monitoramento de saúde e sensor de oxigênio no sangue."
        },
        {
            "nome_do_produto": "Cadeira Gamer ThunderX3",
            "valor_do_produto": 1199.90,
            "quantidade_em_estoque": 10,
            "fabricante_do_produto": "ThunderX3",
            "categoria_do_produto": "Móveis",
            "descricao_do_produto": "Cadeira gamer ergonômica com ajuste de altura, encosto reclinável e apoio de braços 3D."
        },
        {
            "nome_do_produto": "Fone de Ouvido Sony WH-1000XM4",
            "valor_do_produto": 1599.90,
            "quantidade_em_estoque": 12,
            "fabricante_do_produto": "Sony",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Fone de ouvido Bluetooth com cancelamento de ruído ativo e bateria de longa duração."
        },
        {
            "nome_do_produto": "Impressora Multifuncional HP DeskJet 2776",
            "valor_do_produto": 399.90,
            "quantidade_em_estoque": 15,
            "fabricante_do_produto": "HP",
            "categoria_do_produto": "Eletrônicos",
            "descricao_do_produto": "Impressora multifuncional com funções de impressão, cópia e digitalização, compatível com Wi-Fi."
        }
    ]
)