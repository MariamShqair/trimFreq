let stopWords_file=['about,above,across,after,afterwards,again,against,all,almost,alone,along,already,also,although,always,am'] //almost 87 cells
let story_file=["sameer am shareef omar omar diab sameer across","jameel omar said omar shareef rami abdullah about","Ruslan momen rayah roa ahlam jamela masa"] //lonest line is 49 cells

let data = [];

data.push(stopWords_file);//stop words
let d = data[0][0].split(",");


let counts={}

for(let line in story_file){
    
    data.push(story_file[line]);//word
    let s = data[1].split(" ");
  
    for(let item of s){
        if(d.includes(item)){
            s.splice(s.indexOf(item),1);
        }else{
            counts[item] = counts[item]?counts[item]+1 :1;
        }
  }
data.pop(1);
}
let max =0;
for(let item in counts){
   // console.log(counts[item])
    if(counts[item]>max){

    }
  //  console.log(counts[item]);
}

console.log(counts);

