document.getElementById('ativaExtensao').addEventListener('click', () => {
    chrome.storage.sync.get('protanopia', (data) => {
        const estadoAtual = data.protanopia || 'normal';
        const filtroAtivado = estadoAtual === 'normal' ? 'protanopia' : 'normal';

        chrome.storage.sync.set({ protanopia: filtroAtivado }, () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { type: 'updateContent' });
            });

            const button = document.getElementById('ativaExtensao');
            if (filtroAtivado === 'protanopia') {
                button.style.backgroundColor = '#a9a9a9'; 
                button.style.color = '#262626'; 
                button.textContent = 'Desativar Extensão';
            } else {
                button.style.backgroundColor = '#262626'; 
                button.style.color = '#dddddd';  
                button.textContent = 'Ativar Extensão';
            }
        });
    });
});