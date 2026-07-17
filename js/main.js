// ============================================================
// HALO — interactions générales
// nav mobile · reveal au scroll · formulaire d'audit
// ============================================================
(function () {
  "use strict";

  // ---- Endpoint Formspree (à remplacer par ton ID réel) --------------
  // Tant que l'ID contient "REMPLACER", le formulaire bascule sur mailto.
  var FORMSPREE_ENDPOINT = "https://formspree.io/f/REMPLACER_ICI";
  var CONTACT_EMAIL = "halo.contact@gmail.com";

  // ---- Année du footer ----
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // ---- Menu mobile ----
  var burger = document.querySelector(".nav__burger");
  var links = document.querySelector(".nav__links");
  if (burger && links) {
    var toggle = function (force) {
      var open = force != null ? force : burger.getAttribute("aria-expanded") !== "true";
      burger.setAttribute("aria-expanded", String(open));
      links.style.display = open ? "flex" : "";
      links.style.flexDirection = "column";
      links.style.position = "absolute";
      links.style.top = "64px";
      links.style.right = "16px";
      links.style.background = "var(--surface)";
      links.style.border = "1px solid var(--border)";
      links.style.borderRadius = "14px";
      links.style.padding = "16px 22px";
      links.style.gap = "14px";
      links.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
      if (!open) links.style.cssText = "";
    };
    burger.addEventListener("click", function () { toggle(); });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") toggle(false);
    });
  }

  // ---- Reveal au scroll (respecte prefers-reduced-motion via CSS) ----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---- Ambiance nuit étoilée du hero (champ d'étoiles + étoiles filantes) ----
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var starField = document.getElementById("hero-stars");

  if (starField) {
    // Champ d'étoiles fixes qui scintillent lentement
    var STAR_COUNT = 46;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < STAR_COUNT; i++) {
      var s = document.createElement("span");
      s.className = "hero__star";
      var size = (Math.random() * 1.6 + 0.8).toFixed(2);
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = (Math.random() * 100).toFixed(2) + "%";
      s.style.top = (Math.random() * 100).toFixed(2) + "%";
      s.style.setProperty("--tw", (Math.random() * 2.5 + 2.5).toFixed(2) + "s");
      s.style.animationDelay = (Math.random() * 3).toFixed(2) + "s";
      if (Math.random() > 0.82) s.style.background = "#F0B429"; // quelques étoiles dorées
      frag.appendChild(s);
    }
    starField.appendChild(frag);

    // Étoiles filantes à intervalles aléatoires (désactivées en reduced-motion)
    if (!reduce) {
      var spawnShooting = function () {
        var star = document.createElement("div");
        star.className = "shooting";
        var angle = 18 + Math.random() * 24;            // diagonale douce vers le bas-droite
        star.style.setProperty("--angle", angle + "deg");
        star.style.setProperty("--len", (440 + Math.random() * 220).toFixed(0) + "px");
        star.style.setProperty("--dur", (1.2 + Math.random() * 0.8).toFixed(2) + "s");
        star.style.left = (Math.random() * 55 - 5).toFixed(1) + "%";
        star.style.top = (Math.random() * 45).toFixed(1) + "%";
        starField.appendChild(star);
        star.addEventListener("animationend", function () { star.remove(); });
        // prochaine étoile filante dans 3 à 6 s
        setTimeout(spawnShooting, 3000 + Math.random() * 3000);
      };
      setTimeout(spawnShooting, 1500 + Math.random() * 2000);
    }
  }

  // ---- Formulaire d'audit ----
  var form = document.getElementById("audit-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = {
        entreprise: form.entreprise.value.trim(),
        ville: form.ville.value.trim(),
        email: form.email.value.trim(),
        telephone: form.telephone.value.trim(),
      };

      var showSuccess = function () { form.classList.add("is-sent"); };

      var fallbackMailto = function () {
        var subject = "Demande d'audit gratuit — " + data.entreprise;
        var body =
          "Bonjour,\n\nJe souhaite recevoir un audit gratuit de ma fiche Google.\n\n" +
          "Entreprise : " + data.entreprise + "\n" +
          "Ville : " + data.ville + "\n" +
          "Email : " + data.email + "\n" +
          "Téléphone : " + (data.telephone || "—") + "\n\nMerci !";
        window.location.href =
          "mailto:" + CONTACT_EMAIL +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);
        showSuccess();
      };

      // Pas d'endpoint configuré → repli mailto direct
      if (FORMSPREE_ENDPOINT.indexOf("REMPLACER") !== -1) {
        fallbackMailto();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Envoi…"; }

      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (res) {
          if (res.ok) { showSuccess(); }
          else { fallbackMailto(); }
        })
        .catch(function () { fallbackMailto(); });
    });
  }
})();
