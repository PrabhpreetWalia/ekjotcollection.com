const necklace = document.querySelector("#necklace--card")
const choker = document.querySelector("#choker--card")
const earingTikka = document.querySelector("#earing-tikka--card")
const earings = document.querySelector("#earings--card")
const anklets = document.querySelector("#anklets--card")


const uniqueNecklaceCout = 1
const uniqueEaringsCount = 1
const necklaceCount = 21
const chokerCount = 3
const earingTikkaCount = 13
const earingsCount = 6
const ankletsCount = 1


for(var i = 1; i <= uniqueNecklaceCout; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/jewellery/necklace/2 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">necklace</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $80<span class="cut-cost">$110</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    necklace.innerHTML += code;
}


for(var i = 1; i <= necklaceCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/jewellery/necklace/1 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">necklace</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $60<span class="cut-cost">$80</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    necklace.innerHTML += code;
}

for(var i = 1; i <= chokerCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/jewellery/choker/1 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">choker Set</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $60<span class="cut-cost">$80</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    choker.innerHTML += code;
}

for(var i = 1; i <= earingTikkaCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/jewellery/earingTikka/1 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">earingTikka</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $30<span class="cut-cost">$60</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    earingTikka.innerHTML += code;
}

for(var i = 1; i <= earingsCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/jewellery/earings/1 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">earings</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $20<span class="cut-cost">$40</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    earings.innerHTML += code;
}

for(var i = 1; i <= uniqueEaringsCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/jewellery/earings/2 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">earings</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $10<span class="cut-cost">$25</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    earings.innerHTML += code;
}


for(var i = 1; i <= ankletsCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/jewellery/anklets/1 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">anklets</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $15<span class="cut-cost">$25</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    anklets.innerHTML += code;
}