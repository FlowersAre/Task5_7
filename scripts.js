console.log(`Link OK.`)

$(`#t1`).on(`click`, () => {
    console.log(`Yeah, you clicked me`);
});

$(`#t2`).click(()=>{
    $(`#t1`).text(`Change`);
});

$(`#t3`).click(()=>{
    $(`#t1, #t2, #t3`).css(`background-color`,`yellow`);
});