
function sample(val) {
    console.log(val(),"hi");
}


function test(){
    console.log("test");
    return "called";
};
sample(test);
