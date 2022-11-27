let count = 0

$("#games").click(function() {
  count = 0
  $("html,body").animate({
    scrollTop: $(".container").offset().top
  },
    'fast');
});

$("#home").click(function() {
  $("html,body").animate({
    scrollTop: $("body").offset().top
  },
    'fast');
});

function Loading() {
  count = 0
  appendDiv()
}

document.getElementById("contact").addEventListener('click', () => {
  c_bar = document.getElementById("contact-bar")

  if (c_bar.style.display !== "none") {
    c_bar.style.display = "none";
  }
  else {
    c_bar.style.display = "flex"
  }
  
})



window.addEventListener('scroll',()=>{
  if(window.scrollY + window.innerHeight>= 
    document.documentElement.scrollHeight){
    appendDiv();
    console.log(count)
  }
})


function Open() {
  var iframe = $("#if");
  iframe.attr("src", iframe.data("src")); 
}


function winOpen() {
  window.open("https://narrow.one/")
}


bt = document.getElementsByClassName('btn');

Array.from(bt).forEach(element => {
  element.addEventListener('click', () => {
    window.open("https://narrow.one/")
  })
})



cover = document.getElementsByClassName('game-cover')
Array.from(cover).forEach(element => {
  element.addEventListener('click', () => {
    info_page_updater()
    document.getElementById("info").style.height = "100%";
    document.getElementById('body').style.overflowY = "hidden"
  });
});

function closeNav() {
  document.getElementById("info").style.height = "0%";
  document.getElementById('body').style.overflowY = "scroll"
}

function info() {
  info_page_updater()
  document.getElementById("info").style.height = "100%";
  document.getElementById('body').style.overflowY = "hidden"
}

function appendDiv() {
  for (let step = 0; step < 4; step++){
    card_i = document.createElement('div');
    card_i.className = "card_item"
    card_in = document.createElement('div')
    card_in.className = "card_inner"
    game_c = document.createElement('div')
    game_c.className = "game-cover"
    game_c.setAttribute('onclick', "info()")
    r_n = document.createElement('div')
    r_n.className = "gm_name"
    r_n.innerText = "Lorem ipsum"
    rr_n = document.createElement('div')
    rr_n.className = "crt_name"
    rr_n.innerText = "ALien member"
    ply_btn = document.createElement('div')
    ply_btn.className = "play-button"
    bt = document.createElement('button')
    bt.className = 'btn'
    bt.setAttribute('onclick', "winOpen()")
    bt_d = document.createElement('div')
    bt.appendChild(bt_d)
    bt_d.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>'
    card_in.appendChild(game_c)
    card_in.appendChild(r_n)
    card_in.appendChild(rr_n)
    ply_btn.appendChild(bt)
    card_in.appendChild(ply_btn)
    card_i.appendChild(card_in)
    let lastd = document.getElementById('card_item');
    let parentDiv = lastd.parentNode;
    let lastdiv = document.getElementById('emptyd')
    parentDiv.insertBefore(card_i, lastdiv)
    card_i.style.display = "block"
    card_i.setAttribute('id', 'scroll-here')
    // console.log(card_i)
  }
}


document.getElementById('logo-ai').addEventListener('click', () => {
  window.open("https://www.instagram.com/")
})

document.getElementById('logo-at').addEventListener('click', () => {
  window.open("https://twitter.com/i/flow/login")
})

document.getElementById('logo-ag').addEventListener('click', () => {
  window.open("https://mail.google.com/mail")
})

cred_c = document.getElementById("credit-card")

document.getElementById("credits").addEventListener('click', () => {
  cred_c.style.display = "flex"
})


document.getElementById("cred-card-close").addEventListener('click', () => {
  cred_c.style.display = "none"
})



function info_page_updater() {
  const h_t = document.getElementById("heading-t")
  h_t.innerText = "NEW heading era"
}
