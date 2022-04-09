// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(value ===""){
        for (const key in records) {
      delete records[key][prop];
        }
    }
    else if(prop !== "tracks" && value !== ""){
   for (const key in records) {
       if(key == id){
       
        records[key][prop] = value;
        
       }
   }
    
    }else if(prop === "tracks" && value !== ""){
       
      if(records[id].hasOwnProperty(prop)){
        records[id].tracks.push(value);
      }else{
          records[id].tracks = [];
        records[id].tracks.push(value);
        
      }
      
    }

    
    return records;
  }
  
  console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));