const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
  
        console.log('Error reading first.txt: ', err)
        return
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {

        if (err) {

            console.log('Error reading second.txt: ', err)
            return
        }

        const second = result
        writeFile(
            './content/result-sync.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                console.log("all right until here. result: ", result)

                if (err){
                    console.log('Error writing result-sync.txt: ', err);
                    return
                }
                console.log(result)
            }
        )
    })
})