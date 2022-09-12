const myRequest = "projetJson.json";

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    
    var pro = data;
    
    function affichage() {
      divProjet.innerHTML = "";

      let tech = new Set();

      for (const projects of pro) {
        var technos = projects.techno.replaceAll("|", " ");
        let html = `
          
        <div class="projetIndiv">
                <a class="essaiImg" href="${projects.picture1}">
                <img src="${projects.picture1}" alt="photo projet">
            </a>
            <div class="projText">
                <div class="idNom">
                    
                    <h2>${projects.name}</h2>
                </div>
                <div class="para">
                    <p>${projects.description}
                </div>
                <div class="history">
    <a class="liengit" href="${projects.git}"><p>Lien: ${projects.git}</p></a>
                    <p>Techno : ${technos}</p>
                </div>
            </div>
</div>

                `;

        divProjet.innerHTML += html;
      }
    }
    const divProjet = document.getElementById("projects");

    //affichage
    affichage();
  })
  .catch(console.error);



const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const element = document.querySelectorAll('span');
for(let i = 0; i<element.length; i++){
  element[i].style.transform ="rotate("+i*15+"deg)"
}
document.addEventListener('mousemove', function(e){
  text.style.left = e.pageX + 'px';
  text.style.top = e.pageY + 'px';
})