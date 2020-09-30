// Add your code here!



let css_link = document.createElement("LINK");
css_link.rel = 'stylesheet';
css_link.href = 'styles.css';
document.head.appendChild(css_link);

let main = document.getElementsByTagName("main")

let title = document.createElement("H1");
title.innerText = "The best How I Met Your Mother episode (according to fans)";
main[0].appendChild(title);


let p_intro = document.createElement("P");
p_intro.innerText = " As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…"
main[0].appendChild(p_intro);

let main_h2 = document.createElement("H2");
main_h2.innerText = "The Slap Bet (Season 2, Episode 9)"
main[0].appendChild(main_h2);

let p_imdb = document.createElement("P");
p_imdb.innerText = "IMDB Rating: 9.5"
main[0].appendChild(p_imdb);

let rSparkles = document.createElement("IMG");
rSparkles.src = "images/robin-sparkles.jpg";
rSparkles.alt = "Robin Sparkles";
main[0].appendChild(rSparkles);

let p_1 = document.createElement("P");
p_1.innerText = `In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.`
main[0].appendChild(p_1);


let p_2 = document.createElement("P");
p_2.innerText = `In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).`
main[0].appendChild(p_2);

let src_link = document.createElement("A");
src_link.href = `https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/`
src_link.innerText = 'Source'
main[0].appendChild(src_link);



