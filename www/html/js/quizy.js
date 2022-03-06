function cannot_click(specify_id){
    document.getElementById(specify_id).classList.add("cannot_click");
}

function check(question_id,valid){
    console.log("valid_stmt" + (question_id) + (valid));
if (valid === 1) {
    document.getElementById("valid_stmt" + (question_id) + (valid)).classList.remove("my_hidden");
    // document.getElementById("selections" + (question_id)).classList.add("cannot_click");
    cannot_click("selections" + (question_id))
}else{
    document.getElementById("invalid_stmt" + (question_id) + (valid)).classList.remove("my_hidden");
    // document.getElementById("selections" + (question_id)).classList.add("cannot_click");
    cannot_click("selections" + (question_id))
}
}