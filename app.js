const g = G$('Heide', 'Queen', 'en');

$('#login').click(() => {
  const lang = $('#lang').val();
  g.setLang(lang).login($('#greeting'), true);
});
