var skills = {
  "prog-languages": [
    ["HTML", 9],
    ["CSS, Sass", 9],
    ["JavaScript", 9],
    ["TypeScript", 8],
    ["Go", 7],
    ["Python", 6],
    ["R", 4],
  ],
  frontend: [
    ["Svelte", 8],
    ["React", 7],
    ["Polymer", 5],
    ["Web components", 5],
    ["Vue", 3],
    ["Angular", 2],
  ],
  backend: [
    ["Go: Gin, Chi", 8],
    ["Node.js: Express, Koa", 6],
    ["Python: Django, Flask", 4],
  ],
  cloud: [
    ["Cloud Functions", 8],
    ["Firebase", 7],
    ["Docker, Kubernetes", 4],
  ],
  database: [
    ["Cloud Datastore", 8],
    ["Cloud Firestore", 8],
    ["MongoDB", 6],
    ["SQL", 6],
    ["Cassandra", 4],
    ["Neo4J", 2],
  ],
  tools: [
    ["Git", 7],
    ["Rollup, Webpack, Gulp", 6],
  ],
  apis: [
    ["Stripe (payments)", 5],
    ["Algolia (search)", 4],
    ["SendGrid (email)", 4],
  ],

  languages: [
    ["English", 10],
    ["Spanish - Español", 10],
    ["Chinese - 中文", 3],
    ["Thai - ไทย", 2],
  ],
};

for (var k in skills) {
  var listSkills = skills[k];
  var skillList = document.getElementById(k + "-skill-list");

  for (var i = 0; i < listSkills.length; i++) {
    var skill = listSkills[i];
    var li = document.createElement("li");
    li.className = "skill";

    var spanSkillName = document.createElement("span");
    spanSkillName.className = "skill-name";
    spanSkillName.innerText = skill[0];
    li.appendChild(spanSkillName);

    var spanSkillLevel = document.createElement("span");
    spanSkillLevel.className = "skill-level";
    spanSkillLevel.setAttribute("title", skill[1]);
    var skillLevel = skill[1] / 2;
    for (var j = 0; j < 5; j++) {
      var circleSpan = document.createElement("span");
      circleSpan.className =
        skillLevel >= j + 1 ? "f" : skillLevel - j > 0 ? "h" : "e";
      spanSkillLevel.appendChild(circleSpan);
    }
    li.appendChild(spanSkillLevel);
    skillList.appendChild(li);
  }
}

var s = [")com", "^gmail.", "&@", "#utn", "_fgv."]
  .map(function (s) {
    return s.slice(1);
  })
  .reverse()
  .join("");
var e = document.getElementById("e");
e.setAttribute("href", "mailto:" + s);
e.innerText = s;
