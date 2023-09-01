
//TODO: creating webpage from bootstrap and fetch()

const api = fetch("https://restcountries.com/v2/all");

api.then((data) => data.json()).then((data1) => {

    for (let i = 0; i < data1.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = `<div class="row row - cols - 1 row - cols - md - 2 g - 4">
            <div div class="col" >
                <div class="card">
                    <img src="${data1[i].flags.svg}" class="card-img-top" alt="flag" />
                    <div class="card-body">
                        <h3 class="card-title">${data1[i].name}</h3>
                        <p class="card-text">
                        Capital : ${data1[i].capital}
                        </p>
                        <p class="card-text">
                          Region : ${data1[i].region}
                        </p>
                        <p class="card-text">
                            SubRegion : ${data1[i].subregion}
                        </p>
                        <p class="card-text">
                            Population : ${data1[i].population}
                        </p>
                    </div>
                </div>
			</div >
		</div >
`
        document.body.append(div);
    }
});