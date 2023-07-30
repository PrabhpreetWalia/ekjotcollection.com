const punjabiJutti = document.querySelector("#punjabi-jutti--card")



const punjabiJuttiCount = 17



for(var i = 1; i <= punjabiJuttiCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/jutti/1 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">Jutti</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $30<span class="cut-cost">$50</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    punjabiJutti.innerHTML += code;
}