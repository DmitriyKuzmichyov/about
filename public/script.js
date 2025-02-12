function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => document.getElementById('content').innerHTML = data)
        .catch(error => console.error('Ошибка загрузки страницы:', error));
}

// Загрузить главную страницу по умолчанию
document.addEventListener("DOMContentLoaded", () => {
    loadPage('main');
});
