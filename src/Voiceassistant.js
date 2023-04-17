intent('$(item* (.*))', (p)=>{
    if(p.item.value==='Health'||p.item.value==='science'||p.item.value==='General'||p.item.value==='Sports'||p.item.value==='business'){
        p.play({command:'VoiceNews', data:p.item.value});
        p.play(`Fetching News on $(p.item.value) Category`);
    }
    else{
        p.play('Please Try Again')
    }
})