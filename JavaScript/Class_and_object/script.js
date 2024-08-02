class RailwayForm{
    sumit(){
        alert(this.Name+" your form is submitted for tain nunber "+this.TrainNo)
    }
    cancel(){
        alert(this.Name+" your form is cancelled for train number "+this.TrainNo)
    }
    fill(givanName,trainNo){
        this.Name=givanName
        this.TrainNo=new trainNo
    }
}
//create blank form for saurabh
let saurabhform=new RailwayForm()
//filled the form with saurabh details
saurabhform.fill("Saurabh singh",12345)
let Rohitform1=new RailwayForm()
let Rohitform2=new RailwayForm()
Rohitform1.fill("Rhot tripathi",22222)
Rohitform2.fill("Rhot tripathi",11111)

saurabhform.sumit()
Rohitform1.sumit()
saurabhform.cancel()
Rohitform2.cancel()