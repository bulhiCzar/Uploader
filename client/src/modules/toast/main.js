
function modalInfo(e) {


    if (e) {
        // console.log(e)
        const divTimeDel = 1700

        let div = document.createElement('div')
        div.className = 'toast-top-right'
        div.id = 'toast-container'
        div.innerHTML = `
            <div class="toast toast-${e.type}" aria-live="polite" >
                <div class="toast-message">${e.message}</div>
            </div>
        `
        //<div class="toast-title">sfdsf</div>

        // <div id="toast-container" class="toast-top-right"><div class="toast toast-error" aria-live="assertive" style="display: block;"><div class="toast-title">sfdsf</div><div class="toast-message">sdffsddfsdsf</div></div></div>

        // const toast = document.querySelectorAll('.toast-top-right')
        
        document.body.append(div)

        setTimeout(() => {
            div.style.opacity = 0
            div.style.transition = 'all 1s'
            setTimeout(() => {
                div.remove()
            }, divTimeDel);
        }, divTimeDel);

    }



}


export default modalInfo