const themeButton = document.getElementById("themeButton");
const languageButton = document.getElementById("languageButton");

let finnishMode = false;

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

languageButton.addEventListener("click", () => {
  finnishMode = !finnishMode;

  if (finnishMode) {
    languageButton.textContent = "EN";

    document.querySelector('a[href="#about"]').textContent = "Minusta";
    document.querySelector('a[href="#skills"]').textContent = "Taidot";
    document.querySelector('a[href="#projects"]').textContent = "Projektit";
    document.querySelector('a[href="#experience"]').textContent = "Työkokemus";
    document.querySelector('a[href="#education"]').textContent = "Koulutus";
    document.querySelector('a[href="#contact"]').textContent = "Yhteys";

    document.querySelector("#home .eyebrow").textContent =
      "OHJELMISTOKEHITTÄJÄ · SUOMI";

    document.querySelector("#home h1").innerHTML =
      "Aziz Rahman<br><span>Noyan</span>";

    document.querySelector(".hero-text").textContent =
      "Rakennan käytännöllisiä verkko- ja ohjelmistoprojekteja. Keskityn selkeisiin käyttöliittymiin, hyödyllisiin ominaisuuksiin ja jatkuvaan oppimiseen.";

    document.querySelector(".hero-buttons .primary").textContent =
      "Katso projektit";

    document.querySelector(".hero-buttons .button:not(.primary)").textContent =
      "Lataa CV";

    document.querySelector("#about .eyebrow").textContent =
      "01 · MINUSTA";

    document.querySelector("#about h2").textContent =
      "Kehitän osaamistani oikeiden projektien avulla.";

    document.querySelector("#about .two-column p:first-child").textContent =
      "Olen Suomessa opiskeleva ohjelmistokehittäjä. Opintoni yhdistyvät käytännön työkokemukseen ja omiin ohjelmistoprojekteihini.";

    document.querySelector("#about .two-column p:last-child").textContent =
      "Pidän sovellusten rakentamisesta, tietokannoista, verkkosivuista ja projektien kehittämisestä vaihe vaiheelta.";

    document.querySelector("#skills .eyebrow").textContent =
      "02 · TAIDOT";

    document.querySelector("#skills h2").textContent =
      "Teknologiat, joita käytän.";

    document.querySelector("#projects .eyebrow").textContent =
      "03 · PROJEKTIT";

    document.querySelector("#projects h2").textContent =
      "Valittuja projekteja.";

    document.querySelector("#experience .eyebrow").textContent =
      "04 · TYÖKOKEMUS";

    document.querySelector("#experience h2").textContent =
      "Työ- ja käytännön kokemus.";

    document.querySelector("#education .eyebrow").textContent =
      "05 · KOULUTUS";

    document.querySelector("#education h2").textContent =
      "Koulutus.";

    document.querySelector(".career .eyebrow").textContent =
      "06 · URA";

    document.querySelector(".career h2").textContent =
      "Oppimisesta rakentamiseen.";

    document.querySelector(".career .large-text").textContent =
      "Tavoitteeni on kasvaa ammatilliseksi ohjelmistokehittäjäksi rakentamalla oikeita sovelluksia, vahvistamalla teknistä osaamistani ja hankkimalla lisää työkokemusta Suomessa.";

    document.querySelector("#contact .eyebrow").textContent =
      "07 · YHTEYS";

    document.querySelector("#contact h2").textContent =
      "Rakennetaan jotain hyödyllistä.";

    document.querySelector("#contact p:not(.eyebrow)").textContent =
      "Ammatilliset yhteystietoni lisätään tähän.";

  } else {
    location.reload();
  }
});
