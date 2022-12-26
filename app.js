const element2 = document.getElementsByTagName('alivier-super-especicifico-bottom')
addEventListener('click', (event) =>{

    if(event.target == element2[0]){
        document.body.innerHTML = `<div style="position: fixed; background-color: rgba( 0, 0, 0, .3);min-height: 100%;min-width: 100%;display: flex;justify-content: center;align-items: center;top: 0;"> <h2>hola mundo</h2> </div>`;
    }
})