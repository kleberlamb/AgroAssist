// ============================================
// CONFIGURAÇÃO
// ============================================
const API_KEY = 'SUA_CHAVE_AQUI';
const CIDADE = 'Belo Horizonte';
const PAIS = 'BR';

// ============================================
// BANCO DE DADOS DAS PLANTAS
// ============================================
const plantasDB = {
    tomate: { nome: 'Tomate', diasColheita: 90, epoca: [8, 9, 10, 11, 12, 1, 2], categoria: 'frutifera' },
    alface: { nome: 'Alface', diasColheita: 60, epoca: [3, 4, 5, 6, 7, 8, 9], categoria: 'hortalica' },
    pimenta: { nome: 'Pimenta', diasColheita: 100, epoca: [9, 10, 11, 12, 1, 2, 3], categoria: 'frutifera' },
    couve: { nome: 'Couve', diasColheita: 75, epoca: [3, 4, 5, 6, 7, 8, 9], categoria: 'hortalica' },
    cebolinha: { nome: 'Cebolinha', diasColheita: 70, epoca: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], categoria: 'tempero' }
};

const categorias = {
    hortalica: '🥬 Hortaliça',
    frutifera: '🍅 Frutífera',
    tempero: '🌿 Tempero',
    grao: '🌾 Grão'
};

// ============================================
// TOAST
// ============================================
function mostrarToast(mensagem, cor = '#1e4a2b') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = mensagem;
    toast.style.background = cor;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
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
    document.getElementById('dica-do-dia').textContent = dica;
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
    document.getElementById('fase-nome').textContent = nome;
    document.getElementById('fase-recomendacao').textContent = recomendacao;
}

// ============================================
// 🌧️ CLIMA
// ============================================
function buscarClima() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CIDADE},${PAIS}&appid=${API_KEY}&units=metric&lang=pt_br`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('cidade-clima').textContent = data.name;
            document.getElementById('temperatura').textContent = Math.round(data.main.temp);
            document.getElementById('descricao-clima').textContent = data.weather[0].description;
            const chuva = data.rain ? data.rain['1h'] || data.rain['3h'] : 0;
            const alertaDiv = document.getElementById('alertas-clima');
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
            document.getElementById('cidade-clima').textContent = '--';
            document.getElementById('temperatura').textContent = '--';
            document.getElementById('descricao-clima').textContent = 'Não foi possível carregar o clima.';
        });
}

// ============================================
// 📅 PLANTIO RECOMENDADO
// ============================================
function carregarPlantioRecomendado() {
    const container = document.getElementById('lista-plantio');
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
// 📊 GRÁFICOS (Chart.js)
// ============================================
let graficoInstance = null;

function atualizarGrafico() {
    const mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    const ctx = document.getElementById('graficoMudas').getContext('2d');
    if (graficoInstance) {
        graficoInstance.destroy();
    }
    const contagem = {};
    mudas.forEach(m => {
        contagem[m.nome] = (contagem[m.nome] || 0) + parseInt(m.quantidade) || 0;
    });
    const labels = Object.keys(contagem);
    const data = Object.values(contagem);
    if (labels.length === 0) {
        graficoInstance = new Chart(ctx, {
            type: 'bar',
            data: { labels: ['Nenhuma muda'], datasets: [{ label: 'Quantidade', data: [0], backgroundColor: '#c8e0c8' }] },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
        return;
    }
    graficoInstance = new Chart(ctx, {
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
    const termo = document.getElementById('campoPesquisa').value.trim().toLowerCase();
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
// MUDAS (COM CATEGORIA E EDIÇÃO)
// ============================================
function salvarMuda() {
    const nome = document.getElementById('nomeMuda').value.trim();
    const quantidade = document.getElementById('quantidadeMuda').value.trim();
    const data = document.getElementById('dataMuda').value;
    const obs = document.getElementById('obsMuda').value.trim();
    const categoria = document.getElementById('categoriaMuda').value;

    if (!nome || !quantidade || !data) {
        mostrarToast('⚠️ Preencha todos os campos obrigatórios!', '#c62828');
        return;
    }

    const plantaInfo = Object.values(plantasDB).find(p => p.nome.toLowerCase() === nome.toLowerCase());
    const diasColheita = plantaInfo ? plantaInfo.diasColheita : 90;

    const dataPlantio = new Date(data);
    const dataColheita = new Date(dataPlantio);
    dataColheita.setDate(dataColheita.getDate() + diasColheita);
    const dataColheitaStr = dataColheita.toISOString().split('T')[0];

    let mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    const editIndex = document.getElementById('editIndexMuda')?.value;
    if (editIndex !== undefined && editIndex !== '') {
        mudas[editIndex] = { nome, quantidade, data, obs, categoria, diasColheita, dataColheita: dataColheitaStr };
        localStorage.setItem('mudas', JSON.stringify(mudas));
        mostrarToast('✅ Muda atualizada!', '#2e7d32');
    } else {
        mudas.push({ nome, quantidade, data, obs, categoria, diasColheita, dataColheita: dataColheitaStr });
        localStorage.setItem('mudas', JSON.stringify(mudas));
        mostrarToast('✅ Muda cadastrada!', '#2e7d32');
    }
    setTimeout(() => window.location.href = 'index.html', 600);
}

function carregarMudas() {
    const container = document.getElementById('lista-mudas');
    if (!container) return;
    let mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    const contador = document.getElementById('contadorMudas');
    if (contador) contador.textContent = mudas.length;

    if (mudas.length === 0) {
        container.innerHTML = '<p class="empty-message">🌱 Você ainda não tem mudas.</p>';
        return;
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    let html = '';
    mudas.forEach((m, i) => {
        const dataPlantio = new Date(m.data);
        const dataColheita = new Date(m.dataColheita);
        const diasDecorridos = Math.floor((hoje - dataPlantio) / (1000 * 60 * 60 * 24));
        const diasRestantes = Math.max(0, m.diasColheita - diasDecorridos);
        const progresso = Math.min(100, Math.round((diasDecorridos / m.diasColheita) * 100));
        const cat = categorias[m.categoria] || '🌱';
        let statusCor = '#2e7d32';
        let statusTexto = '🌱 No prazo';
        if (diasRestantes <= 5 && diasRestantes > 0) {
            statusCor = '#ff9800';
            statusTexto = '⚠️ Próximo da colheita';
        }
        if (diasRestantes === 0) {
            statusCor = '#c62828';
            statusTexto = '🔴 COLHEITA HOJE!';
        }
        if (diasDecorridos > m.diasColheita) {
            statusCor = '#c62828';
            statusTexto = '❌ Colheita atrasada!';
        }

        html += `
            <div class="card-item" style="border-left-color: ${statusCor};">
                <div class="info">
                    <h3>${cat} ${m.nome}</h3>
                    <p>📦 ${m.quantidade} unidade(s)</p>
                    <p>📅 Plantio: ${m.data}</p>
                    <p>🍅 Colheita prevista: ${m.dataColheita}</p>
                    <p style="color: ${statusCor}; font-weight: 600;">${statusTexto}</p>
                    ${m.obs ? `<p class="obs">📝 ${m.obs}</p>` : ''}
                    <div style="margin-top: 6px; background: #e0e0e0; border-radius: 20px; height: 10px; width: 100%;">
                        <div style="background: ${statusCor}; height: 10px; border-radius: 20px; width: ${progresso}%;"></div>
                    </div>
                    <p style="font-size: 0.8rem; color: #555;">${progresso}% do ciclo</p>
                </div>
                <div class="actions">
                    <button onclick="editarMuda(${i})">✏️ Editar</button>
                    <button onclick="removerMuda(${i})">❌ Remover</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function editarMuda(index) {
    const mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    const m = mudas[index];
    if (!m) return;
    // Redireciona para o formulário com os dados preenchidos
    const url = `adicionarmuda.html?edit=${index}&nome=${encodeURIComponent(m.nome)}&quantidade=${m.quantidade}&data=${m.data}&obs=${encodeURIComponent(m.obs || '')}&categoria=${m.categoria || ''}`;
    window.location.href = url;
}

// ============================================
// PLANTAÇÕES (COM CATEGORIA E EDIÇÃO)
// ============================================
function salvarPlantacao() {
    const nome = document.getElementById('nomePlanta').value.trim();
    const quantidade = document.getElementById('quantidadePlanta').value.trim();
    const data = document.getElementById('dataTransplante').value;
    const obs = document.getElementById('obsPlantacao').value.trim();
    const categoria = document.getElementById('categoriaPlanta').value;

    if (!nome || !quantidade || !data) {
        mostrarToast('⚠️ Preencha todos os campos obrigatórios!', '#c62828');
        return;
    }

    let plantacoes = JSON.parse(localStorage.getItem('plantacoes')) || [];
    const editIndex = document.getElementById('editIndexPlantacao')?.value;
    if (editIndex !== undefined && editIndex !== '') {
        plantacoes[editIndex] = { nome, quantidade, data, obs, categoria };
        localStorage.setItem('plantacoes', JSON.stringify(plantacoes));
        mostrarToast('✅ Plantação atualizada!', '#2e7d32');
    } else {
        plantacoes.push({ nome, quantidade, data, obs, categoria });
        localStorage.setItem('plantacoes', JSON.stringify(plantacoes));
        mostrarToast('✅ Plantação cadastrada!', '#2e7d32');
    }
    setTimeout(() => window.location.href = 'index.html', 600);
}

function carregarPlantacoes() {
    const container = document.getElementById('lista-plantacoes');
    if (!container) return;
    let plantacoes = JSON.parse(localStorage.getItem('plantacoes')) || [];
    const contador = document.getElementById('contadorPlantacoes');
    if (contador) contador.textContent = plantacoes.length;

    if (plantacoes.length === 0) {
        container.innerHTML = '<p class="empty-message">🌿 Você ainda não tem plantações.</p>';
        return;
    }

    let html = '';
    plantacoes.forEach((p, i) => {
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
                    <button onclick="editarPlantacao(${i})">✏️ Editar</button>
                    <button onclick="removerPlantacao(${i})">❌ Remover</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function editarPlantacao(index) {
    const plantacoes = JSON.parse(localStorage.getItem('plantacoes')) || [];
    const p = plantacoes[index];
    if (!p) return;
    const url = `adicionarplant.html?edit=${index}&nome=${encodeURIComponent(p.nome)}&quantidade=${p.quantidade}&data=${p.data}&obs=${encodeURIComponent(p.obs || '')}&categoria=${p.categoria || ''}`;
    window.location.href = url;
}

// ============================================
// REMOVER FUNÇÕES
// ============================================
function removerMuda(index) {
    if (!confirm('Remover esta muda?')) return;
    let mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    mudas.splice(index, 1);
    localStorage.setItem('mudas', JSON.stringify(mudas));
    carregarMudas();
    atualizarContadores();
    atualizarGrafico();
    mostrarToast('🗑️ Muda removida', '#5d6d5d');
}

function removerPlantacao(index) {
    if (!confirm('Remover esta plantação?')) return;
    let plantacoes = JSON.parse(localStorage.getItem('plantacoes')) || [];
    plantacoes.splice(index, 1);
    localStorage.setItem('plantacoes', JSON.stringify(plantacoes));
    carregarPlantacoes();
    atualizarContadores();
    mostrarToast('🗑️ Plantação removida', '#5d6d5d');
}

function limparMudas() {
    if (!confirm('⚠️ Apagar TODAS as mudas?')) return;
    localStorage.removeItem('mudas');
    carregarMudas();
    atualizarContadores();
    atualizarGrafico();
    mostrarToast('🧹 Mudas removidas', '#c62828');
}

function limparPlantacoes() {
    if (!confirm('⚠️ Apagar TODAS as plantações?')) return;
    localStorage.removeItem('plantacoes');
    carregarPlantacoes();
    atualizarContadores();
    mostrarToast('🧹 Plantações removidas', '#c62828');
}

function atualizarContadores() {
    const mudas = JSON.parse(localStorage.getItem('mudas')) || [];
    const plantacoes = JSON.parse(localStorage.getItem('plantacoes')) || [];
    const cM = document.getElementById('contadorMudas');
    const cP = document.getElementById('contadorPlantacoes');
    if (cM) cM.textContent = mudas.length;
    if (cP) cP.textContent = plantacoes.length;
}

// ============================================
// INICIALIZAÇÃO
// ============================================
window.onload = function() {
    carregarMudas();
    carregarPlantacoes();
    calcularFaseLua();
    buscarClima();
    carregarPlantioRecomendado();
    mostrarDica();
    atualizarGrafico();
};