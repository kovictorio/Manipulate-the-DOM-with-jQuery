$('body').append(
    '<h1>Hello World!</h1>'
  );

 let names = ["Norbi", "Máté", "Viktor", "Tünde", "László"];

  names.forEach((name) => {
    if (name === "Viktor") {
    $("ul").append(`<li class="bold">${name}</li>`);
    } else {
        $("ul").append(`<li>${name}</li>`);
    };
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append(
    `<h1>${additionalBlock.title}</h1>
    <p>${additionalBlock.text}</p>`
);