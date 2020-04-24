const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
},{
    title:'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title:'office modification',
    body:'Get a new seat'
}]

const findNote = function(notes, noteTitle){
    const index = notes.findIndex((note, index)=>{
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
        return notes[index]
}


const findNote = (notes, noteTitle)=>{
        return notes.find((note, index)=>{
            return note.title.toLowerCase() === noteTitle.toLowerCase()
    }) 
}

const note = findNote(notes, 'office modification')

console.log(note)