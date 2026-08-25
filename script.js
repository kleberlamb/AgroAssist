// ============================================
// CONFIGURAÇÃO
// ============================================
const API_KEY = '92fd8bb5c88b1d619662464c0735b4be';
const CIDADE = 'Belo Horizonte';
const PAIS = 'BR';

// ============================================
// BANCO DE DADOS DAS PLANTAS (COM DADOS FINANCEIROS)
// ============================================
const plantasDB = {
    tomate: { nome: 'Tomate', diasColheita: 90, epoca: [8, 9, 10, 11, 12, 1, 2], categoria: 'frutifera', custoMuda: 1.5, precoVenda: 6.5, espacamento: '50x100 cm', mesesPlantio: 'Ago-Jan' },
    alface: { nome: 'Alface', diasColheita: 45, epoca: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], categoria: 'hortalica', custoMuda: 0.4, precoVenda: 4.0, espacamento: '30x30 cm', mesesPlantio: 'Ano todo' },
    pimenta: { nome: 'Pimenta', diasColheita: 120, epoca: [9, 10, 11, 12, 1, 2], categoria: 'frutifera', custoMuda: 1.2, precoVenda: 12.0, espacamento: '40x60 cm', mesesPlantio: 'Set-Fev' },
    couve: { nome: 'Couve', diasColheita: 70, epoca: [3, 4, 5, 6, 7, 8, 9], categoria: 'hortalica', custoMuda: 0.8, precoVenda: 5.0, espacamento: '40x80 cm', mesesPlantio: 'Mar-Set' },
    cebolinha: { nome: 'Cebolinha', diasColheita: 60, epoca: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], categoria: 'tempero', custoMuda: 0.5, precoVenda: 8.0, espacamento: '10x20 cm', mesesPlantio: 'Ano todo' },
    cenoura: { nome: 'Cenoura', diasColheita: 80, epoca: [4, 5, 6, 7], categoria: 'hortalica', custoMuda: 0.3, precoVenda: 4.5, espacamento: '10x20 cm', mesesPlantio: 'Abr-Jul' },
    feijao: { nome: 'Feijão', diasColheita: 75, epoca: [10, 11, 12, 1, 2], categoria: 'grao', custoMuda: 0.6, precoVenda: 7.0, espacamento: '20x40 cm', mesesPlantio: 'Out-Fev' },
    abobora: { nome: 'Abóbora', diasColheita: 100, epoca: [9, 10, 11, 12, 1, 2, 3], categoria: 'frutifera', custoMuda: 2.0, precoVenda: 3.5, espacamento: '100x150 cm', mesesPlantio: 'Set-Mar' },
    alho: { nome: 'Alho', diasColheita: 100, epoca: [2, 3, 4, 5, 6], categoria: 'tempero', custoMuda: 1.0, precoVenda: 15.0, espacamento: '10x20 cm', mesesPlantio: 'Fev-Jun' },
    batata: { nome: 'Batata', diasColheita: 100, epoca: [4, 5], categoria: 'hortalica', custoMuda: 1.0, precoVenda: 4.0, espacamento: '30x60 cm', mesesPlantio: 'Abr-Mai' },
    beterraba: { nome: 'Beterraba', diasColheita: 70, epoca: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], categoria: 'hortalica', custoMuda: 0.5, precoVenda: 5.0, espacamento: '15x30 cm', mesesPlantio: 'Ano todo' },
    brocolis: { nome: 'Brócolis', diasColheita: 80, epoca: [2, 3, 4, 5, 6, 7, 8, 9], categoria: 'hortalica', custoMuda: 0.8, precoVenda: 6.0, espacamento: '40x60 cm', mesesPlantio: 'Fev-Set' },
    cebola: { nome: 'Cebola', diasColheita: 150, epoca: [2, 3, 4, 5], categoria: 'hortalica', custoMuda: 1.0, precoVenda: 6.0, espacamento: '10x20 cm', mesesPlantio: 'Fev-Mai' },
    espinafre: { nome: 'Espinafre', diasColheita: 60, epoca: [2, 3, 4, 5, 6, 7, 8, 9], categoria: 'hortalica', custoMuda: 0.5, precoVenda: 7.0, espacamento: '20x30 cm', mesesPlantio: 'Fev-Set' },
    gengibre: { nome: 'Gengibre', diasColheita: 240, epoca: [9, 10, 11, 12], categoria: 'tempero', custoMuda: 1.5, precoVenda: 10.0, espacamento: '20x30 cm', mesesPlantio: 'Set-Dez' },
    goiaba: { nome: 'Goiaba', diasColheita: 450, epoca: [9, 10, 11], categoria: 'frutifera', custoMuda: 3.0, precoVenda: 4.0, espacamento: '300x400 cm', mesesPlantio: 'Set-Nov' },
    laranja: { nome: 'Laranja', diasColheita: 900, epoca: [10, 11, 12, 1, 2, 3], categoria: 'frutifera', custoMuda: 5.0, precoVenda: 3.0, espacamento: '400x500 cm', mesesPlantio: 'Out-Mar' },
    manga: { nome: 'Manga', diasColheita: 900, epoca: [1, 2], categoria: 'frutifera', custoMuda: 4.0, precoVenda: 4.5, espacamento: '500x600 cm', mesesPlantio: 'Jan-Fev' },
    manjericao: { nome: 'Manjericão', diasColheita: 50, epoca: [9], categoria: 'tempero', custoMuda: 0.5, precoVenda: 20.0, espacamento: '20x20 cm', mesesPlantio: 'Set' },
    milho: { nome: 'Milho', diasColheita: 100, epoca: [9, 10, 11], categoria: 'grao', custoMuda: 0.8, precoVenda: 3.0, espacamento: '80x100 cm', mesesPlantio: 'Set-Nov' },
    morango: { nome: 'Morango', diasColheita: 70, epoca: [3, 4, 5], categoria: 'frutifera', custoMuda: 1.5, precoVenda: 12.0, espacamento: '30x30 cm', mesesPlantio: 'Mar-Mai' },
    pepino: { nome: 'Pepino', diasColheita: 50, epoca: [9, 10, 11, 12, 1, 2], categoria: 'frutifera', custoMuda: 1.0, precoVenda: 4.0, espacamento: '40x80 cm', mesesPlantio: 'Set-Fev' },
    rucula: { nome: 'Rúcula', diasColheita: 40, epoca: [3, 4, 5, 6, 7, 8], categoria: 'hortalica', custoMuda: 0.4, precoVenda: 6.0, espacamento: '15x25 cm', mesesPlantio: 'Mar-Ago' },
    salsa: { nome: 'Salsa', diasColheita: 60, epoca: [3, 4, 5, 6, 7, 8, 9], categoria: 'tempero', custoMuda: 0.5, precoVenda: 10.0, espacamento: '10x20 cm', mesesPlantio: 'Mar-Set' },
    uva: { nome: 'Uva', diasColheita: 900, epoca: [6, 7, 8], categoria: 'frutifera', custoMuda: 6.0, precoVenda: 5.0, espacamento: '200x300 cm', mesesPlantio: 'Jun-Ago' }
};

const categorias = {
    hortalica: '🥬 Hortaliça',
    frutifera: '🍅 Frutífera',
    tempero: '🌿 Tempero',
    grao: '🌾 Grão'
};

// ============================================
// TOAST (reutiliza a função do index.html, mas com fallback)
// ============================================
if (typeof mostrarToast !== 'function') {
    window.mostrarToast = function(mensagem, cor = '#1e4a2b') {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = mensagem;
        toast.style.background = cor;
        toast.classList.add('show');
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    };
}

// ============================================
// DICA DO DIA
// ============================================
const dicas = [
    '🌱 Regue as plantas pela manhã para evitar fungos.',
    '🌿 Adube a terra com composto orgânico uma vez por mês.',
    '🍅 Colha os tomates quando estiverem firmes e vermelhos.',
    '🥬 Plante alface em local com boa circulação de ar.',
    '🌶 Pimentas gostam de sol direto e solo bem drenado.',
    '🌙 Plante na lua crescente para melhores frutos.',
    '💧 Não encharque o solo, apenas mantenha úmido.',
    '✂️ Pode as folhas secas para estimular o crescimento.',
    '🐞 Plante flores ao redor da horta para atrair polinizadores.',
    '🌾 Rotacione as culturas para evitar doenças no solo.'
];

function mostrarDica() {
    const dica = dicas[Math.floor(Math.random() * dicas.length)];
    const el = document.getElementById('dica-do-dia');
    if (el) el.textContent = dica;
}

// ============================================
// 🌙 FASE DA LUA
// ============================================
function calcularFaseLua() {
    const hoje = new Date();
    const ref = new Date(2000, 0, 1);
    const diff = (hoje - ref) / (1000 * 60 * 60 * 24);
    const ciclo = 29.53058867;
    const fase = (diff % ciclo) / ciclo;

    let nome, recomendacao;
    if (fase < 0.0625) {
        nome = '🌑 Lua Nova';
        recomendacao = '🌱 Plante mudas de folhas (alface, couve).';
    } else if (fase < 0.1875) {
        nome = '🌒 Lua Crescente (primeiro quarto)';
        recomendacao = '🌿 Plante frutos e flores (tomate, pimenta).';
    } else if (fase < 0.3125) {
        nome = '🌓 Quarto Crescente';
        recomendacao = '🌿 Ótimo para transplantar mudas.';
    } else if (fase < 0.4375) {
        nome = '🌔 Lua Crescente (gibosa)';
        recomendacao = '🌱 Continue plantando, mas evite podar.';
    } else if (fase < 0.5625) {
        nome = '🌕 Lua Cheia';
        recomendacao = '🍅 Colha! É o melhor momento para colher frutos.';
    } else if (fase < 0.6875) {
        nome = '🌖 Lua Minguante (gibosa)';
        recomendacao = '✂️ Pode e aduba a terra.';
    } else if (fase < 0.8125) {
        nome = '🌗 Quarto Minguante';
        recomendacao = '🌱 Plante raízes (cenoura, beterraba).';
    } else if (fase < 0.9375) {
        nome = '🌘 Lua Minguante (final)';
        recomendacao = '🌿 Prepare o solo, evite plantar.';
    } else {
        nome = '🌑 Lua Nova';
        recomendacao = '🌱 Plante mudas de folhas (alface, couve).';
    }
    const nomeEl = document.getElementById('fase-nome');
    const recEl = document.getElementById('fase-recomendacao');
    if (nomeEl) nomeEl.textContent = nome;
    if (recEl) recEl.textContent = recomendacao;
}

// ============================================
// 🌧️ CLIMA
// ============================================
function buscarClima() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CIDADE},${PAIS}&appid=${API_KEY}&units=metric&lang=pt_br`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const tempEl = document.getElementById('temperatura');
            const cidadeEl = document.getElementById('cidade-clima');
            if (tempEl) tempEl.textContent = Math.round(data.main.temp);
            if (cidadeEl) cidadeEl.textContent = data.name;
            const chuva = data.rain ? data.rain['1h'] || data.rain['3h'] : 0;
            const alertaDiv = document.getElementById('alertas-clima');
            if (!alertaDiv) return;
            alertaDiv.innerHTML = '';
            if (chuva > 0) {
                const alerta = document.createElement('p');
                alerta.style.color = '#c62828';
                alerta.style.fontWeight = 'bold';
                alerta.textContent = `⚠️ Atenção! Chuva forte prevista: ${chuva} mm/h. Proteja suas mudas!`;
                alertaDiv.appendChild(alerta);
            } else {
                const ok = document.createElement('p');
                ok.style.color = '#2e7d32';
                ok.textContent = '✅ Sem previsão de chuva nas próximas horas.';
                alertaDiv.appendChild(ok);
            }
        })
        .catch(() => {
            const tempEl = document.getElementById('temperatura');
            const cidadeEl = document.getElementById('cidade-clima');
            if (tempEl) tempEl.textContent = '--';
            if (cidadeEl) cidadeEl.textContent = '--';
        });
}

// ============================================
// 📅 PLANTIO RECOMENDADO
// ============================================
function carregarPlantioRecomendado() {
    const container = document.getElementById('lista-plantio');
    if (!container) return;
    const mesAtual = new Date().getMonth() + 1;
    const recomendadas = Object.values(plantasDB).filter(p => p.epoca.includes(mesAtual));
    if (recomendadas.length === 0) {
        container.innerHTML = '<p class="empty-message">🌾 Nenhuma planta recomendada para este mês.</p>';
        return;
    }
    let html = '<ul style="list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 10px;">';
    recomendadas.forEach(p => {
        const cat = categorias[p.categoria] || p.categoria;
        html += `<li><span style="background: #eaf5ea; padding: 8px 16px; border-radius: 30px; display: inline-block;">${cat} — ${p.nome}</span></li>`;
    });
    html += '</ul>';
    container.innerHTML = html;
}

// ============================================
// 📊 GRÁFICOS (Chart.js) - SIMPLIFICADO
// ============================================
let graficoInstance = null;

function atualizarGrafico() {
    const mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    const ctx = document.getElementById('graficoMudas');
    if (!ctx) return;
    const canvas = ctx.getContext('2d');
    if (graficoInstance) graficoInstance.destroy();
    const contagem = {};
    mudas.forEach(m => {
        contagem[m.nome] = (contagem[m.nome] || 0) + parseInt(m.quantidade) || 0;
    });
    const labels = Object.keys(contagem);
    const data = Object.values(contagem);
    if (labels.length === 0) {
        graficoInstance = new Chart(canvas, {
            type: 'bar',
            data: { labels: ['Nenhuma muda'], datasets: [{ label: 'Quantidade', data: [0], backgroundColor: '#c8e0c8' }] },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
        return;
    }
    graficoInstance = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade de mudas',
                data: data,
                backgroundColor: '#2e7d32',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

// ============================================
// 📥 EXPORTAR CSV
// ============================================
function exportarCSV(tipo) {
    const dados = JSON.parse(localStorage.getItem(tipo)) || [];
    if (dados.length === 0) {
        mostrarToast('⚠️ Nenhum dado para exportar.', '#c62828');
        return;
    }
    const cabecalho = tipo === 'mudas' ? 'Nome,Quantidade,Data de plantio,Observações' : 'Nome,Quantidade,Data do transplante,Observações';
    let csv = cabecalho + '\n';
    dados.forEach(d => {
        csv += `${d.nome},${d.quantidade},${d.data},${(d.obs || '').replace(/,/g, ';')}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${tipo}_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    mostrarToast('✅ Arquivo CSV baixado!', '#2e7d32');
}

// ============================================
// 🔍 PESQUISA AVANÇADA
// ============================================
function pesquisarAvancado() {
    const input = document.getElementById('campoPesquisa');
    if (!input) return;
    const termo = input.value.trim().toLowerCase();
    if (!termo) {
        mostrarToast('🔍 Digite um termo para pesquisar.', '#5d6d5d');
        return;
    }
    const plantasMatch = Object.keys(plantasDB).filter(p => p.includes(termo));
    if (plantasMatch.length > 0) {
        window.location.href = `${plantasMatch[0]}.html`;
        return;
    }
    // Busca em mudas e plantações
    const mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    const plantacoes = JSON.parse(localStorage.getItem('plantacoes')) || [];
    const resultados = [];
    mudas.forEach((m, i) => {
        if (m.nome.toLowerCase().includes(termo) || (m.obs || '').toLowerCase().includes(termo)) {
            resultados.push({ tipo: 'muda', nome: m.nome, dados: m, index: i });
        }
    });
    plantacoes.forEach((p, i) => {
        if (p.nome.toLowerCase().includes(termo) || (p.obs || '').toLowerCase().includes(termo)) {
            resultados.push({ tipo: 'plantacao', nome: p.nome, dados: p, index: i });
        }
    });
    if (resultados.length > 0) {
        let msg = '🔎 Resultados encontrados:\n';
        resultados.forEach(r => {
            msg += `- ${r.tipo === 'muda' ? '🌱' : '🌿'} ${r.nome} (${r.dados.data})\n`;
        });
        alert(msg);
    } else {
        mostrarToast(`🌱 Nenhum resultado para "${termo}".`, '#c62828');
    }
}

// ============================================
// FUNÇÕES FINANCEIRAS
// ============================================

function calcularLucro(planta, quantidade) {
    if (!planta || !planta.custoMuda || !planta.precoVenda) return 0;
    const custoTotal = planta.custoMuda * quantidade;
    const producaoEstimada = quantidade * 0.5;
    const receitaTotal = producaoEstimada * planta.precoVenda;
    return receitaTotal - custoTotal;
}

function calcularROI(planta, quantidade) {
    const lucro = calcularLucro(planta, quantidade);
    const custoTotal = planta.custoMuda * quantidade;
    if (custoTotal === 0) return 0;
    return (lucro / custoTotal) * 100;
}

function calcularResumoFinanceiro() {
    const mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    let custoTotal = 0, receitaTotal = 0, lucroTotal = 0;
    mudas.forEach(m => {
        const planta = Object.values(plantasDB).find(p => p.nome.toLowerCase() === m.nome.toLowerCase());
        if (planta) {
            const qtd = parseInt(m.quantidade) || 0;
            custoTotal += planta.custoMuda * qtd;
            const producaoEstimada = qtd * 0.5;
            receitaTotal += producaoEstimada * planta.precoVenda;
        }
    });
    lucroTotal = receitaTotal - custoTotal;
    return { custoTotal, receitaTotal, lucroTotal };
}

function carregarFinanceiro() {
    const resumo = calcularResumoFinanceiro();
    const custoEl = document.getElementById('custoTotal');
    const receitaEl = document.getElementById('receitaTotal');
    const lucroEl = document.getElementById('lucroTotal');
    const roiEl = document.getElementById('roiMedio');
    if (custoEl) custoEl.textContent = `R$ ${resumo.custoTotal.toFixed(2)}`;
    if (receitaEl) receitaEl.textContent = `R$ ${resumo.receitaTotal.toFixed(2)}`;
    if (lucroEl) lucroEl.textContent = `R$ ${resumo.lucroTotal.toFixed(2)}`;

    const mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    let roiTotal = 0, count = 0;
    mudas.forEach(m => {
        const planta = Object.values(plantasDB).find(p => p.nome.toLowerCase() === m.nome.toLowerCase());
        if (planta) {
            roiTotal += calcularROI(planta, parseInt(m.quantidade) || 0);
            count++;
        }
    });
    const roiMedio = count > 0 ? roiTotal / count : 0;
    if (roiEl) roiEl.textContent = roiMedio.toFixed(1) + '%';
}

// ============================================
// GRÁFICO FINANCEIRO
// ============================================
let graficoFinanceiroInstance = null;

function atualizarGraficoFinanceiro() {
    const mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    const ctx = document.getElementById('graficoFinanceiro');
    if (!ctx) return;
    const canvas = ctx.getContext('2d');
    if (graficoFinanceiroInstance) graficoFinanceiroInstance.destroy();

    const resumo = {};
    mudas.forEach(m => {
        const planta = Object.values(plantasDB).find(p => p.nome.toLowerCase() === m.nome.toLowerCase());
        if (planta) {
            const qtd = parseInt(m.quantidade) || 0;
            if (!resumo[m.nome]) resumo[m.nome] = { custo: 0, receita: 0, lucro: 0 };
            resumo[m.nome].custo += planta.custoMuda * qtd;
            const producaoEstimada = qtd * 0.5;
            resumo[m.nome].receita += producaoEstimada * planta.precoVenda;
            resumo[m.nome].lucro = resumo[m.nome].receita - resumo[m.nome].custo;
        }
    });

    const labels = Object.keys(resumo);
    const custoData = labels.map(l => resumo[l].custo);
    const receitaData = labels.map(l => resumo[l].receita);
    const lucroData = labels.map(l => resumo[l].lucro);

    if (labels.length === 0) {
        graficoFinanceiroInstance = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: ['Nenhuma muda'],
                datasets: [
                    { label: 'Custo', data: [0], backgroundColor: '#c62828' },
                    { label: 'Receita', data: [0], backgroundColor: '#2e7d32' },
                    { label: 'Lucro', data: [0], backgroundColor: '#f9a825' }
                ]
            },
            options: { responsive: true, plugins: { legend: { position: 'top' } } }
        });
        return;
    }

    graficoFinanceiroInstance = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                { label: 'Custo (R$)', data: custoData, backgroundColor: '#c62828' },
                { label: 'Receita (R$)', data: receitaData, backgroundColor: '#2e7d32' },
                { label: 'Lucro (R$)', data: lucroData, backgroundColor: '#f9a825' }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

// ============================================
// FIRESTORE FUNCTIONS
// ============================================

function salvarMudaFirestore() {
    const nome = document.getElementById('nomeMuda');
    const quantidade = document.getElementById('quantidadeMuda');
    const data = document.getElementById('dataMuda');
    if (!nome || !quantidade || !data) {
        mostrarToast('⚠️ Preencha todos os campos obrigatórios!', '#c62828');
        return;
    }
    const nomeVal = nome.value.trim();
    const qtdVal = quantidade.value.trim();
    const dataVal = data.value;
    const obsVal = document.getElementById('obsMuda') ? document.getElementById('obsMuda').value.trim() : '';
    const catVal = document.getElementById('categoriaMuda') ? document.getElementById('categoriaMuda').value : 'hortalica';

    if (!nomeVal || !qtdVal || !dataVal) {
        mostrarToast('⚠️ Preencha todos os campos obrigatórios!', '#c62828');
        return;
    }

    const user = firebase.auth().currentUser;
    if (!user) {
        mostrarToast('⚠️ Faça login primeiro!', '#c62828');
        return;
    }

    const muda = {
        nome: nomeVal,
        quantidade: qtdVal,
        data: dataVal,
        obs: obsVal,
        categoria: catVal,
        criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection('usuarios').doc(user.uid).collection('mudas').add(muda)
        .then(() => {
            mostrarToast('✅ Muda salva na nuvem!', '#2e7d32');
            window.location.href = 'index.html';
        })
        .catch(erro => {
            mostrarToast('❌ Erro ao salvar: ' + erro.message, '#c62828');
        });
}

function carregarMudasFirestore() {
    const container = document.getElementById('lista-mudas');
    if (!container) return;

    const user = firebase.auth().currentUser;
    if (!user) {
        container.innerHTML = '<p class="empty-message">🔒 Faça login para ver suas mudas.</p>';
        return;
    }

    db.collection('usuarios').doc(user.uid).collection('mudas').orderBy('criadoEm', 'desc').get()
        .then(snapshot => {
            if (snapshot.empty) {
                container.innerHTML = '<p class="empty-message">🌱 Você ainda não tem mudas.</p>';
                return;
            }

            let html = '';
            snapshot.forEach(doc => {
                const m = doc.data();
                const cat = categorias[m.categoria] || '🌱';
                const hoje = new Date();
                hoje.setHours(0, 0, 0, 0);
                const dataPlantio = new Date(m.data);
                const diasDecorridos = Math.floor((hoje - dataPlantio) / (1000 * 60 * 60 * 24));
                const diasColheita = m.diasColheita || 90;
                const diasRestantes = Math.max(0, diasColheita - diasDecorridos);
                const progresso = Math.min(100, Math.round((diasDecorridos / diasColheita) * 100));
                let statusCor = '#2e7d32', statusTexto = '🌱 No prazo';
                if (diasRestantes <= 5 && diasRestantes > 0) {
                    statusCor = '#ff9800';
                    statusTexto = '⚠️ Próximo da colheita';
                }
                if (diasRestantes === 0) {
                    statusCor = '#c62828';
                    statusTexto = '🔴 COLHEITA HOJE!';
                }
                if (diasDecorridos > diasColheita) {
                    statusCor = '#c62828';
                    statusTexto = '❌ Colheita atrasada!';
                }

                html += `
                    <div class="card-item" style="border-left-color: ${statusCor};">
                        <div class="info">
                            <h3>${cat} ${m.nome}</h3>
                            <p>📦 ${m.quantidade} unidade(s)</p>
                            <p>📅 Plantio: ${m.data}</p>
                            <p style="color: ${statusCor}; font-weight: 600;">${statusTexto}</p>
                            ${m.obs ? `<p class="obs">📝 ${m.obs}</p>` : ''}
                            <div style="margin-top: 6px; background: #e0e0e0; border-radius: 20px; height: 10px; width: 100%;">
                                <div style="background: ${statusCor}; height: 10px; border-radius: 20px; width: ${progresso}%;"></div>
                            </div>
                            <p style="font-size: 0.8rem; color: #555;">${progresso}% do ciclo</p>
                        </div>
                        <div class="actions">
                            <button onclick="editarMuda('${doc.id}')">✏️ Editar</button>
                            <button onclick="removerMudaFirestore('${doc.id}')">❌ Remover</button>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
            atualizarContadoresFirestore();
        })
        .catch(erro => {
            mostrarToast('❌ Erro ao carregar: ' + erro.message, '#c62828');
        });
}

function removerMudaFirestore(id) {
    if (!confirm('Remover esta muda?')) return;
    const user = firebase.auth().currentUser;
    if (!user) return;
    db.collection('usuarios').doc(user.uid).collection('mudas').doc(id).delete()
        .then(() => {
            mostrarToast('🗑️ Muda removida', '#5d6d5d');
            carregarMudasFirestore();
        })
        .catch(erro => {
            mostrarToast('❌ Erro ao remover: ' + erro.message, '#c62828');
        });
}

function editarMuda(id) {
    window.location.href = `adicionarmuda.html?edit=${id}`;
}

// ============================================
// PLANTAÇÕES FIRESTORE
// ============================================

function salvarPlantacaoFirestore() {
    const nome = document.getElementById('nomePlanta');
    const quantidade = document.getElementById('quantidadePlanta');
    const data = document.getElementById('dataTransplante');
    if (!nome || !quantidade || !data) {
        mostrarToast('⚠️ Preencha todos os campos obrigatórios!', '#c62828');
        return;
    }
    const nomeVal = nome.value.trim();
    const qtdVal = quantidade.value.trim();
    const dataVal = data.value;
    const obsVal = document.getElementById('obsPlantacao') ? document.getElementById('obsPlantacao').value.trim() : '';
    const catVal = document.getElementById('categoriaPlanta') ? document.getElementById('categoriaPlanta').value : 'hortalica';

    if (!nomeVal || !qtdVal || !dataVal) {
        mostrarToast('⚠️ Preencha todos os campos obrigatórios!', '#c62828');
        return;
    }

    const user = firebase.auth().currentUser;
    if (!user) {
        mostrarToast('⚠️ Faça login primeiro!', '#c62828');
        return;
    }

    const plantacao = {
        nome: nomeVal,
        quantidade: qtdVal,
        data: dataVal,
        obs: obsVal,
        categoria: catVal,
        criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection('usuarios').doc(user.uid).collection('plantacoes').add(plantacao)
        .then(() => {
            mostrarToast('✅ Plantação salva na nuvem!', '#2e7d32');
            window.location.href = 'index.html';
        })
        .catch(erro => {
            mostrarToast('❌ Erro ao salvar: ' + erro.message, '#c62828');
        });
}

function carregarPlantacoesFirestore() {
    const container = document.getElementById('lista-plantacoes');
    if (!container) return;

    const user = firebase.auth().currentUser;
    if (!user) {
        container.innerHTML = '<p class="empty-message">🔒 Faça login para ver suas plantações.</p>';
        return;
    }

    db.collection('usuarios').doc(user.uid).collection('plantacoes').orderBy('criadoEm', 'desc').get()
        .then(snapshot => {
            if (snapshot.empty) {
                container.innerHTML = '<p class="empty-message">🌿 Você ainda não tem plantações.</p>';
                return;
            }

            let html = '';
            snapshot.forEach(doc => {
                const p = doc.data();
                const cat = categorias[p.categoria] || '🌿';
                html += `
                    <div class="card-item">
                        <div class="info">
                            <h3>${cat} ${p.nome}</h3>
                            <p>📦 ${p.quantidade} unidade(s)</p>
                            <p>📅 Transplante: ${p.data}</p>
                            ${p.obs ? `<p class="obs">📝 ${p.obs}</p>` : ''}
                        </div>
                        <div class="actions">
                            <button onclick="editarPlantacao('${doc.id}')">✏️ Editar</button>
                            <button onclick="removerPlantacaoFirestore('${doc.id}')">❌ Remover</button>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
            atualizarContadoresFirestore();
        })
        .catch(erro => {
            mostrarToast('❌ Erro ao carregar: ' + erro.message, '#c62828');
        });
}

function removerPlantacaoFirestore(id) {
    if (!confirm('Remover esta plantação?')) return;
    const user = firebase.auth().currentUser;
    if (!user) return;
    db.collection('usuarios').doc(user.uid).collection('plantacoes').doc(id).delete()
        .then(() => {
            mostrarToast('🗑️ Plantação removida', '#5d6d5d');
            carregarPlantacoesFirestore();
        })
        .catch(erro => {
            mostrarToast('❌ Erro ao remover: ' + erro.message, '#c62828');
        });
}

function editarPlantacao(id) {
    window.location.href = `adicionarplant.html?edit=${id}`;
}

// ============================================
// CONTADORES
// ============================================
function atualizarContadoresFirestore() {
    const user = firebase.auth().currentUser;
    if (!user) return;
    db.collection('usuarios').doc(user.uid).collection('mudas').get()
        .then(snapshot => {
            const cM = document.getElementById('contadorMudas');
            if (cM) cM.textContent = snapshot.size;
            const cMCard = document.getElementById('contadorMudasCard');
            if (cMCard) cMCard.textContent = snapshot.size;
        });
    db.collection('usuarios').doc(user.uid).collection('plantacoes').get()
        .then(snapshot => {
            const cP = document.getElementById('contadorPlantacoes');
            if (cP) cP.textContent = snapshot.size;
            const cPCard = document.getElementById('contadorPlantacoesCard');
            if (cPCard) cPCard.textContent = snapshot.size;
        });
}

// ============================================
// LIMPAR TUDO
// ============================================
function limparMudas() {
    if (!confirm('⚠️ Apagar TODAS as mudas?')) return;
    localStorage.removeItem('mudas');
    carregarMudasFirestore();
    mostrarToast('🧹 Mudas removidas', '#c62828');
}

function limparPlantacoes() {
    if (!confirm('⚠️ Apagar TODAS as plantações?')) return;
    localStorage.removeItem('plantacoes');
    carregarPlantacoesFirestore();
    mostrarToast('🧹 Plantações removidas', '#c62828');
}

// ============================================
// INICIALIZAÇÃO
// ============================================
window.onload = function() {
    calcularFaseLua();
    buscarClima();
    carregarPlantioRecomendado();
    mostrarDica();
    atualizarGrafico();
    carregarFinanceiro();
    atualizarGraficoFinanceiro();
};
