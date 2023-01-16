let myNav1 = document.getElementById("header");
let myNav2 = document.getElementById("menu-list1");

window.onscroll = function () {

    if (window.scrollY > 20) {

        myNav1.classList.add("scrolled")
        myNav2.classList.add("scrolled")
    } else {
        myNav1.classList.remove("scrolled")
        myNav2.classList.remove("scrolled")
    }

}

// Open Photo Lightboxes
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function openModal1() {
    document.getElementById("myModal1").style.display = "block";
}
function openModal2() {
    document.getElementById("myModal2").style.display = "block";
}
function openModal3() {
    document.getElementById("myModal3").style.display = "block";
}

function openModal4() {
    document.getElementById("myModal4").style.display = "block";
}

function openModal5() {
    document.getElementById("myModal5").style.display = "block";
}
function openModal6() {
    document.getElementById("myModal6").style.display = "block";
}
function openModal7() {
    document.getElementById("myModal7").style.display = "block";
}

function openModal8() {
    document.getElementById("myModal8").style.display = "block";
}

function openModal9() {
    document.getElementById("myModal9").style.display = "block";
}
function openModal10() {
    document.getElementById("myModal10").style.display = "block";
}
function openModal11() {
    document.getElementById("myModal11").style.display = "block";
}
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal1").style.display = "none";
    document.getElementById("myModal2").style.display = "none";
    document.getElementById("myModal3").style.display = "none";
    document.getElementById("myModal4").style.display = "none";
    document.getElementById("myModal5").style.display = "none";
    document.getElementById("myModal6").style.display = "none";
    document.getElementById("myModal7").style.display = "none";
    document.getElementById("myModal8").style.display = "none";
    document.getElementById("myModal9").style.display = "none";
    document.getElementById("myModal10").style.display = "none";
    document.getElementById("myModal11").style.display = "none";
};

// ---------------- DATE CARDS
let concerts = JSON.parse(concertDates);

function printCards() {
    for (let concert of concerts) {
        document.getElementById("cardDate").innerHTML += `
        <div class="card m-2 p-4" style="width: 22rem;">
                    <div class="card-header no-border">
                        <h5 class="card-title"></h5>
                    </div>
                    <div class="card-body pt-0">
                        <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-warning">
                                    <span class="widget-49-date-day">${concert.day}</span>
                                    <span class="widget-49-date-month">${concert.month}</span>
                                </div>
                                <div class="widget-49-meeting-info">
                                    <span class="widget-49-pro-title">${concert.type}</span>
                                    <span class="widget-49-meeting-time">${concert.time}</span>
                                </div>
                            </div>
                            <ul class="widget-49-meeting-points">
                                <li class="widget-49-meeting-item"><span>${concert.ensemble}</span></li>
                                <li class="widget-49-meeting-item"><span>${concert.venue}</span></li>
                                <li class="widget-49-meeting-item"><span>${concert.name}</span></li>
                                <li class="widget-49-meeting-item"><a href= "${concert.address}" target="_blank"><span>Event Website and Programme</span></a></li>


                            </ul>
                        </div>
                    </div>
                </div>`;
    }
}

printCards();

// Media Querry for the hero image
let myMediaQuery = window.matchMedia('(min-width: 600px)');

function widthChangeCallback(myMediaQuery) {
    if (myMediaQuery.matches) {
        document.getElementById("img-bg").style.display = "block";
        document.getElementById("img-bg2").style.display = "none";
    } else if ('(max-width: 600px)') {
        document.getElementById("img-bg").style.display = "none";
        document.getElementById("img-bg2").style.display = "block";
    }
}

myMediaQuery.addEventListener('change', widthChangeCallback);
widthChangeCallback(myMediaQuery);



//--------------Scroll to top, when page refreshed
history.scrollRestoration = 'manual';


// ------------ Collapse mobile menu by clicking on link
const navLinks = document.querySelectorAll('.nav-item');
let menuCollapse = document.getElementsByClassName('navbar-collapse');

function bsCollapse() {
    let navi = document.getElementById("navbarSupportedContent");
    navi.classList.remove("show");

};
navLinks.forEach((i) => {
    i.addEventListener('click', bsCollapse)
});
