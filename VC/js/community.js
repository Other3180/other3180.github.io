const eggshell = document.querySelector('.loader')
eggshell.addEventListener('click', function() {
	eggshell.classList.remove('loader')
	eggshell.classList.add('loader-end')
})

const characters = [
{
  name: "Phoenix",
  id: "phoenix",
  imgSrc: 'img/community/com01.jpg' },
{
  name: "Fade",
  id: "fade",
  imgSrc: 'img/community/com02.jpg' },
{
  name: "Deadlock",
  id: "deadlock",
  imgSrc: 'img/community/com03.jpg' },
{
  name: "Reyna",
  id: "reyna",
  imgSrc: 'img/community/com04.jpg' },
{
  name: "Killjoy",
  id: "killjoy",
  imgSrc: 'img/community/com05.jpg' },
{
  name: "Sage",
  id: "sage",
  imgSrc: 'img/community/com06.jpg' },
{
  name: "Astra",
  id: "astra",
  imgSrc: 'img/community/com07.jpg' },
{
  name: "Viper",
  id: "viper",
  imgSrc: 'img/community/com08.jpg' },
{
  name: "Iso",
  id: "iso",
  imgSrc: 'img/community/com09.jpg' },
{
  name: "Skye",
  id: "skye",
  imgSrc: 'img/community/com10.jpg' },
{
  name: "Vyse",
  id: "vyse",
  imgSrc: 'img/community/com11.jpg' },
{
  name: "Gekko",
  id: "gekko",
  imgSrc: 'img/community/com12.jpg' },
{
  name: "KO",
  id: "Ko",
  imgSrc: 'img/community/com13.jpg' },
{
  name: "Sova",
  id: "sova",
  imgSrc: 'img/community/com14.jpg' },
{
  name: "Chamber",
  id: "chamber",
  imgSrc: 'img/community/com15.jpg' },
{
  name: "Brimstone",
  id: "brimstone",
  imgSrc: 'img/community/com16.jpg' },
{
  name: "Clove",
  id: "clove",
  imgSrc: 'img/community/com17.jpg' },
{
  name: "Jett",
  id: "jett",
  imgSrc: 'img/community/com18.jpg' },
{
  name: "Yoru",
  id: "yoru",
  imgSrc: 'img/community/com19.jpg' },
{
  name: "Cypher",
  id: "cypher",
  imgSrc: 'img/community/com20.jpg' },
{
  name: "Neon",
  id: "neon",
  imgSrc: 'img/community/com21.jpg' },
{
  name: "Raze",
  id: "raze",
  imgSrc: 'img/community/com22.jpg' },
{
  name: "Breach",
  id: "breach",
  imgSrc: 'img/community/com23.jpg' },
{
  name: "Omen",
  id: "omen",
  imgSrc: 'img/community/com24.jpg' },
{
  name: "Harbor",
  id: "harbor",
  imgSrc: 'img/community/com25.jpg' }];



characters.forEach(character => {
  let newCharacter = document.createElement('button');
  newCharacter.classList = 'character';
  newCharacter.id = character.id;
  newCharacter.rel = character.name;
  newCharacter.innerHTML = `
		<img class="character__img" src="${character.imgSrc}" />
		<p class="character__name">${character.name}</p>
	`;
  newCharacter.addEventListener('click', () => {
    if (document.querySelector('.character.active')) {
      document.querySelector('.character.active').classList.remove('active');
    }
    newCharacter.classList.add('active');
  });
  document.getElementById('selectContainer').appendChild(newCharacter);
});