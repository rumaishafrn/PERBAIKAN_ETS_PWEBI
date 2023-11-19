var API_req = new XMLHttpRequest();

API_req.open('GET', 'https://api-berita-indonesia.vercel.app/antara/politik/', true);

API_req.onload = function() {

    if (API_req.status === 200){

        var data = JSON.parse(API_req.responseText);

        console.log(data);

        const kepala = document.getElementById('headernya');
        const badan = document.getElementById('isi');

        if (kepala){
            kepala.innerHTML = `

                <nav class="navbar" style= "background-color :#FAFAFA; height: 70px" >

                    <div class="container" style="justify-content: space-between; display: flex;">

                        <a class="navbar-logo" href="${data.data.link}">
                            <img src="${data.data.image}" alt="logoantar" width="250" height="40" class="ini_logonya">
                        </a>

                        <h5 class="politik" style= "color: red">${data.data.title}</h5>

                        <span>
                            ${data.data.description}
                        </span>

                    </div>
                </nav>
            `;
        }

        if (badan){

            for (let index = 0; index < data.data.posts.length; index++){

                const item = data.data.posts[index];

                console.log(item.thumbnail);

                const card = document.createElement('div');

                card.className = "col-md-4";
                card.innerHTML = `

                    <div class="card" style="width: 400px; height: 600px; box-shadow: 0px 5px 10px 1px #D3D3D3; padding: 30px; margin-bottom: 30px"">
                       
                        <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">

                        <div class="body_kartu" style= "margin-top : 10px;">
                            <h5 class="judul_kartu">${item.title}</h5>
                            <p class="text_kartu">${item.description}</p>
                            <a href="${item.link}" class="btn btn-primary" style="background-color: #ED1C24; width: 330px; outline: none; margin-bottom: 30px">Lihat Selengkapnya</a>
                        </div>

                    </div>
                `;

                badan.appendChild(card);
            }
        }

    }
};

API_req.send();