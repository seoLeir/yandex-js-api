ymaps.ready(function () {
    ymaps.option.Manager.set({
        // Выбор светлой или темной темы в зависимости от системных настроек
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    });

    init();
});
