const bangles = document.querySelector("#bangles--card")
const others = document.querySelector("#others--card")

const uniqueBanglesCount = 1
const uniqueOthersCount = 2
const banglesCount = 5
const othersCount = 7


for(var i = 1; i <= uniqueBanglesCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/accessories/bangles/2 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">bangles</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $20<span class="cut-cost">$40</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    bangles.innerHTML += code;
}


for(var i = 1; i <= banglesCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/accessories/bangles/1 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">bangles</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $40<span class="cut-cost">$60</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    bangles.innerHTML += code;
}

for(var i = 1; i <= uniqueOthersCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/accessories/others/2 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">others <br> (2 pieces)</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $5<span class="cut-cost">$10</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    others.innerHTML += code;
}


for(var i = 1; i <= othersCount; i++){

    var code = `
    <div class="card fade-up">
            <div class="card--img"><img loading="lazy" decoding="async" src="/accessories/others/1 (${i}).jpeg" alt=""></div>
            <div class="card--desc">
                <div class="title">others</div>
                <div class="cut-cost"></div>
                <div class="cost">Price: $5<span class="cut-cost">$10</span></div>
            </div>
            <div class="card--sale">sale</div>
        </div>
    `
    others.innerHTML += code;
}
