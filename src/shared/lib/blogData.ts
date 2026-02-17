import { slugify } from "../utils/seo";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

// MODEL

// {
//     id: "1",
//     slug: slugify('Guia 2026: Quanto cobrar por uma composição? Entenda os valores do mercado musical'),
//     title: "Guia 2026: Quanto cobrar por uma composição? Entenda os valores do mercado musical",
//     excerpt: "Neste guia, vamos abrir a 'caixa preta' dos valores praticados em 2026 para que você não saia no prejuízo e valorize o seu dom.",
//     content: ``,
//     date: "10 de Fevereiro, 2026",
//     category: "Mercado Musical",
//     image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000"
//   }


export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: slugify('Guia 2026: Quanto cobrar por uma composição? Entenda os valores do mercado musical'),
    title: "Guia 2026: Quanto cobrar por uma composição? Entenda os valores do mercado musical",
    excerpt: "Neste guia, vamos abrir a 'caixa preta' dos valores praticados em 2026 para que você não saia no prejuízo e valorize o seu dom.",
    content: `
      Se você é compositor ou um artista em busca de repertório, já deve ter percebido que o mercado da música não tem uma "tabela de preços" fixada na parede. O valor de uma obra é um dos segredos mais bem guardados das bancadas de composição, mas hoje vamos abrir essa conversa de forma transparente.

Cobrar pela sua arte não é apenas colocar um preço no papel; é entender o potencial de negócio que aquela letra e melodia carregam.

1. O que define o preço de uma música?

Antes de dar o valor, o mercado analisa três pilares principais:

O histórico do compositor: Quem já tem hits no topo das paradas (as famosas "músicas no 1") cobra muito mais caro pelo "passe" da obra.

O potencial do artista comprador: Cobrar de um artista iniciante é diferente de negociar com um nome que já lota arenas.

A exclusividade: Você está vendendo o direito de apenas aquela pessoa gravar ou está liberando para quem quiser (liberação simples)?

2. Modelos de Negócio e Valores Médios (Referência 2026)

Baseado nas práticas atuais do mercado brasileiro, aqui estão as faixas de preço mais comuns para o pagamento inicial (o chamado "upfront"):

Liberação Simples (Não exclusiva): O artista paga para gravar, mas o compositor pode liberar a mesma música para outros artistas. Os valores costumam girar entre R$ 1.500,00 e R$ 4.000,00.

Exclusividade Temporária: O artista garante que será o único a trabalhar aquela música por 1 ou 2 anos. É o modelo mais comum para quem está em ascensão. Os valores variam de R$ 8.000,00 a R$ 20.000,00.

Compra de Obra (Venda Total): Muito comum no sertanejo e pop de grandes gravadoras. O artista ou a editora "compra" a exclusividade total da obra. Aqui, os valores partem de R$ 30.000,00 e podem ultrapassar os R$ 100.000,00 em casos de compositores renomados.

3. O dinheiro não acaba na venda: O papel do ECAD

É fundamental lembrar que o valor pago pela música no ato da compra é apenas o começo. No Brasil, o compositor nunca deve abrir mão dos seus Direitos Autorais de execução pública.

Toda vez que a música tocar no rádio, na TV, no Spotify ou em shows, o ECAD arrecada valores que são repassados aos autores. Muitas vezes, uma música que foi "vendida barato" inicialmente acaba rendendo fortunas em direitos autorais ao longo dos anos se ela se tornar um hit.

4. Dicas para valorizar sua composição

Quer cobrar mais caro? Invista na apresentação:

Guia de Qualidade: Uma demo (guia) bem gravada, com uma voz afinada e um arranjo mínimo, ajuda o artista a se imaginar cantando a música. Isso agrega valor imediato.

Foque no Refrão: Em tempos de vídeos curtos e virais, um refrão marcante vale ouro.

Networking: Estar presente em acampamentos de composição (song camps) e bancadas ajuda a construir o nome que sustenta preços mais altos.

Conclusão

Não existe valor certo ou errado, existe o valor que faz sentido para o seu momento de carreira. Se você está começando, às vezes vale mais a pena colocar sua música na voz de um artista promissor por um preço menor do que ficar com ela "na gaveta" esperando um valor alto que não chega.

Sua música é seu patrimônio. Valorize-a!

    
    `,
    date: "10 de Fevereiro, 2026",
    category: "Mercado Musical",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000"
  }, 
    {
    id: "2",
    slug: slugify('Valorização na Composição: O que faz o preço da sua música subir (ou descer)'),
    title: "Valorização na Composição: O que faz o preço da sua música subir (ou descer)",
    excerpt: "Não é apenas 'sorte'. Existem fatores técnicos, comerciais e até psicológicos que influenciam diretamente na hora de fechar o contrato. Se você quer valorizar o seu catálogo em 2026, precisa entender esses gatilhos.",
    content: `No mercado da música, o valor de uma obra é volátil. Duas composições podem ter a mesma estrutura, mas uma ser negociada por R$ 2 mil e a outra por R$ 20 mil. O que causa essa discrepância?

Não é apenas "sorte". Existem fatores técnicos, comerciais e até psicológicos que influenciam diretamente na hora de fechar o contrato. Se você quer valorizar o seu catálogo em 2026, precisa entender esses gatilhos.

🚀 Fatores que fazem o preço SUBIR
1. A Qualidade da "Guia" (Demo)
A era das guias gravadas apenas com voz e violão no fundo do quarto está ficando para trás. Uma guia com uma produção mínima, voz bem afinada e uma boa mixagem permite que o artista e o produtor "enxerguem" o hit pronto. Quanto menos esforço o comprador tiver para imaginar a música no rádio, mais ele estará disposto a pagar.

2. O "Hook" de 15 segundos (Potencial Viral)
Em 2026, a música precisa funcionar nas redes sociais. Se a sua composição tem um refrão chiclete ou uma frase que se encaixa perfeitamente em "trends" ou desafios, o valor dela sobe instantaneamente. O mercado busca músicas que já venham com um plano de marketing embutido na letra.

3. Seu Histórico de Sucessos (Track Record)
Compor é um mercado de confiança. Se você já emplacou músicas em playlists de destaque ou teve obras gravadas por nomes conhecidos, seu "passe" valoriza. O artista não está comprando apenas uma música; ele está comprando a sua expertise em criar sucessos.

4. Ineditismo e Exclusividade Total
Uma música que nunca foi "rodada" (enviada para vários artistas ao mesmo tempo) vale muito mais. Quando você oferece algo exclusivo e personalizado para a identidade de um artista específico, ele sente que aquela obra foi feita sob medida para a carreira dele.

📉 Fatores que fazem o preço DESCER
1. Música "Viciada" ou Rodada
Não há nada que desvalorize mais uma música do que o artista descobrir que ela já foi enviada para todos os concorrentes dele. Se a guia já circulou demais nos grupos de WhatsApp de produtores sem ser fechada, ela perde o frescor e o valor de mercado cai drasticamente.

2. Letras Clichês ou Datadas
O público de 2026 busca autenticidade. Composições que usam rimas óbvias ou temas que já saturaram no ano passado são difíceis de vender. Se a música soa como "mais do mesmo", ela entra na vala comum do preço mínimo.

3. Problemas Jurídicos e de "Splits"
Músicas com muitos parceiros de composição sem uma divisão (split sheet) definida são um pesadelo para as gravadoras. Se a burocracia para liberar a obra for alta, o comprador pode desistir ou oferecer um valor bem menor para compensar o risco jurídico.

4. Falta de Identidade Artística
Tentar atirar para todos os lados (fazer uma música que "serve para sertanejo, mas também para o pop") geralmente resulta em algo que não serve perfeitamente para ninguém. A falta de foco na entrega desvaloriza o produto final.

Conclusão
Entender esses fatores é o que separa o compositor amador do profissional que vive de música. O segredo é tratar cada composição como um produto premium: cuide da embalagem (a guia), da estratégia (o envio) e da qualidade (a letra).`,
    date: "11 de Fevereiro, 2026",
    category: "Mercado Musical",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000"
  },
  {
    id: "3",
    slug: slugify('Como mostrar minhas composições? 5 estratégias para chegar aos artistas e produtores'),
    title: "Como mostrar minhas composições? 5 estratégias para chegar aos artistas e produtores",
    excerpt: "Neste guia, vamos abrir a 'caixa preta' dos valores praticados em 2026 para que você não saia no prejuízo e valorize o seu dom.",
    content: `
    Você terminou aquela música, o refrão é forte e a melodia não sai da cabeça. Agora vem o desafio que trava muitos talentos: como fazer essa obra ser ouvida por quem decide?

Antigamente, o caminho era bater na porta das gravadoras com um CD na mão. Em 2026, o jogo é digital, mas a concorrência é gigante. Para se destacar, você precisa ser mais que um poeta; você precisa ser um estrategista.

Aqui estão os caminhos mais eficientes para mostrar seu trabalho hoje:

1. Tenha o seu "Hub" Profissional
Redes sociais são ótimas, mas elas são "terrenos alugados". O compositor profissional precisa de uma casa própria — um site oficial. Ter um portfólio organizado onde o artista ou empresário possa filtrar suas músicas por gênero (Sertanejo, Pop, Trap, etc.) ou por "vibe" (Romântica, Piseiro, Viral) passa uma credibilidade imediata. É a diferença entre um amador e um empresário da música.

2. A Vitrine das Redes Sociais (Onde o olho brilha)
O TikTok e o Instagram não servem apenas para danças; eles são os maiores catálogos de talentos do mundo.

Dica: Poste vídeos curtos focados no "sentimento" da música. Às vezes, um vídeo simples de voz e violão com a letra passando na tela gera mais interesse de um artista do que uma produção cara. O segredo é a constância e o uso de hashtags estratégicas do nicho musical.

3. Abordagem Direta: O "Net-Hitting"
Não adianta mandar sua música para o direct do artista mais famoso do Brasil e esperar um milagre. O caminho mais curto, muitas vezes, é o Produtor Musical.
Os produtores são os "filtros" dos artistas. Pesquise quem produz os discos que você gosta e tente um contato profissional.

Regra de ouro: Seja breve. Não mande arquivos pesados. Mande um link (SoundCloud, Drive ou seu site) e uma mensagem curta: "Acredito que essa obra tem a cara do projeto X que você está produzindo".

4. Participe de Bancadas e Song Camps
A composição coletiva é uma tendência imparável. Participar de acampamentos de composição (Song Camps) coloca você em contato direto com outros compositores e editores. É o lugar onde as parcerias nascem e as músicas são direcionadas diretamente para os repertórios de grandes artistas.

5. Organize seu Catálogo (A parte técnica)
Nada queima mais o filme de um compositor do que o artista gostar da música e você não ter a guia pronta ou não saber quem são os outros autores para liberar a obra.

Use pastas organizadas no Dropbox ou Google Drive.

Nomeie os arquivos corretamente: NomeDaMusica_Compositores_Genero.mp3.

Tenha a letra e a "split sheet" (divisão de porcentagens) sempre à mão.

Conclusão
Mostrar sua composição é um exercício de paciência e resiliência. O "não" você já tem; o "sim" está escondido atrás de uma boa apresentação e do contato certo. Foque em profissionalizar sua entrega e os resultados virão.
    `,
    date: "10 de Fevereiro, 2026",
    category: "Mercado Musical",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000"
  }
]; 