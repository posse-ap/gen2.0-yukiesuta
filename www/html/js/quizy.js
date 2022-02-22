for (let i = 0; i < 2; i++) {
    
    let valid_check = document.getElementById("selection" + (3 * i + 1));
    let invalid_check_a = document.getElementById("selection" + (3 * i + 2));
    let invalid_check_b = document.getElementById("selection" +(3 * i + 3));
    let valid_stmt = document.getElementById("valid_stmt" + (i + 1));
    let invalid_stmt = document.getElementById("invalid_stmt" + (i + 1) );

    
    valid_check.addEventListener('click',()=>{
        valid_stmt.classList.remove("my_hidden");
    })

    invalid_check_a.addEventListener('click',()=>{
        invalid_stmt.classList.remove("my_hidden");
    })

    invalid_check_b.addEventListener('click',()=>{
        invalid_stmt.classList.remove("my_hidden");
    })
}



