$(document).ready(() => {
  //getJSONData();
  ajaxData();
})

function getJSONData() {
  $.getJSON("team.json", (data) => {
    $.each(data.members, (index, value) => {
      $("div#team").append(`<h2>${value.name}</h2>`);
      $("div#team").append(`<h5>${value.position}</h5>`);
      $("div#team").append(`<p>${value.bio}</p>`);
    });
  });
}

function ajaxData() {
  $.ajax({
    url: "team.json",
    type: "GET",
    beforeSend: ()=> {
      $("div#team").html("Loading...");
    },
    error: (error)=> {
      $("div#team").html("Cannot get content at the moment, try later.");
    },
    success: (data) => {
      setTimeout(() => {
        $("div#team").empty();
        $.each(data.members, (index, value) => {
          $("div#team").append(`<h2>${value.name}</h2>`);
          $("div#team").append(`<h5>${value.position}</h5>`);
          $("div#team").append(`<p>${value.bio}</p>`);
        });
      }, 3000);
    }
  })
}