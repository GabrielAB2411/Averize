import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/StackNavigation';

type NavigationProps = StackNavigationProp<StackParamList>

export function useGradesScreen(course: string, semesterId: string) {
    const subjects = [
        {
            course: 'EC',
            subjects: [
                //1º semestre
                {
                    id: '1',
                    name: 'Álgebra Linear e Geometria Analítica',
                    semesterId: '1'
                },
                {
                    id: '2',
                    name: 'Algoritmos I',
                    semesterId: '1'
                },
                {
                    id: '3',
                    name: 'Cálculo Diferencial e Integral I',
                    semesterId: '1'
                },
                {
                    id: '4',
                    name: 'Ética e Cidadania',
                    semesterId: '1'
                },
                {
                    id: '5',
                    name: 'Química e Ciência dos Materiais',
                    semesterId: '1'
                },
                {
                    id: '6',
                    name: 'Introdução à Engenharia de Computação',
                    semesterId: '1'
                },
                //2º semestre
                {
                    id: '7',
                    name: 'Cálculo Diferencial e Integral II',
                    semesterId: '2'
                },
                {
                    id: '8',
                    name: 'Eletricidade Aplicada  ',
                    semesterId: '2'
                },
                {
                    id: '9',
                    name: 'Física Geral e Experimental I',
                    semesterId: '2'
                },
                {
                    id: '10',
                    name: 'Algoritmos II',
                    semesterId: '2'
                },
                {
                    id: '11',
                    name: 'Banco de Dados I',
                    semesterId: '2'
                },
                //3º semestre
                {
                    id: '12',
                    name: 'Cálculo Avançado',
                    semesterId: '3'
                },
                {
                    id: '13',
                    name: 'Física Geral e Experimental II',
                    semesterId: '3'
                },
                {
                    id: '14',
                    name: 'Metodologia Científica',
                    semesterId: '3'
                },
                {
                    id: '15',
                    name: 'Eletrônica Analógica',
                    semesterId: '3'
                },
                {
                    id: '16',
                    name: 'Programação Orientada à Objetos',
                    semesterId: '3'
                },
                {
                    id: '17',
                    name: 'Banco de Dados II',
                    semesterId: '3'
                },
                {
                    id: '18',
                    name: 'Eletiva I',
                    semesterId: '3'
                },
                //4º semestre
                {
                    id: '19',
                    name: 'Desenho Digital',
                    semesterId: '4'
                 },
                 {
                    id: '20',
                    name: 'Eletromagnetismo',
                    semesterId: '4'
                 },
                 {
                    id: '21',
                    name: 'Mecânica Geral',
                    semesterId: '4'
                 },
                 {
                    id: '22',
                    name: 'Eletrônica Digital',
                    semesterId: '4'
                 },
                 {
                    id: '23',
                    name: 'Estruturas de Dados',
                    semesterId: '4'
                 },
                 //5º semestre
                 {
                    id: '24',
                    name: 'Fenômenos de Transporte',
                    semesterId: '5'
                 },
                 {
                    id: '25',
                    name: 'Mecânica dos Sólidos',
                    semesterId: '5'
                 },
                 {
                    id: '26',
                    name: 'Controle e Automação',
                    semesterId: '5'
                 },
                 {
                    id: '27',
                    name: 'Linguagem de Programação I',
                    semesterId: '5'
                 },
                 {
                    id: '28',
                    name: 'Sistemas Embarcados',
                    semesterId: '5'
                 },
                 //6º semestre
                 {
                    id: '29',
                    name: 'Administração e Estratégia Empresarial',
                    semesterId: '6'
                 },
                 {
                    id: '30',
                    name: 'Arquitetura de Computadores',
                    semesterId: '6'
                 },
                 {
                    id: '31',
                    name: 'Linguagens Formais E Autômatos',
                    semesterId: '6'
                 },
                 {
                    id: '32',
                    name: 'Linguagem de Programação II',
                    semesterId: '6'
                 },
                 {
                    id: '33',
                    name: 'Modelagem de Software',
                    semesterId: '6'
                 },
                 {
                    id: '34',
                    name: 'Processamento de Sinais',
                    semesterId: '6'
                 },
                 {
                    id: '35',
                    name: 'Eletiva II',
                    semesterId: '6'
                 },
                 //7º semestre
                 {
                    id: '36',
                    name: 'Economia',
                    semesterId: '7'
                 },
                 {
                    id: '37',
                    name: 'Compiladores',
                    semesterId: '7'
                 },
                 {
                    id: '38',
                    name: 'Comunicação de Dados',
                    semesterId: '7'
                 },
                 {
                    id: '39',
                    name: 'Gestão de Custos',
                    semesterId: '7'
                 },
                 {
                    id: '40',
                    name: 'Programação Mobile',
                    semesterId: '7'
                 },
                 {
                    id: '41',
                    name: 'Sistemas Reconfiguráveis',
                    semesterId: '7'
                 },
                 //8º semestre
                 {
                    id: '42',
                    name: 'Estatística',
                    semesterId: '8'
                 },
                 {
                    id: '43',
                    name: 'Pesquisa Operacional',
                    semesterId: '8'
                 },
                 {
                    id: '44',
                    name: 'Sistemas Operacionais',
                    semesterId: '8'
                 },
                 {
                    id: '45',
                    name: 'Engenharia de Software',
                    semesterId: '8'
                 },
                 {
                    id: '46',
                    name: 'Gestão de Projetos na Engenharia de Computação',
                    semesterId: '8'
                 },
                 {
                    id: '47',
                    name: 'Redes de Computadores',
                    semesterId: '8'
                 },
                 //9º semestre
                 {
                    id: '48',
                    name: 'Gestão da Qualidade',
                    semesterId: '9'
                 },
                 {
                    id: '49',
                    name: 'Arquitetura de Software',
                    semesterId: '9'
                 },
                 {
                    id: '50',
                    name: 'Empreendedorismo, Inovação e Modelagem de Negócios',
                    semesterId: '9'
                 },
                 {
                    id: '51',
                    name: 'Inteligência Artificial',
                    semesterId: '9'
                 },
                 {
                    id: '52',
                    name: 'Qualidade de Software',
                    semesterId: '9'
                 },
                 {
                    id: '53',
                    name: 'Redes de Computadores II',
                    semesterId: '9'
                 },
                 {
                    id: '54',
                    name: 'Projeto Final de Curso I',
                    semesterId: '9'
                 },
                 //10º semestre
                 {
                    id: '55',
                    name: 'Ciências do Ambiente e Desenvolvimento Sustentável',
                    semesterId: '10'
                 },
                 {
                    id: '56',
                    name: 'Análise de Dados',
                    semesterId: '10'
                 },
                 {
                    id: '57',
                    name: 'Direito Digital',
                    semesterId: '10'
                 },
                 {
                    id: '58',
                    name: 'Gestão da Tecnologia da Informação',
                    semesterId: '10'
                 },
                 {
                    id: '59',
                    name: 'Segurança da Informação',
                    semesterId: '10'
                 },
                 {
                    id: '60',
                    name: 'Sistemas Distribuídos',
                    semesterId: '10'
                 },
                 {
                    id: '61',
                    name: 'Projeto Final de Curso II',
                    semesterId: '10'
                 }
            ]
        },
        {
            course: 'ECA',
            subjects: [
                //1º semestre
                {
                    id: '62',
                    name: 'Calculo Diferencial e Integral I',
                    semesterId: '1'
                 },
                 {
                    id: '63',
                    name: 'Física Geral e Experimental I',
                    semesterId: '1'
                 },
                 {
                    id: '64',
                    name: 'Álgebra Linear e Geometria Analítica',
                    semesterId: '1'
                 },
                 {
                    id: '65',
                    name: 'Expressão Gráfica',
                    semesterId: '1'
                 },
                 {
                    id: '66',
                    name: 'Algoritmo e Informática',
                    semesterId: '1'
                 },
                 {
                    id: '67',
                    name: 'Sistemas Digitais',
                    semesterId: '1'
                 },
                 {
                    id: '68',
                    name: 'Introdução a Engenharia de Controle e Automação',
                    semesterId: '1'
                 },
                 {
                    id: '69',
                    name: 'Ciencias do Ambiente e Desenvolvimento Sustentável',
                    semesterId: '1'
                 },
                 //2º semestre
                 {
                    id: '70',
                    name: 'Calculo Diferencial e Integral II',
                    semesterId: '2'
                 },
                 {
                    id: '71',
                    name: 'Física Geral e Experimental II',
                    semesterId: '2'
                 },
                 {
                    id: '72',
                    name: 'Quimica Geral',
                    semesterId: '2'
                 },
                 {
                    id: '73',
                    name: 'Eletricidade Aplicada',
                    semesterId: '2'
                 },
                 {
                    id: '74',
                    name: 'Tecnologia Mecanica Aplicada',
                    semesterId: '2'
                 },
                 {
                    id: '75',
                    name: 'Gestão de Projetos',
                    semesterId: '2'
                 },
                 {
                    id: '76',
                    name: 'Projeto Integrador I',
                    semesterId: '2'
                 },
                 //3º semestre 
                 {
                    id: '77',
                    name: 'Mecanica Geral',
                    semesterId: '3'
                 },
                 {
                    id: '78',
                    name: 'Ciencia dos Materiais',
                    semesterId: '3'
                 },
                 {
                    id: '79',
                    name: 'Eletrotécnica e Instalações Elétricas',
                    semesterId: '3'
                 },
                 {
                    id: '80',
                    name: 'Programação Visual e Banco de Dados',
                    semesterId: '3'
                 },
                 {
                    id: '81',
                    name: 'Operações de Manufatura',
                    semesterId: '3'
                 },
                 {
                    id: '82',
                    name: 'Estatistica Básica',
                    semesterId: '3'
                 },
                 {
                    id: '83',
                    name: 'Gestão de Custos',
                    semesterId: '3'
                 },
                 {
                    id: '84',
                    name: 'Eletiva I',
                    semesterId: '3'
                 },
                 //4º semestre
                 {
                    id: '85',
                    name: 'Mecânica dos Sólidos',
                    semesterId: '4'
                 },
                 {
                    id: '86',
                    name: 'Automação + CLP',
                    semesterId: '4'
                 },
                 {
                    id: '87',
                    name: 'Eletrônica Analógica',
                    semesterId: '4'
                 },
                 {
                    id: '88',
                    name: 'Sistemas Microcontrolados',
                    semesterId: '4'
                 },
                 {
                    id: '89',
                    name: 'CNC',
                    semesterId: '4'
                 },
                 {
                    id: '90',
                    name: 'Metodologia Científica e Tecnológica',
                    semesterId: '4'
                 },
                 {
                    id: '91',
                    name: 'Projeto Integrador II',
                    semesterId: '4'
                 },
                 //5º semestre
                 {
                    id: '92',
                    name: 'Robótica',
                    semesterId: '5'
                 },
                 {
                    id: '93',
                    name: 'Fenomenos de Transporte',
                    semesterId: '5'
                 },
                 {
                    id: '94',
                    name: 'Gestão da Manutenção',
                    semesterId: '5'
                 },
                 {
                    id: '95',
                    name: 'Gestão da Qualidade',
                    semesterId: '5'
                 },
                 {
                    id: '96',
                    name: 'Calculo Avançado',
                    semesterId: '5'
                 },
                 {
                    id: '97',
                    name: 'Eletrônica Industrial',
                    semesterId: '5'
                 },
                 {
                    id: '98',
                    name: 'Ética e Cidadania',
                    semesterId: '5'
                 },
                 //6º semestre
                 {
                    id: '99',
                    name: 'Modelagem de Sistemas Dinâmicos',
                    semesterId: '6'
                 },
                 {
                    id: '100',
                    name: 'Instrumentação e Sensores',
                    semesterId: '6'
                 },
                 {
                    id: '101',
                    name: 'CAM',
                    semesterId: '6'
                 },
                 {
                    id: '102',
                    name: 'Hidraúlica Industrial',
                    semesterId: '6'
                 },
                 {
                    id: '103',
                    name: 'Processos de Fabricação',
                    semesterId: '6'
                 },
                 {
                    id: '104',
                    name: 'Projeto Integrador III',
                    semesterId: '6'
                 },
                 {
                    id: '105',
                    name: 'Eletiva II',
                    semesterId: '6'
                 },
                 //7º semestre
                 {
                    id: '106',
                    name: 'Controle e Servomecanismo',
                    semesterId: '7'
                 },
                 {
                    id: '107',
                    name: 'Sistema Supervório e Redes',
                    semesterId: '7'
                 },
                 {
                    id: '108',
                    name: 'Administração da Produção',
                    semesterId: '7'
                 },
                 {
                    id: '109',
                    name: 'Sistemas Térmicos',
                    semesterId: '7'
                 },
                 {
                    id: '110',
                    name: 'Comunicação Empresarial',
                    semesterId: '7'
                 },
                 {
                    id: '111',
                    name: 'Gestão Empreendedora e Modelo de Negócios',
                    semesterId: '7'
                 },
                 {
                    id: '112',
                    name: 'Gestão de Pessoas',
                    semesterId: '7'
                 },
                 //8º semestre
                 {
                    id: '113',
                    name: 'Controle Avançado',
                    semesterId: '8'
                 },
                 {
                    id: '114',
                    name: 'Inteligência Artificial',
                    semesterId: '8'
                 },
                 {
                    id: '115',
                    name: 'Processos Metalurgicos',
                    semesterId: '8'
                 },
                 {
                    id: '116',
                    name: 'Direito e Legislação',
                    semesterId: '8'
                 },
                 {
                    id: '117',
                    name: 'Estratégia e Simulação Empresarial',
                    semesterId: '8'
                 },
                 {
                    id: '118',
                    name: 'Projeto Integrador IV',
                    semesterId: '8'
                 },
                 //9º semestre
                 {
                    id: '119',
                    name: 'Controle Discreto',
                    semesterId: '9'
                 },
                 {
                    id: '120',
                    name: 'Sistemas Embarcados',
                    semesterId: '9'
                 },
                 {
                    id: '121',
                    name: 'Tópicos Especiais em Engenharia',
                    semesterId: '9'
                 },
                 {
                    id: '122',
                    name: 'Projeto Final de Curso I',
                    semesterId: '9'
                 },
                 //10º semestre
                 {
                    id: '123',
                    name: 'Ciência de Dados',
                    semesterId: '10'
                 },
                 {
                    id: '124',
                    name: 'Projeto de Manufaura Integrada por Computador',
                    semesterId: '10'
                 },
                 {
                    id: '125',
                    name: 'Projeto Final de Curso II',
                    semesterId: '10'
                 }
            ]
        },
        {
            course: 'EA',
            subjects:
            [
                //1º semestre
                {
                    id: '126',
                    name: 'Álgebra Linear e Geometria Analítica',
                    semesterId: '1'
                 },
                 {
                    id: '127',
                    name: 'Algoritmo e Informática',
                    semesterId: '1'
                 },
                 {
                    id: '128',
                    name: 'Cálculo Diferencial e Integral I',
                    semesterId: '1'
                 },
                 {
                    id: '129',
                    name: 'Ciência do Ambiente e Desenvolvimento Sustentável',
                    semesterId: '1'
                 },
                 {
                    id: '130',
                    name: 'Física Geral e Experimental II',
                    semesterId: '1'
                 },
                 {
                    id: '131',
                    name: 'Introdução à Engenharia de Alimentos',
                    semesterId: '1'
                 },
                 {
                    id: '132',
                    name: 'Metodologia Científica',
                    semesterId: '1'
                 },
                 {
                    id: '133',
                    name: 'Microbiologia Geral',
                    semesterId: '1'
                 },
                 {
                    id: '134',
                    name: 'Química Geral',
                    semesterId: '1'
                 },
                 //2º semestre
                 {
                    id: '135',
                    name: 'Cálculo Diferencial e Integral II',
                    semesterId: '2'
                 },
                 {
                    id: '136',
                    name: 'Ciência dos Materiais',
                    semesterId: '2'
                 },
                 {
                    id: '137',
                    name: 'Ética e Cidadania',
                    semesterId: '2'
                 },
                 {
                    id: '138',
                    name: 'Física Geral e Experimental II',
                    semesterId: '2'
                 },
                 {
                    id: '139',
                    name: 'Físico-química',
                    semesterId: '2'
                 },
                 {
                    id: '140',
                    name: 'Mecânica Geral',
                    semesterId: '2'
                 },
                 {
                    id: '141',
                    name: 'Microbiologia de Alimentos',
                    semesterId: '2'
                 },
                 {
                    id: '142',
                    name: 'Química Orgânica',
                    semesterId: '2'
                 },
                 //3º semestre
                 {
                    id: '143',
                    name: 'Cálculo Diferencial e Integral III',
                    semesterId: '3'
                 },
                 {
                    id: '144',
                    name: 'Cálculo Numérico',
                    semesterId: '3'
                 },
                 {
                    id: '145',
                    name: 'Eletricidade Aplicada',
                    semesterId: '3'
                 },
                 {
                    id: '146',
                    name: 'Estatística Básica',
                    semesterId: '3'
                 },
                 {
                    id: '147',
                    name: 'Fundamentos de Tecnologia de Alimentos',
                    semesterId: '3'
                 },
                 {
                    id: '148',
                    name: 'Higiene e Legislação',
                    semesterId: '3'
                 },
                 {
                    id: '149',
                    name: 'Mecânica dos Sólidos',
                    semesterId: '3'
                 },
                 {
                    id: '150',
                    name: 'Química Analítica',
                    semesterId: '3'
                 },
                 {
                    id: '151',
                    name: 'Química de Alimentos I',
                    semesterId: '3'
                 },
                 {
                    id: '152',
                    name: 'Eletiva I',
                    semesterId: '3'
                 },
                 //4º semestre
                 {
                    id: '153',
                    name: 'Bioquímica de Alimentos',
                    semesterId: '4'
                 },
                 {
                    id: '154',
                    name: 'Eletrotécnica e Instalações Elétricas',
                    semesterId: '4'
                 },
                 {
                    id: '155',
                    name: 'Estatística Aplicada',
                    semesterId: '4'
                 },
                 {
                    id: '156',
                    name: 'Fenômenos de Transporte',
                    semesterId: '4'
                 },
                 {
                    id: '157',
                    name: 'Gestão Ambiental e Tratamento de Resíduos',
                    semesterId: '4'
                 },
                 {
                    id: '158',
                    name: 'Química de Alimentos II',
                    semesterId: '4'
                 },
                 {
                    id: '159',
                    name: 'Termodinâmica',
                    semesterId: '4'
                 },
                 //5º semestre
                 {
                    id: '160',
                    name: 'Administração Estratégica',
                    semesterId: '5'
                 },
                 {
                    id: '161',
                    name: 'Análise Sensorial',
                    semesterId: '5'
                 },
                 {
                    id: '162',
                    name: 'Embalagens Para Alimentos',
                    semesterId: '5'
                 },
                 {
                    id: '163',
                    name: 'Engenharia Bioquímica',
                    semesterId: '5'
                 },
                 {
                    id: '164',
                    name: 'Expressão Gráfica',
                    semesterId: '5'
                 },
                 {
                    id: '165',
                    name: 'Nutrição',
                    semesterId: '5'
                 },
                 {
                    id: '166',
                    name: 'Operações Unitárias I',
                    semesterId: '5'
                 },
                 {
                    id: '167',
                    name: 'Refrigeração',
                    semesterId: '5'
                 },
                 //6º semestre
                 {
                    id: '168',
                    name: 'Economia',
                    semesterId: '6'
                 },
                 {
                    id: '169',
                    name: 'Gestão da Qualidade e Segurança dos Alimentos',
                    semesterId: '6'
                 },
                 {
                    id: '170',
                    name: 'Gestão de Custos',
                    semesterId: '6'
                 },
                 {
                    id: '171',
                    name: 'Operações Unitárias II',
                    semesterId: '6'
                 },
                 {
                    id: '172',
                    name: 'Tecnologia de Carnes, Pescados e Ovos',
                    semesterId: '6'
                 },
                 {
                    id: '173',
                    name: 'Tecnologia de Leite e Café',
                    semesterId: '6'
                 },
                 {
                    id: '174',
                    name: 'Tecnologia de Óleos e Gorduras Vegetais',
                    semesterId: '6'
                 },
                 {
                    id: '175',
                    name: 'Eletiva II',
                    semesterId: '6'
                 },
                 //7º semestre
                 {
                    id: '176',
                    name: 'Desenvolvimento de Produtos I',
                    semesterId: '7'
                 },
                 {
                    id: '177',
                    name: 'Gestão de Projetos',
                    semesterId: '7'
                 },
                 {
                    id: '178',
                    name: 'Instalações Industriais',
                    semesterId: '7'
                 },
                 {
                    id: '179',
                    name: 'Instrumentação e Controle de Processos',
                    semesterId: '7'
                 },
                 {
                    id: '180',
                    name: 'Tecnologia de Frutas e Hortaliças e Produtos Açucarados',
                    semesterId: '7'
                 },
                 {
                    id: '181',
                    name: 'Tecnologia de Panificação e Massas Alimentícias',
                    semesterId: '7'
                 },
                 //8º semestre
                 {
                    id: '182',
                    name: 'Desenvolvimento de Produtos II',
                    semesterId: '8'
                 },
                 {
                    id: '183',
                    name: 'Economia de Negócios e Modelo e Análise de Decisão',
                    semesterId: '8'
                 },
                 {
                    id: '184',
                    name: 'Gestão Empreendedora',
                    semesterId: '8'
                 },
                 {
                    id: '185',
                    name: 'Tecnologia de Bebidas',
                    semesterId: '8'
                 },
                 //9º semestre
                 {
                    id: '186',
                    name: 'Planejamento e Projetos Industriais',
                    semesterId: '9'
                 },
                 {
                    id: '187',
                    name: 'Projeto Final de Curso I',
                    semesterId: '9'
                 },
                 //10º semestre
                 {
                    id: '188',
                    name: 'Projeto Final de Curso II',
                    semesterId: '10'
                 }
            ]
        },
        {
            course: 'ADM',
            subjects:
            [
                //1º semestre
                {
                    id: '189',
                    name: 'Teoria Geral da Administração',
                    semesterId: '1'
                 },
                 {
                    id: '190',
                    name: 'Metodologia da Pesquisa Científica',
                    semesterId: '1'
                 },
                 {
                    id: '191',
                    name: 'Ética e Cidadania',
                    semesterId: '1'
                 },
                 {
                    id: '192',
                    name: 'Métodos Quantitativos',
                    semesterId: '1'
                 },
                 {
                    id: '193',
                    name: 'Ferramentas Computacionais',
                    semesterId: '1'
                 },
                 {
                    id: '194',
                    name: 'Macroeconomia',
                    semesterId: '1'
                 },
                 //2º semestre
                 {
                    id: '195',
                    name: 'Comportamento Organizacional',
                    semesterId: '2'
                 },
                 {
                    id: '196',
                    name: 'Sociologia Aplicada à Administração',
                    semesterId: '2'
                 },
                 {
                    id: '197',
                    name: 'Fundamentos de Marketing',
                    semesterId: '2'
                 },
                 {
                    id: '198',
                    name: 'Direito Aplicado à Empresa',
                    semesterId: '2'
                 },
                 {
                    id: '199',
                    name: 'Estruturas Organizacionais',
                    semesterId: '2'
                 },
                 {
                    id: '200',
                    name: 'Estatística Básica',
                    semesterId: '2'
                 },
                 {
                    id: '201',
                    name: 'Microeconomia',
                    semesterId: '2'
                 },
                 //3º semestre
                 {
                    id: '202',
                    name: 'Administração de Sistemas de Informação',
                    semesterId: '3'
                 },
                 {
                    id: '203',
                    name: 'Contabilidade para Administradores',
                    semesterId: '3'
                 },
                 {
                    id: '204',
                    name: 'Planejamento Estratégico EmpresariaI',
                    semesterId: '3'
                 },
                 {
                    id: '205',
                    name: 'Projeto Interdisciplinar I',
                    semesterId: '3'
                 },
                 {
                    id: '206',
                    name: 'Estatística Aplicada',
                    semesterId: '3'
                 },
                 {
                    id: '207',
                    name: 'Comportamento do Consumidor e Pesquisa de  Mercado',
                    semesterId: '3'
                 },
                 {
                    id: '208',
                    name: 'Eletiva I',
                    semesterId: '3'
                 },
                 //4º semestre
                 {
                    id: '209',
                    name: 'Gestão Estratégica de Custos',
                    semesterId: '4'
                 },
                 {
                    id: '210',
                    name: 'Recursos Materiais e Patrimoniais',
                    semesterId: '4'
                 },
                 {
                    id: '211',
                    name: 'Criatividade e Inovação',
                    semesterId: '4'
                 },
                 {
                    id: '212',
                    name: 'Econometria',
                    semesterId: '4'
                 },
                 {
                    id: '213',
                    name: 'Gestão Mercadológica',
                    semesterId: '4'
                 },
                 {
                    id: '214',
                    name: 'Matemática Financeira',
                    semesterId: '4'
                 },
                 //5º semestre
                 {
                    id: '215',
                    name: 'Administração da Produção e Operações',
                    semesterId: '5'
                 },
                 {
                    id: '216',
                    name: 'Análise Contábil e Financeira',
                    semesterId: '5'
                 },
                 {
                    id: '217',
                    name: 'Planejamento Tributário',
                    semesterId: '5'
                 },
                 {
                    id: '218',
                    name: 'Gestão de Projetos',
                    semesterId: '5'
                 },
                 {
                    id: '219',
                    name: 'Gestão de Pessoas',
                    semesterId: '5'
                 },
                 {
                    id: '220',
                    name: 'Gestão de Inteligência de Mercado',
                    semesterId: '5'
                 },
                 //6º semestre
                 {
                    id: '221',
                    name: 'Estratégia Competitiva e Corporativa',
                    semesterId: '6'
                 },
                 {
                    id: '222',
                    name: 'Pesquisa Operacional',
                    semesterId: '6'
                 },
                 {
                    id: '223',
                    name: 'Gerenciamento da Cadeia de Suprimentos',
                    semesterId: '6'
                 },
                 {
                    id: '224',
                    name: 'Viabilidade Econômico Financeira de Negócios',
                    semesterId: '6'
                 },
                 {
                    id: '225',
                    name: 'Projeto Interdisciplinar II',
                    semesterId: '6'
                 },
                 {
                    id: '226',
                    name: 'Modelos de Análise de Decisões',
                    semesterId: '6'
                 },
                 {
                    id: '227',
                    name: 'Comércio Exterior',
                    semesterId: '6'
                 },
                 {
                    id: '228',
                    name: 'Eletiva II',
                    semesterId: '6'
                 },
                 //7º semestre
                 {
                    id: '229',
                    name: 'Empreendedorismo',
                    semesterId: '7'
                 },
                 {
                    id: '230',
                    name: 'Avaliação de Empresa para M&A (Aquisição e Fusão) Valuation',
                    semesterId: '7'
                 },
                 {
                    id: '231',
                    name: 'Responsabilidade Social e Ambiental',
                    semesterId: '7'
                 },
                 {
                    id: '232',
                    name: 'Liderança e Gestão por Competência',
                    semesterId: '7'
                 },
                 {
                    id: '233',
                    name: 'Gestão da Qualidade e Produtividade',
                    semesterId: '7'
                 },
                 {
                    id: '234',
                    name: 'Gestão do Conhecimento',
                    semesterId: '7'
                 },
                 {
                    id: '235',
                    name: 'Projeto Final de Curso I',
                    semesterId: '7'
                 },
                 //8º semestre
                 {
                    id: '236',
                    name: 'Jogos Empresariais',
                    semesterId: '8'
                 },
                 {
                    id: '237',
                    name: 'Gestão do Relacionamento Público e Privado',
                    semesterId: '8'
                 },
                 {
                    id: '238',
                    name: 'Práticas de Gestão Contemporânea e Internacionalização de Negócios',
                    semesterId: '8'
                 },
                 {
                    id: '239',
                    name: 'Tópicos Avançados de Gestão de Projetos',
                    semesterId: '8'
                 },
                 {
                    id: '240',
                    name: 'Gestão da Inovação',
                    semesterId: '8'
                 },
                 {
                    id: '241',
                    name: 'Projeto Final de Curso II',
                    semesterId: '8'
                 }
            ]
        }
    ]

    const filteredSubjectByType = subjects.filter((sub) => { return sub.course === course })
    const filteredSubjectBySemesterId = filteredSubjectByType[0]?.subjects?.filter((sub) => { return sub.semesterId === semesterId })
    const navigation = useNavigation<NavigationProps>()

    function nextPage(subject: string) {
        navigation.navigate('ratings', {subject})
    }
    
    return {
        filteredSubjectBySemesterId,
        nextPage,
    }
}