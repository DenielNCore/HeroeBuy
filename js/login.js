const LOCAL_LOGIN = 'loginName';
let loginName = "Гость";
localStorage.setItem(LOCAL_LOGIN, JSON.stringify(loginName) || "Гость");

$(`.submit`).on(`click`, () => {
    let loginName = $(`.loginName`).val();

    let z = $(`.headCart > span`);
        z.text(`Здравствуйте, ${loginName}`);
    if (z.text() !== "Здравствуйте, Гость"&&z.text() !== "Здравствуйте, ") {
        $(`.form`).hide();
        $(`.headCart`).height(60);
        $(`.buyNumberMini`).offset({top:11});
    }
});
