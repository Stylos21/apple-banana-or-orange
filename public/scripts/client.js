document.getElementById('btn').addEventListener('click', e => {
    e.preventDefault();
    const output = document.getElementById('output');
    const file = document.querySelector('input[type=file]').files[0]
    var reader = new FileReader();
    reader.onloadend = () => {
        output.src = reader.result;

    }
    
    if (file) reader.readAsDataURL(file);
    else output.src = '';


    async function getRes() {
        const model = await tf.loadModel('../data/model.json')
        const pred = await tf.tidy(() => {
            let out = tf.fromPixels(output, 3);
            out = out.expandDims();
            out = tf.image.resizeBilinear(out, [64, 64])
            const res = model.predict(out);
            res.print()
            const datatatata = res.argMax(1).dataSync()[0];
            
            if (datatatata === 0) {
                document.getElementById('hi').innerHTML = 'That\'s a round apple. A round, red apple.';
              
            }
            else if (datatatata === 1) {
                

                document.getElementById('hi').innerHTML = 'That\'s a yellow banana. Definitely. A banana.';
                
            }
            
            else if (datatatata === 2) {
               
                document.getElementById('hi').innerHTML = 'That\'s an orange. Yep. Uh-huh, orange.';
                
            }

        })
    }
    getRes()
    
})
        

