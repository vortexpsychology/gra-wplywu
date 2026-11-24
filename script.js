const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const previews = {
  1: 'Przyjrzymy się temu, czym jest manipulacja, czym różni się od zwykłego wpływu i dlaczego warto analizować powtarzalne zachowania zamiast wyciągać wnioski po jednej rozmowie.',
  2: 'Poznasz podstawowe mechanizmy wpływu społecznego, takie jak presja grupy, autorytet, wzajemność i niedostępność — wraz z przykładami i sposobami krytycznego myślenia.',
  3: 'Rozdział wyjaśni różnicę między zdrową odpowiedzialnością za swoje zachowanie a poczuciem winy wykorzystywanym do wymuszania decyzji.',
  4: 'Omówimy podważanie czyjejś pamięci i oceny sytuacji, a także sposoby zapisywania faktów, szukania perspektywy i dbania o własne poczucie rzeczywistości.',
  5: 'Zastanowimy się, kiedy cisza jest potrzebną przerwą, a kiedy staje się powtarzalnym sposobem karania lub wywierania presji.',
  6: 'Skupimy się na rozpoznawaniu granic, zgodzie, konsekwencji i tym, jak reagować na zachowania, które regularnie naruszają Twój komfort.',
  7: 'Przyjrzymy się temu, dlaczego odmawianie bywa trudne i jak odróżnić realne zobowiązanie od presji opartej na powinności.',
  8: 'Przykłady z przyjaźni, rodziny i związków pokażą, jak rozmawiać o potrzebach i rozpoznawać nierównowagę w relacjach.',
  9: 'Rozdział dotyczy konformizmu, lęku przed oceną i sposobów zachowania własnego zdania bez niepotrzebnego konfliktu.',
  10: 'Praktyczne sposoby formułowania granic: krótko, spokojnie, konkretnie i bez konieczności niekończącego się usprawiedliwiania.',
  11: 'Odbudowywanie zaufania do własnych decyzji przez refleksję, sprawdzanie faktów i uczenie się na doświadczeniach.',
  12: 'Podsumowanie: jak korzystać z wiedzy o wpływie, nie popadając w podejrzliwość i budując relacje oparte na szacunku.'
};
const detail = document.getElementById('chapter-detail');
document.querySelectorAll('.chapter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.chapter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const n = button.dataset.chapter;
    const title = button.querySelector('b').textContent;
    detail.innerHTML = `<span class="detail-kicker">ROZDZIAŁ ${String(n).padStart(2,'0')} — ZAPOWIEDŹ</span><p><b>${title}.</b> ${previews[n]}</p>`;
  });
});
