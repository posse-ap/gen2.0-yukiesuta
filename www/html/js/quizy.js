function check(question_id,valid){
    console.log("valid_stmt" + (question_id) + (valid));
if (valid === 1) {
    document.getElementById("valid_stmt" + (question_id) + (valid)).classList.remove("my_hidden");
}else{
    document.getElementById("invalid_stmt" + (question_id) + (valid)).classList.remove("my_hidden");
}
}


